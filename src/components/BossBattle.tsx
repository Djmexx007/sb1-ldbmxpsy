import React, { useState } from 'react';
import { CheckCircle, XCircle, Flame, RotateCcw } from 'lucide-react';

interface BossQuestion {
  question: string;
  choices: {
    text: string;
    correct: boolean;
    explanation: string;
  }[];
}

interface BossBattleProps {
  name: string;
  quiz: BossQuestion[];
  onWin: () => void;
  onLose?: () => void;
}

export const BossBattle: React.FC<BossBattleProps> = ({ name, quiz, onWin, onLose }) => {
  if (!quiz || !Array.isArray(quiz) || quiz.length === 0) {
    return (
      <div className="p-4 text-red-400 bg-red-900/20 border border-red-500 rounded-lg">
        Erreur : aucun quiz chargé pour ce boss.
      </div>
    );
  }

  const [current, setCurrent] = useState(0);
  const [bossHP, setBossHP] = useState(quiz.length);
  const [lives, setLives] = useState(1);
  const [showResult, setShowResult] = useState<{ correct: boolean; explanation: string } | null>(null);
  const [completed, setCompleted] = useState<'win' | 'lose' | null>(null);

  const handleChoice = (isCorrect: boolean, explanation: string) => {
    if (isCorrect) {
      setBossHP(hp => hp - 1);
    } else {
      setLives(l => l - 1);
    }

    setShowResult({ correct: isCorrect, explanation });

    setTimeout(() => {
      setShowResult(null);

      if (!isCorrect && lives - 1 <= 0) {
        setCompleted('lose');
        onLose?.();
        return;
      }

      if (current < quiz.length - 1) {
        setCurrent(i => i + 1);
      } else {
        if (bossHP - (isCorrect ? 1 : 0) <= 0) {
          setCompleted('win');
          setTimeout(() => onWin(), 1500);
        } else {
          setCompleted('lose');
          onLose?.();
        }
      }
    }, 2000);
  };

  const restartBattle = () => {
    setCurrent(0);
    setBossHP(quiz.length);
    setLives(1);
    setCompleted(null);
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-500 flex justify-center items-center gap-2">
          <Flame className="w-6 h-6 animate-pulse" /> {name} - Combat Final
        </h2>
        <div className="mt-2">
          <div className="w-full bg-red-900 rounded-full h-4">
            <div
              className="bg-red-500 h-4 rounded-full transition-all duration-300"
              style={{ width: `${(bossHP / quiz.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-red-300 mt-1">PV du boss : {bossHP} / {quiz.length}</p>
          <p className="text-sm text-yellow-300">Vies restantes : {lives}</p>
        </div>
      </div>

      {completed === null && (
        <div className="p-4 bg-black/30 rounded-lg border border-red-500 space-y-4">
          <p className="text-lg font-semibold">{quiz[current].question}</p>
          <div className="grid gap-2">
            {quiz[current].choices.map((choice, idx) => (
              <button
                key={idx}
                onClick={() => handleChoice(choice.correct, choice.explanation)}
                className="w-full p-3 rounded-lg bg-red-500/10 border border-red-500 hover:bg-red-500/20 text-left"
              >
                {choice.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {showResult && (
        <div className={`p-4 rounded-lg flex items-center gap-2 ${showResult.correct ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
          {showResult.correct ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
          <span>{showResult.explanation}</span>
        </div>
      )}

      {completed === 'win' && (
        <div className="p-6 bg-green-700/20 text-green-200 border-2 border-green-500 rounded-xl text-center space-y-2 animate-pulse">
          <h3 className="text-xl font-bold">🎉 Victoire !</h3>
          <p>Vous avez vaincu {name} et maîtrisé ce chapitre.</p>
          <p className="text-sm italic">Récompenses débloquées…</p>
        </div>
      )}

      {completed === 'lose' && (
        <div className="p-6 bg-red-700/20 text-red-200 border-2 border-red-500 rounded-xl text-center space-y-2 animate-shake">
          <h3 className="text-xl font-bold">💀 Défaite...</h3>
          <p>{name} a eu raison de vous... cette fois.</p>
          <p className="text-sm italic">Révisez vos connaissances et retentez votre chance !</p>
          <button
            onClick={restartBattle}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500 rounded-lg hover:bg-red-500/30 text-sm"
          >
            <RotateCcw className="w-4 h-4" /> Rejouer le boss
          </button>
        </div>
      )}
    </div>
  );
};