// src/components/ui/HeaderBar.tsx
import React from "react";
import { useGame } from "../GameState";
import { Book, Star, Brain } from "lucide-react";
import { AnimatedXPBar } from "./AnimatedXPBar";

export const HeaderBar: React.FC = () => {
  const { state } = useGame();

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Book className="w-6 h-6 text-emerald-600" />
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">PQAP Study</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 px-3 py-1 bg-emerald-100 rounded-full text-sm border border-emerald-300">
            <Star className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-800">Niveau {state.playerLevel}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-emerald-100 rounded-full text-sm border border-emerald-300">
            <Brain className="w-4 h-4 text-emerald-600" />
            <AnimatedXPBar currentXP={state.playerXP} />
          </div>
        </div>
      </div>
    </header>
  );
};
