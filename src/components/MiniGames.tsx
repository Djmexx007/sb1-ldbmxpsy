import React, { useState } from 'react';
import { useGame } from './GameState';
import { Gamepad2, Brain, Timer, Trophy, ArrowLeft } from 'lucide-react';
import { MemoryGame } from './games/MemoryGame';
import { SpeedGame } from './games/SpeedGame';
import { PuzzleGame } from './games/PuzzleGame';
import { MatchingGame } from './games/MatchingGame';
import { Tutorial } from './games/Tutorial';
interface MiniGamesProps {
  onBack: () => void;
}

export const MiniGames: React.FC<MiniGamesProps> = ({ onBack }) => {
  const { addXP } = useGame();
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [showTutorial, setShowTutorial] = useState(true);

  const handleGameComplete = (score: number) => {
    const baseXP = 100;
    const earnedXP = Math.floor((score / 100) * baseXP);
    addXP(earnedXP);
  };

  const handleStartGame = (gameId: string) => {
    setSelectedGame(gameId);
    setShowTutorial(false);
  };

  const renderGame = () => {
    switch (selectedGame) {
      case 'memory':
        return <MemoryGame onComplete={handleGameComplete} />;
      case 'matching':
        return <MatchingGame onComplete={handleGameComplete} />;
      case 'puzzle':
        return <PuzzleGame onComplete={handleGameComplete} />;
      case 'speed':
        return <SpeedGame onComplete={handleGameComplete} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <button
        onClick={onBack}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 border border-green-500/30 hover:bg-green-900/30 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour au menu
      </button>

      {showTutorial ? (
        <Tutorial onBack={onBack} onStartGame={handleStartGame} />
      ) : selectedGame ? (
        <div className="mt-8 p-6 bg-black/30 rounded-xl border-2 border-green-500/30">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => setShowTutorial(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 border border-green-500/30 hover:bg-green-900/30 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au tutoriel
            </button>
          </div>
          {renderGame()}
        </div>
      ) : null}
    </div>
  );
};