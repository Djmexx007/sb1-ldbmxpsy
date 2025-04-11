import React, { useState, useEffect, useRef } from 'react';
import { Timer, Brain, Check, X } from 'lucide-react';

interface SpeedGameProps {
  onComplete: (score: number) => void;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quelle est la principale caractéristique d'une assurance vie temporaire ?",
    options: [
      "Protection pour une période déterminée",
      "Valeur de rachat garantie",
      "Primes fixes à vie",
      "Rendement garanti"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Qu'est-ce qu'un fonds distinct ?",
    options: [
      "Un compte bancaire spécial",
      "Un placement garanti par l'assurance",
      "Une action en bourse",
      "Un prêt hypothécaire"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Quand une rente viagère s'arrête-t-elle ?",
    options: [
      "Après 20 ans",
      "À 65 ans",
      "Au décès du rentier",
      "Quand le capital est épuisé"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Qu'est-ce qu'une police d'assurance conjointe ?",
    options: [
      "Une police pour deux personnes",
      "Une police temporaire",
      "Une police d'entreprise",
      "Une police avec valeur de rachat"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Quel est l'avantage d'un bénéficiaire désigné ?",
    options: [
      "Protection contre les créanciers",
      "Rendement garanti",
      "Prime réduite",
      "Valeur de rachat plus élevée"
    ],
    correctAnswer: 0
  }
];

export const SpeedGame: React.FC<SpeedGameProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [streak, setStreak] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState<{ correct: boolean; message: string } | null>(null);
  const timerRef = useRef<number>();

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setTimeLeft(time => {
        if (time <= 1) {
          clearInterval(timerRef.current);
          setGameOver(true);
          return 0;
        }
        return time - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (gameOver) {
      onComplete(score);
    }
  }, [gameOver, score, onComplete]);

  const handleAnswer = (answerIndex: number) => {
    const correct = answerIndex === questions[currentQuestion].correctAnswer;
    
    if (correct) {
      const points = 100 * multiplier;
      setScore(score + points);
      setStreak(streak + 1);
      setMultiplier(Math.min(4, multiplier + 0.5));
      setTimeLeft(prev => Math.min(30, prev + 5));
      setFeedback({ correct: true, message: `+${points} points ! +5 secondes !` });
    } else {
      setStreak(0);
      setMultiplier(1);
      setTimeLeft(prev => Math.max(0, prev - 3));
      setFeedback({ correct: false, message: "Incorrect ! -3 secondes !" });
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setCurrentQuestion(0);
        // Shuffle questions here if needed
      }
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-green-400 flex items-center gap-2">
          <Brain className="w-6 h-6" />
          Quiz Express
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-900/30 rounded-full">
            <Timer className="w-4 h-4" />
            <span>{timeLeft}s</span>
          </div>
          <div className="px-4 py-2 bg-green-900/30 rounded-full">
            Score: {score}
          </div>
          {streak > 1 && (
            <div className="px-4 py-2 bg-yellow-900/30 rounded-full text-yellow-400">
              x{multiplier.toFixed(1)}
            </div>
          )}
        </div>
      </div>

      {feedback && (
        <div className={`p-4 rounded-lg flex items-center gap-2 ${
          feedback.correct ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
        }`}>
          {feedback.correct ? (
            <Check className="w-5 h-5" />
          ) : (
            <X className="w-5 h-5" />
          )}
          {feedback.message}
        </div>
      )}

      <div className="p-6 bg-black/30 rounded-xl border-2 border-green-500/30">
        <p className="text-lg mb-6">
          {questions[currentQuestion].question}
        </p>
        <div className="grid grid-cols-1 gap-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={!!feedback}
              className={`
                w-full p-4 rounded-lg text-left transition-all duration-300
                ${feedback
                  ? index === questions[currentQuestion].correctAnswer
                    ? 'bg-green-500/20 border-2 border-green-500'
                    : index === questions[currentQuestion].correctAnswer
                      ? 'bg-red-500/20 border-2 border-red-500'
                      : 'bg-black/30 border-2 border-transparent opacity-50'
                  : 'bg-black/30 border-2 border-green-500/30 hover:border-green-500/60'
                }
              `}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {gameOver && (
        <div className="p-6 bg-green-900/30 rounded-xl border-2 border-green-500 text-center">
          <h3 className="text-xl font-bold mb-2">Temps écoulé !</h3>
          <p className="text-green-300">Score final : {score}</p>
          {streak > 5 && (
            <p className="text-yellow-400 mt-2">
              Série impressionnante : {streak} bonnes réponses !
            </p>
          )}
        </div>
      )}
    </div>
  );
};