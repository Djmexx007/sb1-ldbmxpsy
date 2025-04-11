import React, { useState } from 'react';
import { useGame } from './GameState';
import { ChapterContent } from './ChapterContent';
import { Book, ArrowLeft } from 'lucide-react';
import { BossBattle } from "./BossBattle"; // si le fichier est dans le même dossier
import { chapter1 } from '@/chapters/chapter1';

interface ChapterViewProps {
  chapter: any;
  onBack: () => void;
}

export const ChapterView: React.FC<ChapterViewProps> = ({ chapter, onBack }) => {
  const { completeChapter, state } = useGame();
  const [bossDefeated, setBossDefeated] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const chapterAlreadyCompleted = state.completedChapters.includes(chapter.id);

  const handleChapterComplete = () => {
    setQuizCompleted(true);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={onBack}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 border border-green-500/30 hover:bg-green-900/30 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour aux chapitres
      </button>

      {chapterAlreadyCompleted && (
        <div className="p-6 bg-green-800/20 border-2 border-green-500 rounded-xl text-center text-green-300">
          ✅ Ce chapitre a déjà été complété!
        </div>
      )}

      {!chapterAlreadyCompleted && (
        <>
          {/* Contenu du chapitre */}
          <ChapterContent chapter={chapter} onComplete={handleChapterComplete} />

          {/* Message tant que le quiz n'est pas complété */}
          {chapter.boss && !quizCompleted && (
            <div className="p-4 text-yellow-300 bg-yellow-800/10 border border-yellow-500 rounded-lg text-center">
              🧠 Complétez le quiz pour débloquer le boss final !
            </div>
          )}

          {/* Affichage conditionnel du boss */}
          {chapter.boss && quizCompleted && !bossDefeated && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-red-500">⚔️ Combat Final : {chapter.boss.name}</h2>
              <BossBattle
                name={chapter.boss.name}
                quiz={chapter.boss.quiz}
                onWin={() => {
                  setBossDefeated(true);
                  completeChapter(chapter.id);
                }}
                onLose={() => {
                  console.log("Défaite contre le boss. Réessaie !");
                }}
              />
            </div>
          )}

          {bossDefeated && (
            <div className="p-4 bg-green-900/20 border border-green-500 rounded-lg text-green-300 text-center">
              🎉 Bravo, vous avez vaincu le boss de ce chapitre !
            </div>
          )}
        </>
      )}
    </div>
  );
};