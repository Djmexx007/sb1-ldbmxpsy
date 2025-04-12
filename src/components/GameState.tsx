import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { modules } from '../content';
import { calculateProgressFromModules } from '@/hooks/useGameProgress';

interface Achievement {
  id: string;
  name: string;
  description: string;
  type: 'badge' | 'title';
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
  resetProgress: () => void;
}

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
  moduleProgress: calculateProgressFromModules([]),
};

const STORAGE_KEY = 'gameState';

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GameState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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
    setState(prev => ({
      ...prev,
      completedChapters: Array.from(new Set([...prev.completedChapters, chapterId])),
      moduleProgress: calculateProgressFromModules([
        ...prev.completedChapters,
        chapterId,
      ]),
    }));
  }, []);

  const unlockWorld = useCallback((worldId: number) => {
    setState(prev => ({
      ...prev,
      unlockedWorlds: Array.from(new Set([...prev.unlockedWorlds, worldId])),
    }));
  }, []);

  const setCurrentWorld = useCallback((worldId: number | null) => {
    setState(prev => ({
      ...prev,
      currentWorld: worldId,
    }));
  }, []);

  const setCurrentChapter = useCallback((chapterId: string | null) => {
    setState(prev => ({
      ...prev,
      currentChapter: chapterId,
    }));
  }, []);

  const addBadge = useCallback((badge: string) => {
    setState(prev => ({
      ...prev,
      badges: Array.from(new Set([...prev.badges, badge])),
    }));
  }, []);

  const addTitle = useCallback((title: string) => {
    setState(prev => ({
      ...prev,
      titles: Array.from(new Set([...prev.titles, title])),
    }));
  }, []);

  const resetProgress = useCallback(() => {
    setState(initialState);
  }, []);

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
        resetProgress,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within GameProvider');
  return context;
};
