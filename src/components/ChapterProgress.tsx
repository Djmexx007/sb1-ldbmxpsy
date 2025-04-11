import React from 'react';
import { useGame } from './GameState';
import { Book, CheckCircle, Trophy, Star, Brain } from 'lucide-react';

export const ChapterProgress: React.FC = () => {
  const { state } = useGame();
  const { completedChapters } = state;

  // Calculate total chapters completed
  const totalChapters = 11;
  const completedCount = completedChapters.length;
  const completionPercentage = Math.round((completedCount / totalChapters) * 100);

  return (
    <div className="space-y-4">
      {/* Main Progress Bar */}
      <div className="p-6 bg-black/30 rounded-xl border border-green-500/30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Book className="w-6 h-6 text-green-400" />
            <h2 className="text-lg font-bold text-green-400">Progression</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-green-900/30 rounded-full">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span>{completedCount}/{totalChapters}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-900/30 rounded-full">
              <Brain className="w-4 h-4" />
              <span>{completionPercentage}%</span>
            </div>
          </div>
        </div>

        {/* Progress Grid */}
        <div className="grid grid-cols-11 gap-1">
          {Array.from({ length: totalChapters }).map((_, index) => {
            const isCompleted = completedChapters.includes(`chapter-${index + 1}`);
            return (
              <div
                key={index}
                className={`
                  aspect-square rounded-md flex items-center justify-center transition-all duration-300
                  ${isCompleted 
                    ? 'bg-green-500/20 border border-green-500' 
                    : 'bg-black/30 border border-green-500/30'
                  }
                `}
              >
                {isCompleted && <CheckCircle className="w-4 h-4 text-green-400" />}
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="h-2 bg-green-900/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-400 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-black/30 rounded-xl border border-green-500/30">
          <h3 className="flex items-center gap-2 mb-4 text-lg font-bold">
            <Star className="w-5 h-5 text-yellow-400" />
            Récompenses Débloquées
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Badges</span>
              <span className="text-green-400">{state.badges.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Titres</span>
              <span className="text-green-400">{state.titles.length}</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-black/30 rounded-xl border border-green-500/30">
          <h3 className="flex items-center gap-2 mb-4 text-lg font-bold">
            <Trophy className="w-5 h-5 text-yellow-400" />
            Progression Globale
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Niveau Actuel</span>
              <span className="text-green-400">{state.playerLevel}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>XP Total</span>
              <span className="text-green-400">{state.playerXP}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};