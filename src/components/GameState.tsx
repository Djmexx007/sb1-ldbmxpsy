// GameState.ts — Gestion centralisée de l'état du jeu avec validation, sauvegarde et progression
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import { modules } from '../content';
import { calculateProgressFromModules } from '@/hooks/useGameProgress';

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
  resetGlobalProgress: () => void;
  calculateModuleProgress: (moduleId: number) => { completed: number; total: number; percentage: number };
}

const STATE_VERSION = '1.0.0';
const STORAGE_KEY = 'gameState';
const BACKUP_KEY = 'gameState_backup';

const defaultProgress = calculateProgressFromModules(modules);

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
    lastPlayed: '',
  },
  moduleProgress: defaultProgress,
  version: STATE_VERSION,
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GameState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : initialState;
    } catch {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    localStorage.setItem(BACKUP_KEY, JSON.stringify(state));
  }, [state]);

  const addXP = useCallback((xp: number) => {
    setState(prev => {
      const newXP = prev.playerXP + xp;
      const newLevel = Math.floor(newXP / 1000) + 1;
      return {
        ...prev,
        playerXP: newXP,
        playerLevel: newLevel,
      };
    });
  }, []);

  const completeChapter = useCallback((chapterId: string) => {
    setState(prev => {
      const updated = new Set([...prev.completedChapters, chapterId]);
      return {
        ...prev,
        completedChapters: Array.from(updated),
        moduleProgress: calculateProgressFromModules(modules, Array.from(updated)),
      };
    });
  }, []);

  const unlockWorld = useCallback((worldId: number) => {
    setState(prev => ({
      ...prev,
      unlockedWorlds: [...new Set([...prev.unlockedWorlds, worldId])],
    }));
  }, []);

  const setCurrentWorld = useCallback((worldId: number | null) => {
    setState(prev => ({ ...prev, currentWorld: worldId }));
  }, []);

  const setCurrentChapter = useCallback((chapterId: string | null) => {
    setState(prev => ({ ...prev, currentChapter: chapterId }));
  }, []);

  const addBadge = useCallback((badge: string) => {
    setState(prev => ({
      ...prev,
      badges: [...new Set([...prev.badges, badge])],
    }));
  }, []);

  const addTitle = useCallback((title: string) => {
    setState(prev => ({
      ...prev,
      titles: [...new Set([...prev.titles, title])],
    }));
  }, []);

  const updateStreak = useCallback(() => {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    setState(prev => {
      let daily = prev.streaks.daily;
      if (prev.streaks.lastPlayed !== today) {
        daily = prev.streaks.lastPlayed === yesterday ? daily + 1 : 1;
      }
      return {
        ...prev,
        streaks: {
          daily,
          lastPlayed: today,
        },
      };
    });
  }, []);

  const resetGlobalProgress = useCallback(() => {
    setState({ ...initialState });
  }, []);

  const calculateModuleProgress = useCallback((moduleId: number) => {
    const module = modules.find(m => m.id === moduleId);
    if (!module) return { completed: 0, total: 0, percentage: 0 };
    const completed = state.completedChapters.filter(id => module.chapters.some(c => c.id === id)).length;
    const total = module.chapters.length;
    return { completed, total, percentage: (completed / total) * 100 };
  }, [state.completedChapters]);

  return (
    <GameContext.Provider
      value={{
        state,
        addXP,
        completeChapter,
        unlockWorld,
        setCurrentWorld,
        setCurrentChapter,
        addBadge,
        addTitle,
        updateStreak,
        resetGlobalProgress,
        calculateModuleProgress,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within a GameProvider');
  return context;
};