import React, { useState } from 'react';
import { useGame } from './GameState';
import { Book, Scroll, Swords, Map, Trophy, Star, ArrowRight, ArrowLeft } from 'lucide-react';
import { modules } from '../content';
import { ChapterView } from './ChapterView';

interface StoryProps {
  onBack: () => void;
}

export const StoryMode: React.FC<StoryProps> = ({ onBack }) => {
  const { state, setCurrentWorld, setCurrentChapter } = useGame();
  const [selectedWorld, setSelectedWorld] = useState<number | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [showIntro, setShowIntro] = useState(true);

  const world = selectedWorld ? modules.find(m => m.id === selectedWorld) : null;
  const chapter = selectedChapter && world 
    ? world.chapters.find(c => c.id === selectedChapter)
    : null;

  const handleWorldSelect = (worldId: number) => {
    setSelectedWorld(worldId);
    setCurrentWorld(worldId);
    setShowIntro(true);
  };

  const handleChapterSelect = (chapterId: string) => {
    setSelectedChapter(chapterId);
    setCurrentChapter(chapterId);
  };

  const handleChapterBack = () => {
    setSelectedChapter(null);
    setShowIntro(false);
  };

 const isWorldUnlocked = (worldId: number) => {
  if (worldId === 1) return true; // Le monde 1 est toujours débloqué
  return Array.isArray(state.unlockedWorlds) && state.unlockedWorlds.includes(worldId);
};


  const isChapterCompleted = (chapterId: string) => {
    return Array.isArray(state.completedChapters) && state.completedChapters.includes(chapterId);
  };

  const renderWorldIntro = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="p-6 bg-black/30 rounded-xl border-2 border-green-500/30">
        <h2 className="text-2xl font-bold text-green-400 flex items-center gap-2 mb-4">
          <Book className="w-6 h-6" />
          {world?.title}
        </h2>
        <p className="text-green-300/90 mb-6">{world?.description}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={() => setSelectedWorld(null)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 border border-green-500/30 hover:bg-green-900/30 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux mondes
          </button>
          <button
            onClick={() => setShowIntro(false)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 border border-green-500 hover:bg-green-500/30 transition-all"
          >
            Voir les chapitres
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-black/30 rounded-xl border-2 border-green-500/30">
          <h3 className="text-lg font-bold text-green-400 flex items-center gap-2 mb-4">
            <Star className="w-5 h-5" />
            Récompenses Disponibles
          </h3>
          <ul className="space-y-2 text-green-300/90">
            <li className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Badges spéciaux
            </li>
            <li className="flex items-center gap-2">
              <Scroll className="w-4 h-4" />
              Titres uniques
            </li>
            <li className="flex items-center gap-2">
              <Swords className="w-4 h-4" />
              Points d'expérience bonus
            </li>
          </ul>
        </div>

        <div className="p-6 bg-black/30 rounded-xl border-2 border-green-500/30">
          <h3 className="text-lg font-bold text-green-400 flex items-center gap-2 mb-4">
            <Map className="w-5 h-5" />
            Aperçu
          </h3>
          <p className="text-green-300/90">
            Explorez ce monde pour découvrir ses secrets et maîtriser ses connaissances.
          </p>
        </div>
      </div>
    </div>
  );

  const renderChapterList = () => (
    <div className="space-y-4">
      <button
        onClick={() => setShowIntro(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 border border-green-500/30 hover:bg-green-900/30 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour à l'introduction
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {world?.chapters.map((chapter, index) => {
          const isUnlocked =
            index === 0 && world.id === 1
              ? true // Débloquer le tout premier chapitre automatiquement
              : index === 0 || isChapterCompleted(world.chapters[index - 1].id);

          return (
            <button
              key={chapter.id}
              onClick={() => handleChapterSelect(chapter.id)}
              className={`
                p-6 rounded-xl border-2 transition-all duration-300 text-left
                ${isChapterCompleted(chapter.id)
                  ? 'border-green-400 bg-green-900/30'
                  : isUnlocked
                    ? 'border-green-900/50 hover:border-green-700 bg-black/30'
                    : 'border-red-900/50 bg-black/30 opacity-50 cursor-not-allowed'
                }
              `}
              disabled={!isUnlocked}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold">Chapitre {index + 1}</h3>
                {isChapterCompleted(chapter.id) && (
                  <Trophy className="w-5 h-5 text-yellow-400" />
                )}
              </div>
              <h4 className="text-green-400 mb-2">{chapter.title}</h4>
              <p className="text-green-300/70 text-sm">{chapter.summary}</p>
              {chapter.boss && (
                <div className="mt-4 p-3 bg-black/30 rounded-lg border border-green-500/30">
                  <div className="flex items-center gap-2 text-sm text-green-400 mb-2">
                    <Swords className="w-4 h-4" />
                    Boss: {chapter.boss.name}
                  </div>
                  <p className="text-green-300/70 text-sm">{chapter.boss.description}</p>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );

  if (selectedChapter && chapter) {
    return <ChapterView chapter={chapter} onBack={handleChapterBack} />;
  }

  if (!selectedWorld) {
    return (
      <div className="space-y-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 border border-green-500/30 hover:bg-green-900/30 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au menu
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((world) => (
            <button
              key={world.id}
              onClick={() => handleWorldSelect(world.id)}
              className={`
                p-6 rounded-xl border-2 transition-all duration-300 text-left
                ${isWorldUnlocked(world.id)
                  ? 'border-green-900/50 hover:border-green-700 bg-black/30'
                  : 'border-red-900/50 bg-black/30 opacity-50 cursor-not-allowed'
                }
              `}
              disabled={!isWorldUnlocked(world.id)}
            >
              <h3 className="text-xl font-bold text-green-400 mb-2">{world.title}</h3>
              <p className="text-green-300/70 mb-4">{world.description}</p>
              {!isWorldUnlocked(world.id) && (
                <div className="text-red-400 text-sm">
                  Niveau {world.id * 5} requis pour débloquer
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {showIntro ? renderWorldIntro() : renderChapterList()}
    </div>
  );
};
