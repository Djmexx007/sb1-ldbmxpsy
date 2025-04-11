import React, { useState, useEffect } from 'react';
import { useGame } from './GameState';
import { Book, Brain, Trophy, ArrowRight, Star, Shield, Target, Sparkles } from 'lucide-react';
import { Chapter, Question, Boss } from '../types/chapter';

interface ChapterContentProps {
  chapter: Chapter;
  onComplete: () => void;
}

export const ChapterContent: React.FC<ChapterContentProps> = ({ chapter, onComplete }) => {
  const { addXP, addBadge, addTitle } = useGame();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledChoices, setShuffledChoices] = useState<any[]>([]);

  useEffect(() => {
    if (!chapter?.quiz?.[currentQuestionIndex]?.choices) return;
    const choices = [...chapter.quiz[currentQuestionIndex].choices];
    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choices[i], choices[j]] = [choices[j], choices[i]];
    }
    setShuffledChoices(choices);
  }, [chapter?.quiz, currentQuestionIndex]);

  const handleAnswer = (answerIndex: number) => {
    if (!chapter?.quiz?.[currentQuestionIndex] || showExplanation) return;
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    const currentQuestion = chapter.quiz[currentQuestionIndex];
    const selectedChoice = shuffledChoices[answerIndex];
    if (selectedChoice?.correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (!chapter?.quiz) return;
    if (currentQuestionIndex < chapter.quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      completeChapter();
    }
  };

  const completeChapter = () => {
    const totalQuestions = chapter.quiz?.length || 0;
    const accuracy = totalQuestions > 0 ? score / totalQuestions : 0;
    const baseXP = chapter.boss?.rewards?.xp || 100;
    const earnedXP = Math.floor(baseXP * accuracy);

    addXP(earnedXP);

    if (score === totalQuestions && chapter.boss) {
      addBadge(chapter.boss.rewards.badge);
      addTitle(chapter.boss.rewards.title);
    }

    setQuizCompleted(true);
    onComplete();
  };

  if (!chapter) {
    return (
      <div className="p-6 bg-black/30 rounded-xl border-2 border-green-500/30">
        <p className="text-center text-green-400">Chargement du chapitre...</p>
      </div>
    );
  }

  const currentQuestion = chapter.quiz?.[currentQuestionIndex];
  const totalQuestions = chapter.quiz?.length || 0;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="p-6 bg-black/30 rounded-xl border-2 border-green-500/30">
        <h2 className="text-2xl font-bold text-green-400 flex items-center gap-2 mb-4">
          <Book className="w-6 h-6" />
          {chapter.title}
        </h2>
        <div className="prose prose-invert max-w-none">
          <div className="whitespace-pre-wrap text-green-300/90 mb-6">
            {chapter.summary}
          </div>
        </div>

        {chapter.boss && (
          <div className="mt-6 p-4 bg-red-900/20 rounded-lg border border-red-500/30">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-6 h-6 text-red-400" />
              <h3 className="text-lg font-bold text-red-400">Boss: {chapter.boss.name}</h3>
            </div>
            <p className="text-red-300/90">{chapter.boss.description}</p>
            <div className="mt-3 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-red-400" />
                <span className="text-sm">Difficulté: {chapter.boss.difficulty}/5</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">{chapter.boss.rewards.xp} XP à gagner</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {!quizCompleted && currentQuestion && (
        <div className="p-6 bg-black/30 rounded-xl border-2 border-green-500/30">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-green-400 flex items-center gap-2">
              <Brain className="w-6 h-6" />
              Question {currentQuestionIndex + 1} sur {totalQuestions}
            </h3>
            <div className="px-4 py-2 bg-green-900/30 rounded-full">
              Score: {score}/{totalQuestions}
            </div>
          </div>

          <div className="mb-6">
            <div className="p-4 bg-green-900/20 rounded-lg border border-green-500/30 mb-6">
              <p className="text-lg text-green-300">{currentQuestion.question}</p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {shuffledChoices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showExplanation}
                  className={`
                    w-full p-4 rounded-lg text-left transition-all duration-300
                    ${showExplanation
                      ? choice.correct
                        ? 'bg-green-500/20 border-2 border-green-500'
                        : selectedAnswer === index
                          ? 'bg-red-500/20 border-2 border-red-500'
                          : 'bg-black/30 border-2 border-transparent opacity-50'
                      : 'bg-black/30 border-2 border-green-500/30 hover:border-green-500/60'
                    }
                  `}
                >
                  {choice.text}
                </button>
              ))}
            </div>
          </div>

          {showExplanation && (
            <>
              <div className="p-4 rounded-lg bg-green-900/30 border border-green-500/30 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  <span className="font-bold">Explication</span>
                </div>
                <p className="text-green-300">
                  {shuffledChoices.find(choice => choice.correct)?.explanation}
                </p>
              </div>

              <button
                onClick={handleNextQuestion}
                className="w-full p-3 rounded-lg bg-green-500/20 border-2 border-green-500 hover:bg-green-500/30 transition-all flex items-center justify-center gap-2"
              >
                {currentQuestionIndex < totalQuestions - 1 ? 'Question suivante' : 'Terminer le quiz'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      )}

      {quizCompleted && (
        <div className="p-6 bg-green-900/30 rounded-xl border-2 border-green-500">
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-center text-green-400 mb-2">
            Chapitre Terminé !
          </h3>
          <p className="text-xl text-center mb-4">
            Score final : {score}/{totalQuestions}
          </p>
          {score === totalQuestions && chapter.boss && (
            <div className="text-center text-green-300">
              <p className="mb-2">🏆 Parfait ! Vous avez maîtrisé ce chapitre !</p>
              <p>Vous avez gagné :</p>
              <ul className="list-none space-y-2 mt-4">
                <li className="flex items-center justify-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  {chapter.boss.rewards.badge}
                </li>
                <li className="flex items-center justify-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  {chapter.boss.rewards.title}
                </li>
                <li className="flex items-center justify-center gap-2">
                  <Brain className="w-5 h-5 text-yellow-400" />
                  {chapter.boss.rewards.xp} XP
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};