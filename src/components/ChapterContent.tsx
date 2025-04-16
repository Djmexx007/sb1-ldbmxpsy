import React, { useState, useEffect } from 'react';
import { useGame } from './GameState';
import { Book, Brain, Trophy, ArrowRight, Sparkles, Shield, Star, Target } from 'lucide-react';
import { Chapter } from '../types/chapter';

interface ChapterContentProps {
  chapter: Chapter;
  onComplete: () => void;
}

export const ChapterContent: React.FC<ChapterContentProps> = ({ chapter, onComplete }) => {
  const { addXP, addBadge, addTitle } = useGame();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledChoices, setShuffledChoices] = useState<any[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    if (chapter.quiz && chapter.quiz[currentQuestionIndex]) {
      const choices = [...chapter.quiz[currentQuestionIndex].choices];
      setShuffledChoices(choices.sort(() => Math.random() - 0.5));
    }
  }, [chapter.quiz, currentQuestionIndex]);

  const handleAnswer = (index: number) => {
    if (showExplanation || !chapter.quiz) return;

    setSelectedAnswer(index);
    setShowExplanation(true);

    const selected = shuffledChoices[index];
    if (selected?.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (!chapter.quiz) return;

    if (currentQuestionIndex < chapter.quiz.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      completeQuiz();
    }
  };

  const completeQuiz = () => {
    if (quizCompleted) return; // ⚠️ éviter double appel
    setQuizCompleted(true);

    if (chapter.boss) {
      const xpEarned = Math.floor((score / chapter.quiz.length) * chapter.boss.rewards.xp);
      if (typeof addXP === 'function') addXP(xpEarned);

      if (score === chapter.quiz.length) {
        if (typeof addBadge === 'function') addBadge(chapter.boss.rewards.badge);
        if (typeof addTitle === 'function') addTitle(chapter.boss.rewards.title);
      }
    }

    onComplete();
  };

  const currentQuestion = chapter.quiz?.[currentQuestionIndex];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Résumé du chapitre */}
      <div className="p-6 rounded-xl bg-green-900/10 border border-green-600/30">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-green-400">
          <Book className="w-6 h-6" />
          {chapter.title}
        </h2>
        <p className="whitespace-pre-wrap text-green-200">{chapter.summary}</p>

        {chapter.boss && (
          <div className="mt-6 p-4 rounded-lg bg-red-900/10 border border-red-500/20 text-red-300">
            <div className="flex items-center gap-2 font-bold text-red-400 mb-2">
              <Shield className="w-5 h-5" />
              Boss : {chapter.boss.name}
            </div>
            <p>{chapter.boss.description}</p>
            <div className="flex gap-4 mt-2 text-sm">
              <span className="flex items-center gap-1">
                <Target className="w-4 h-4" /> Difficulté : {chapter.boss.difficulty}/5
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4" /> XP max : {chapter.boss.rewards.xp}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Quiz */}
      {!quizCompleted && currentQuestion && (
        <div className="p-6 rounded-xl bg-black/30 border border-green-500/30">
          <div className="flex justify-between mb-4 text-green-300">
            <h3 className="font-bold flex gap-2 items-center">
              <Brain className="w-5 h-5" />
              Question {currentQuestionIndex + 1} / {chapter.quiz?.length}
            </h3>
            <div className="text-sm opacity-80">Score : {score}</div>
          </div>

          <div className="text-lg font-medium text-green-100 mb-4">{currentQuestion.question}</div>

          <div className="space-y-3">
            {shuffledChoices.map((choice, idx) => {
              const isCorrect = choice.correct;
              const isSelected = selectedAnswer === idx;

              const baseStyle =
                "w-full p-4 rounded-lg text-left transition-all duration-300 border";

              const finalStyle = !showExplanation
                ? `${baseStyle} bg-black/20 border-green-500/20 hover:border-green-400`
                : isCorrect
                ? `${baseStyle} bg-green-500/20 border-green-400 text-green-200`
                : isSelected
                ? `${baseStyle} bg-red-500/20 border-red-500 text-red-200`
                : `${baseStyle} bg-black/10 border-green-800/20 opacity-50`;

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={finalStyle}
                  disabled={showExplanation}
                >
                  {choice.text}
                </button>
              );
            })}
          </div>

          {/* Explication */}
          {showExplanation && (
            <>
              <div className="mt-6 bg-green-800/20 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1 text-yellow-300">
                  <Sparkles className="w-5 h-5" />
                  Explication
                </div>
                <p className="text-green-200">
                  {shuffledChoices.find(c => c.correct)?.explanation}
                </p>
              </div>

              <button
                onClick={handleNextQuestion}
                className="mt-6 w-full p-3 rounded-lg bg-green-600 hover:bg-green-700 transition text-white font-bold flex justify-center gap-2"
              >
                {currentQuestionIndex < chapter.quiz.length - 1 ? 'Question Suivante' : 'Terminer le quiz'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      )}

      {/* Résultat final */}
      {quizCompleted && (
        <div className="p-6 rounded-xl bg-green-700/10 border border-green-500/30 text-center">
          <Trophy className="w-14 h-14 text-yellow-400 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-green-300 mb-1">Chapitre Terminé !</h3>
          <p className="text-green-200 mb-2">
            Score final : {score} / {chapter.quiz?.length}
          </p>

          {score === chapter.quiz?.length && chapter.boss && (
            <div className="mt-4 text-green-400">
              <p>🏆 Bravo, tu as parfaitement maîtrisé ce chapitre !</p>
              <p className="mt-1 text-sm">Tu gagnes :</p>
              <ul className="mt-2 space-y-1">
                <li>🎖️ Badge : {chapter.boss.rewards.badge}</li>
                <li>📛 Titre : {chapter.boss.rewards.title}</li>
                <li>✨ XP : {chapter.boss.rewards.xp}</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
