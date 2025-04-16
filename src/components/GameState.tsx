import React, { createContext, useContext, useReducer } from 'react';

interface Chapter {
  id: string;
  title: string;
  completed?: boolean;
}

interface Module {
  id: number;
  name: string;
  chapters?: Chapter[];
}

interface Progress {
  id: number;
  progress: number;
}

interface GameState {
  modules: Module[];
  progress: Progress[];
  playerXP: number;
  playerLevel: number;
  badges: string[];
  titles: string[];
  completedChapters: string[];
  unlockedWorlds: number[];
  currentWorld: number | null;
  currentChapter: string | null;
}

const initialState: GameState = {
  modules: [],
  progress: [],
  playerXP: 0,
  playerLevel: 1,
  badges: [],
  titles: [],
  completedChapters: [],
  unlockedWorlds: [1],
  currentWorld: null,
  currentChapter: null,
};

type Action =
  | { type: 'SET_MODULES'; payload: Module[] }
  | { type: 'MARK_CHAPTER_COMPLETED'; chapterId: string };

const GameContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<Action>;
  setCurrentWorld: (id: number) => void;
  setCurrentChapter: (id: string) => void;
  markChapterCompleted: (chapterId: string) => void;
  addXP: (amount: number) => void;
  addBadge: (badge: string) => void;
  addTitle: (title: string) => void;
  resetProgress: () => void;
}>({} as any);

// Calcul du progrès à partir des modules
function calculateProgressFromModules(modules: Module[]): Progress[] {
  return modules.map((module) => {
    const chapters = Array.isArray(module.chapters) ? module.chapters : [];
    const completed = chapters.filter((ch) => ch.completed).length;
    const total = chapters.length;
    return {
      id: module.id,
      progress: total > 0 ? completed / total : 0,
    };
  });
}

// Reducer
function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case 'SET_MODULES':
      return {
        ...state,
        modules: action.payload,
        progress: calculateProgressFromModules(action.payload),
      };

    case 'MARK_CHAPTER_COMPLETED':
      if (state.completedChapters.includes(action.chapterId)) return state;

      return {
        ...state,
        completedChapters: [...state.completedChapters, action.chapterId],
      };

    default:
      return state;
  }
}

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setCurrentWorld = (id: number) => {
    state.currentWorld = id;
  };

  const setCurrentChapter = (id: string) => {
    state.currentChapter = id;
  };

  const markChapterCompleted = (chapterId: string) => {
    dispatch({ type: 'MARK_CHAPTER_COMPLETED', chapterId });
  };

  const addXP = (amount: number) => {
    const newXP = state.playerXP + amount;
    const newLevel = Math.floor(newXP / 1000) + 1;

    state.playerXP = newXP;
    state.playerLevel = newLevel;

    // Déblocage automatique de mondes si niveau atteint
    const newUnlocked = [...state.unlockedWorlds];
    if (newLevel >= 5 && !newUnlocked.includes(2)) newUnlocked.push(2);
    if (newLevel >= 10 && !newUnlocked.includes(3)) newUnlocked.push(3);
    if (newLevel >= 15 && !newUnlocked.includes(4)) newUnlocked.push(4);

    state.unlockedWorlds = newUnlocked;
  };

  const addBadge = (badge: string) => {
    if (!state.badges.includes(badge)) {
      state.badges.push(badge);
    }
  };

  const addTitle = (title: string) => {
    if (!state.titles.includes(title)) {
      state.titles.push(title);
    }
  };

  const resetProgress = () => {
    Object.assign(state, initialState);
  };

  return (
    <GameContext.Provider
      value={{
        state,
        dispatch,
        setCurrentWorld,
        setCurrentChapter,
        markChapterCompleted,
        addXP,
        addBadge,
        addTitle,
        resetProgress,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
