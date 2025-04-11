import React, { useState, useEffect, useRef } from 'react';
import { useGame } from './GameState';
import { Terminal, ThumbsUp, ThumbsDown, ArrowLeft, Star, Shield, Target, Sparkles } from 'lucide-react';
import { TestSuite } from '../tests/TestSuite';
import { HackingAnimation } from './HackingAnimation';
import { Exam } from './Exam';

interface Command {
  command: string;
  response: string;
  isError?: boolean;
  isSuccess?: boolean;
}

interface TerminalModeProps {
  onBack: () => void;
}

const COMMANDS = {
  help: `
Available commands:
  help            - Show this help message
  clear           - Clear the terminal screen
  version         - Show system version
  status          - Show system status
  stats           - Show your current stats
  achievements    - List your achievements
  reset           - Reset all progress (danger!)
  exam            - Start the PQAP exam
  hack            - Try to hack the system
  testsuite       - Run the test suite
  exit            - Exit terminal mode`,

  version: 'PQAP Terminal v3.1.4',
  
  status: `System Status:
  - All systems operational
  - Memory usage: Optimal
  - Response time: <100ms
  - Security level: Maximum`,
};

const EASTER_EGGS = {
  'hack': 'Access granted... Congratulations, hacker! 🎉 +10 XP',
  'matrix': 'Wake up, Neo... The Matrix has you... 🕶️ +10 XP',
  '42': 'The answer to life, the universe, and everything! 🌌 +10 XP',
  'konami': '↑↑↓↓←→←→BA... Secret code activated! 🎮 +10 XP',
  'coffee': '☕ Time for a well-deserved coffee break! +10 XP',
  'sudo': 'Nice try! But you\'re not root... yet 😉 +10 XP',
  'hello': 'Hello, Agent! Ready for your next mission? 🕵️ +10 XP',
  'debug': 'Debug mode activated... Just kidding! 🐛 +10 XP'
};

export const TerminalMode: React.FC<TerminalModeProps> = ({ onBack }) => {
  const { state, addXP } = useGame();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Command[]>([
    {
      command: "system",
      response: `
=== PQAP Terminal v3.1.4 ===
Welcome to the PQAP training system.
Type 'help' to see available commands.

NOTE: Unauthorized hacking attempts will be... rewarded! 😉
`,
    },
  ]);
  const [showTestSuite, setShowTestSuite] = useState(false);
  const [showHackingAnimation, setShowHackingAnimation] = useState(false);
  const [showExam, setShowExam] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleHackingComplete = () => {
    setTimeout(() => {
      setShowHackingAnimation(false);
      setHistory(prev => [...prev, {
        command: "hack",
        response: "System successfully compromised! Earned 100 XP for your hacking skills! 🎉",
        isSuccess: true
      }]);
      addXP(100);
    }, 2000);
  };

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    let response = "";
    let isError = false;
    let isSuccess = false;
    let earnedXP = 0;

    // Handle test suite command
    if (command === "testsuite") {
      setShowTestSuite(true);
      return;
    }

    // Handle exam command
    if (command === "exam") {
      setShowExam(true);
      return;
    }

    // Handle clear command
    if (command === "clear") {
      setHistory([]);
      return;
    }

    // Handle exit command
    if (command === "exit") {
      onBack();
      return;
    }

    // Handle hack command
    if (command === "hack") {
      setShowHackingAnimation(true);
      return;
    }

    // Check for easter eggs
    if (EASTER_EGGS[command as keyof typeof EASTER_EGGS]) {
      response = EASTER_EGGS[command as keyof typeof EASTER_EGGS];
      earnedXP = 10;
      isSuccess = true;
    }
    // Handle standard commands
    else if (command === "help") {
      response = COMMANDS.help;
    }
    else if (command === "version") {
      response = COMMANDS.version;
    }
    else if (command === "status") {
      response = COMMANDS.status;
    }
      else if (command === "reset") {
  localStorage.clear();
  location.reload();
  return;
}
    else if (command === "stats") {
      response = `Player Stats:
  Level: ${state.playerLevel}
  XP: ${state.playerXP}
  Completed Chapters: ${state.completedChapters.length}
  Badges: ${state.badges.length}
  Titles: ${state.titles.length}`;
    }
    else if (command === "achievements") {
      response = `Achievements:
  Badges:
    ${state.badges.map(badge => `- ${badge}`).join('\n    ')}
  
  Titles:
    ${state.titles.map(title => `- ${title}`).join('\n    ')}`;
    }
    else if (command === "") {
      return;
    }
    else {
      response = `Command not found: ${command}\nType 'help' for available commands.`;
      isError = true;
    }

    if (earnedXP > 0) {
      addXP(earnedXP);
    }

    setHistory([...history, { command: cmd, response, isError, isSuccess }]);
    setInput("");
  };

  if (showTestSuite) {
    return (
      <div className="space-y-4">
        <button
          onClick={() => setShowTestSuite(false)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 border border-green-500/30 hover:bg-green-900/30 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to terminal
        </button>
        <TestSuite />
      </div>
    );
  }

  if (showHackingAnimation) {
    return <HackingAnimation onComplete={handleHackingComplete} />;
  }

  if (showExam) {
    return <Exam onBack={() => setShowExam(false)} />;
  }

  return (
    <div className="space-y-4">
      <button
        onClick={onBack}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 border border-green-500/30 hover:bg-green-900/30 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to menu
      </button>

      <div className="p-4 bg-black rounded-xl border-2 border-green-500/30">
        <div className="flex items-center gap-2 mb-4 p-2 bg-green-900/20 rounded-lg">
          <Terminal className="w-5 h-5" />
          <span className="text-sm font-mono">PQAP Terminal v3.1.4</span>
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-mono">Level {state.playerLevel}</span>
          </div>
        </div>

        <div
          ref={terminalRef}
          className="h-[60vh] overflow-y-auto font-mono text-sm space-y-2 mb-4"
        >
          {history.map((entry, index) => (
            <div key={index} className="space-y-1">
              {entry.command !== "system" && (
                <div className="flex items-center gap-2">
                  <span className="text-green-500">$</span>
                  <span>{entry.command}</span>
                </div>
              )}
              <div
                className={`whitespace-pre-wrap ${
                  entry.isError
                    ? "text-red-400"
                    : entry.isSuccess
                    ? "text-green-400"
                    : "text-green-300/90"
                }`}
              >
                {entry.response}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 bg-black/50 p-2 rounded-lg border border-green-500/30">
          <span className="text-green-500">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && input.trim()) {
                handleCommand(input);
              }
            }}
            className="flex-1 bg-transparent border-none outline-none text-green-300 font-mono"
            placeholder="Type a command..."
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
};