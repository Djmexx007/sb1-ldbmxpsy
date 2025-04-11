import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { modules } from '../content';

interface Achievement {
  id: string;
  name: string;
  description: string;
  type: 'badge' | 'title';
  condition: string;
  icon: string;
  obtained: boolean;
  timestamp?: number;
}

interface GameState {
  playerLevel: number;
  playerXP: number;
  completedChapters: string[];
  unlockedWorlds: number[];
  currentWorld: number | null;
  currentChapter: string | null;
  badges: string[];
  titles: string[];
  achievements: Achievement[];
  streaks: {
    daily: number;
    lastPlayed: string;
  };
  moduleProgress: {
    [key: string]: {
      completed: number;
      total: number;
      percentage: number;
    };
  };
  lastSaved?: number;
  version: string;
  checksum?: string;
}

interface GameContextType {
  state: GameState;
  addXP: (xp: number) => void;
  completeChapter: (chapterId: string) => void;
  unlockWorld: (worldId: number) => void;
  setCurrentWorld: (worldId: number | null) => void;
  setCurrentChapter: (chapterId: string | null) => void;
  addBadge: (badge: string) => void;
  addTitle: (title: string) => void;
  updateStreak: () => void;
  calculateModuleProgress: (moduleId: number) => { completed: number; total: number; percentage: number };
}

const STATE_VERSION = '1.0.0';
const SAVE_INTERVAL = 1000; // More frequent saves
const BACKUP_INTERVAL = 5000;
const BACKUP_KEY = 'gameState_backup';
const TEMP_SAVE_KEY = 'gameState_temp';
const MAX_RETRIES = 3;
const VALIDATION_TIMEOUT = 2000;

const calculateLevel = (xp: number): number => {
  return Math.floor(xp / 1000) + 1;
};

const calculateInitialModuleProgress = () => {
  const progress: { [key: string]: { completed: number; total: number; percentage: number } } = {};
  
  modules.forEach(module => {
    progress[module.id] = {
      completed: 0,
      total: module.chapters.length,
      percentage: 0
    };
  });

  return progress;
};

const initialState: GameState = {
  playerLevel: 1,
  playerXP: 0,
  completedChapters: [],
  unlockedWorlds: [1],
  currentWorld: null,
  currentChapter: null,
  badges: [],
  titles: [],
  achievements: [],
  streaks: {
    daily: 0,
    lastPlayed: ''
  },
  moduleProgress: calculateInitialModuleProgress(),
  version: STATE_VERSION
};

const calculateChecksum = async (state: GameState): Promise<string> => {
  try {
    const stateToHash = {
      ...state,
      checksum: undefined,
      lastSaved: undefined
    };
    
    const msgBuffer = new TextEncoder().encode(JSON.stringify(stateToHash));
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  } catch (error) {
    console.error('Error calculating checksum:', error);
    return '';
  }
};

const validateState = async (state: GameState): Promise<boolean> => {
  if (!state || typeof state !== 'object') return false;
  if (!state.version || state.version !== STATE_VERSION) return false;
  if (!state.checksum) return false;
  
  const currentChecksum = await calculateChecksum(state);
  return currentChecksum === state.checksum;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GameState>(() => {
    try {
      const savedState = localStorage.getItem('gameState');
      const backupState = localStorage.getItem(BACKUP_KEY);
      const tempState = localStorage.getItem(TEMP_SAVE_KEY);
      
      let restoredState: GameState | null = null;
      
      // Try to restore from main state
      if (savedState) {
        try {
          const parsed = JSON.parse(savedState);
          if (parsed.version === STATE_VERSION) {
            restoredState = parsed;
          }
        } catch (error) {
          console.error('Error parsing main state:', error);
        }
      }
      
      // Try backup if main state failed
      if (!restoredState && backupState) {
        try {
          const parsed = JSON.parse(backupState);
          if (parsed.version === STATE_VERSION) {
            restoredState = parsed;
            // Restore from backup to main
            localStorage.setItem('gameState', backupState);
          }
        } catch (error) {
          console.error('Error parsing backup state:', error);
        }
      }
      
      // Try temp state as last resort
      if (!restoredState && tempState) {
        try {
          const parsed = JSON.parse(tempState);
          if (parsed.version === STATE_VERSION) {
            restoredState = parsed;
            // Restore from temp to main
            localStorage.setItem('gameState', tempState);
          }
        } catch (error) {
          console.error('Error parsing temp state:', error);
        }
      }
      
      // Initialize new state if all restores failed
      if (!restoredState) {
        restoredState = { ...initialState };
        console.log('Initializing new game state');
      }

      return restoredState;
    } catch (error) {
      console.error('Error restoring state:', error);
      return { ...initialState };
    }
  });

  const saveStateRef = useRef(state);
  const saveTimeoutRef = useRef<number>();
  const retryCountRef = useRef(0);
  const lastSaveRef = useRef<number>(Date.now());

  const saveState = useCallback(async (newState: GameState) => {
    try {
      const stateToSave = {
        ...newState,
        lastSaved: Date.now(),
        checksum: await calculateChecksum(newState)
      };

      // Save to all storage locations synchronously
      localStorage.setItem(TEMP_SAVE_KEY, JSON.stringify(stateToSave));
      localStorage.setItem('gameState', JSON.stringify(stateToSave));
      localStorage.setItem(BACKUP_KEY, JSON.stringify(stateToSave));

      // Verify the save was successful
      const savedState = localStorage.getItem('gameState');
      if (!savedState) {
        throw new Error('Failed to verify saved state');
      }

      const isValid = await validateState(JSON.parse(savedState));
      if (!isValid) {
        throw new Error('Saved state validation failed');
      }

      retryCountRef.current = 0;
      saveStateRef.current = newState;
      lastSaveRef.current = Date.now();
      
      console.log('State saved successfully');
    } catch (error) {
      console.error('Error saving state:', error);
      
      if (retryCountRef.current < MAX_RETRIES) {
        retryCountRef.current++;
        setTimeout(() => saveState(newState), 1000);
      } else {
        console.error('Maximum save retries reached');
      }
    }
  }, []);

  // Save state periodically
  useEffect(() => {
    const saveInterval = setInterval(() => {
      const timeSinceLastSave = Date.now() - lastSaveRef.current;
      if (timeSinceLastSave >= SAVE_INTERVAL && 
          JSON.stringify(state) !== JSON.stringify(saveStateRef.current)) {
        saveState(state);
      }
    }, SAVE_INTERVAL);

    return () => clearInterval(saveInterval);
  }, [state, saveState]);

  // Save state before unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (JSON.stringify(state) !== JSON.stringify(saveStateRef.current)) {
        saveState(state);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [state, saveState]);

  // Validate state periodically
  useEffect(() => {
    const validateInterval = setInterval(async () => {
      const isValid = await validateState(state);
      if (!isValid) {
        console.warn('State validation failed, triggering save');
        saveState(state);
      }
    }, VALIDATION_TIMEOUT);

    return () => clearInterval(validateInterval);
  }, [state, saveState]);

  const addXP = useCallback((xp: number) => {
    setState(prev => {
      const newXP = prev.playerXP + xp;
      const newLevel = calculateLevel(newXP);
      const oldLevel = prev.playerLevel;
      
      const newUnlockedWorlds = [...prev.unlockedWorlds];
      if (newLevel >= 5 && !newUnlockedWorlds.includes(2)) newUnlockedWorlds.push(2);
      if (newLevel >= 10 && !newUnlockedWorlds.includes(3)) newUnlockedWorlds.push(3);
      if (newLevel >= 15 && !newUnlockedWorlds.includes(4)) newUnlockedWorlds.push(4);

      const newBadges = [...prev.badges];
      const newTitles = [...prev.titles];
      
      if (newLevel > oldLevel) {
        newBadges.push(`Niveau ${newLevel} Atteint`);
        if (newLevel >= 5) newTitles.push("Adepte de l'Assurance");
        if (newLevel >= 10) newTitles.push("Vétéran des Polices");
        if (newLevel >= 15) newTitles.push("Expert en Protection");
        if (newLevel >= 20) newTitles.push("Grand Maître de l'Assurance");
      }

      return {
        ...prev,
        playerXP: newXP,
        playerLevel: newLevel,
        unlockedWorlds: newUnlockedWorlds,
        badges: newBadges,
        titles: newTitles
      };
    });
  }, []);

  const completeChapter = useCallback((chapterId: string) => {
    setState(prev => ({
      ...prev,
      completedChapters: [...new Set([...prev.completedChapters, chapterId])]
    }));
  }, []);

  const unlockWorld = useCallback((worldId: number) => {
    setState(prev => ({
      ...prev,
      unlockedWorlds: [...new Set([...prev.unlockedWorlds, worldId])]
    }));
  }, []);

  const setCurrentWorld = useCallback((worldId: number | null) => {
    setState(prev => ({
      ...prev,
      currentWorld: worldId
    }));
  }, []);

  const setCurrentChapter = useCallback((chapterId: string | null) => {
    setState(prev => ({
      ...prev,
      currentChapter: chapterId
    }));
  }, []);
  
  const resetGame = useCallback(() => {
  const newState = { ...initialState };
  setState(newState);
  localStorage.removeItem('gameState');
  localStorage.removeItem('gameState_backup');
  localStorage.removeItem('gameState_temp');
  console.log('Game reset to initial state');
}, []);


  const addBadge = useCallback((badge: string) => {
    setState(prev => ({
      ...prev,
      badges: [...new Set([...prev.badges, badge])]
    }));
  }, []);

  const addTitle = useCallback((title: string) => {
    setState(prev => ({
      ...prev,
      titles: [...new Set([...prev.titles, title])]
    }));
  }, []);

  const updateStreak = useCallback(() => {
    setState(prev => {
      const today = new Date().toDateString();
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      
      let newStreak = prev.streaks.daily;
      
      if (prev.streaks.lastPlayed !== today) {
        if (prev.streaks.lastPlayed === yesterday) {
          newStreak += 1;
        } else {
          newStreak = 1;
        }

        return {
          ...prev,
          streaks: {
            daily: newStreak,
            lastPlayed: today
          }
        };
      }
      
      return prev;
    });
  }, []);

  const calculateModuleProgress = useCallback((moduleId: number) => {
    const module = modules.find(m => m.id === moduleId);
    if (!module) return { completed: 0, total: 0, percentage: 0 };

    const completed = state.completedChapters.filter(chapterId => 
      module.chapters.some(chapter => chapter.id === chapterId)
    ).length;

    const total = module.chapters.length;
    const percentage = (completed / total) * 100;

    return { completed, total, percentage };
  }, [state.completedChapters]);

  return (
    <GameContext.Provider value={{
      state,
      addXP,
      completeChapter,
      unlockWorld,
      setCurrentWorld,
      setCurrentChapter,
      addBadge,
      addTitle,
      updateStreak,
      calculateModuleProgress
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};