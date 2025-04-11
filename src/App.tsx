import React, { useState } from 'react';
import { Gamepad2, Swords, Trophy, Brain, Book, Terminal, Star, Mic } from 'lucide-react';
import { GameProvider, useGame } from './components/GameState';
import Quiz from './components/Quiz';
import Content from './components/Content';
import { StoryMode } from './components/StoryMode';
import { TerminalMode } from './components/TerminalMode';
import { DailyChallenge } from './components/DailyChallenge';
import { MiniGames } from './components/MiniGames';
import { PodcastSection } from './components/PodcastSections';

interface World {
  id: number;
  name: string;
  title: string;
  description: string;
  icon: React.ElementType;
  requiredLevel: number;
  progress: number;
}

const worlds: World[] = [
  {
    id: 1,
    name: "AccMaladie",
    title: "Assurance Maladie et Accident",
    description: "Maîtrisez les concepts essentiels de l'assurance maladie et accident pour l'examen",
    icon: Terminal,
    requiredLevel: 1,
    progress: 0
  },
  {
    id: 2,
    name: "AssVie",
    title: "Assurance Vie",
    description: "Approfondissez vos connaissances en assurance vie pour réussir l'examen",
    icon: Book,
    requiredLevel: 5,
    progress: 0
  },
  {
    id: 3,
    name: "PQAP",
    title: "Fonds Distincts et Rentes",
    description: "Explorez les fonds distincts et les rentes pour une préparation complète",
    icon: Brain,
    requiredLevel: 10,
    progress: 0
  },
  {
    id: 4,
    name: "Deonto",
    title: "Déontologie",
    description: "Maîtrisez les règles déontologiques essentielles à la profession",
    icon: Trophy,
    requiredLevel: 15,
    progress: 0
  }
];

interface GameMode {
  id: number;
  name: string;
  icon: React.ElementType;
  description: string;
  available: boolean;
}

const gameModes: GameMode[] = [
  {
    id: 1,
    name: "Mode Étude",
    icon: Book,
    description: "Apprenez à votre rythme avec des leçons interactives et des quiz",
    available: true
  },
  {
    id: 2,
    name: "Mini-Jeux Éducatifs",
    icon: Gamepad2,
    description: "Renforcez vos connaissances avec des jeux d'apprentissage amusants",
    available: true
  },
  {
    id: 3,
    name: "Défi Quotidien",
    icon: Star,
    description: "Testez vos connaissances avec de nouveaux défis chaque jour",
    available: true
  },
  {
    id: 4,
    name: "Mode Examen",
    icon: Terminal,
    description: "Préparez-vous avec des simulations d'examens réalistes",
    available: true
  }
];

function AppContent() {
  const { state } = useGame();
  const [selectedMode, setSelectedMode] = useState<number | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showMiniGames, setShowMiniGames] = useState(false);
  const [showDailyChallenge, setShowDailyChallenge] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);

  const handleModeSelect = (modeId: number) => {
    setSelectedMode(modeId);
    if (modeId === 2) {
      setShowMiniGames(true);
      setShowQuiz(false);
      setShowContent(false);
      setShowDailyChallenge(false);
      setShowTerminal(false);
    } else if (modeId === 1) {
      setShowContent(true);
      setShowQuiz(false);
      setShowMiniGames(false);
      setShowDailyChallenge(false);
      setShowTerminal(false);
    } else if (modeId === 3) {
      setShowDailyChallenge(true);
      setShowContent(false);
      setShowQuiz(false);
      setShowMiniGames(false);
      setShowTerminal(false);
    } else if (modeId === 4) {
      setShowTerminal(true);
      setShowDailyChallenge(false);
      setShowContent(false);
      setShowQuiz(false);
      setShowMiniGames(false);
    } else {
      setShowQuiz(false);
      setShowContent(false);
      setShowMiniGames(false);
      setShowDailyChallenge(false);
      setShowTerminal(false);
    }
  };

  const renderContent = () => {
    if (showTerminal) return <TerminalMode onBack={() => setShowTerminal(false)} />;
    if (showDailyChallenge) return <DailyChallenge onBack={() => setShowDailyChallenge(false)} />;
    if (showMiniGames) return <MiniGames onBack={() => setShowMiniGames(false)} />;
    if (showContent) return <StoryMode onBack={() => setShowContent(false)} />;

    return (
      <>
        {/* Game Modes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Swords className="w-6 h-6" />
            Modes d'Apprentissage
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gameModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => handleModeSelect(mode.id)}
                className={`
                  p-6 rounded-xl border-2 transition-all duration-300
                  ${selectedMode === mode.id 
                    ? 'border-green-400 bg-green-900/30' 
                    : 'border-green-900/50 hover:border-green-700 bg-black/30'
                  }
                  ${!mode.available ? 'opacity-50 cursor-not-allowed' : ''}
                `}
                disabled={!mode.available}
              >
                <mode.icon className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-bold mb-2">{mode.name}</h3>
                <p className="text-green-300/70 text-sm">{mode.description}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Podcast Section */}
        <PodcastSection />

        {/* Study Tips */}
        <div className="mt-8 p-4 bg-black/50 border border-green-900/30 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-6 h-6 text-green-400" />
            <h3 className="text-lg font-bold">Conseils d'Étude</h3>
          </div>
          <ul className="space-y-2 text-green-300/70">
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              Pratiquez régulièrement avec les mini-jeux pour renforcer vos connaissances
            </li>
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              Utilisez le mode étude pour comprendre les concepts en profondeur
            </li>
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              Testez-vous avec les défis quotidiens pour suivre vos progrès
            </li>
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              Préparez-vous aux examens avec des simulations réalistes
            </li>
          </ul>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-green-400">
      {/* Header */}
      <header className="border-b border-green-500/30 bg-black/50 backdrop-blur-sm fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-8 h-8" />
            <h1 className="text-xl font-bold">PQAP Study</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 px-3 py-1 bg-green-900/50 rounded-full text-sm">
              <Star className="w-4 h-4" />
              <span>Niveau {state.playerLevel}</span>
            </div>
            <div className="flex items-center gap-1 px-3 py-1 bg-green-900/50 rounded-full text-sm">
              <Brain className="w-4 h-4" />
              <span>{state.playerXP} XP</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-20 pb-8">
        {renderContent()}
      </main>
    </div>
  );
}

function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

export default App;