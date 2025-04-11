import React, { useState, useEffect, useCallback } from 'react';
import { Terminal, Shield, Cpu, Network, Lock, CheckCircle } from 'lucide-react';

interface ProgressBar {
  id: string;
  label: string;
  progress: number;
  speed: number;
}

interface PopupInfo {
  title: string;
  content: string;
  visible: boolean;
}

interface Props {
  speed?: number; // Animation speed multiplier (1 = normal, 2 = 2x faster, etc.)
  onComplete?: () => void;
}

// Educational content for scrolling text
const TECH_TERMS = [
  '// Binary: The fundamental language of computers (0s and 1s)',
  '// TCP/IP: The protocol suite that powers internet communications',
  '// Encryption: Converting data into a secure, encoded format',
  '// Algorithm: A step-by-step procedure for solving problems',
  '// Database: Organized collection of structured information',
  '// API: Application Programming Interface for software communication',
  '// Cache: High-speed data storage layer',
  '// Kernel: Core component of an operating system',
  '// DNS: Domain Name System for internet addressing',
  '// SSL: Secure Sockets Layer for data encryption',
];

// Technical data for random display
const TECH_DATA = {
  ipAddresses: [
    '192.168.1.1',
    '10.0.0.1',
    '172.16.0.1',
    '127.0.0.1',
  ],
  ports: [
    '80 (HTTP)',
    '443 (HTTPS)',
    '22 (SSH)',
    '21 (FTP)',
  ],
  statusCodes: [
    '200 OK',
    '404 Not Found',
    '500 Server Error',
    '301 Redirect',
  ],
  syntax: [
    'if (condition) { ... }',
    'while (true) { ... }',
    'function execute() { ... }',
    'try { ... } catch (e) { ... }',
  ],
};

// Educational popups content
const EDUCATIONAL_POPUPS = [
  {
    title: 'Understanding Encryption',
    content: 'Encryption transforms readable data into coded text using mathematical algorithms. This ensures only authorized parties can access the information.',
  },
  {
    title: 'Network Basics',
    content: 'Networks connect computers using protocols like TCP/IP. Data travels in packets through various nodes before reaching its destination.',
  },
  {
    title: 'Security Terms',
    content: 'Firewall: Guards network boundaries. Authentication: Verifies identity. Authorization: Controls access permissions.',
  },
];

export const HackingAnimation: React.FC<Props> = ({ speed = 1, onComplete }) => {
  const [scrollingText, setScrollingText] = useState<string[]>([]);
  const [progressBars, setProgressBars] = useState<ProgressBar[]>([
    { id: 'mainframe', label: 'Bypassing mainframe encryption...', progress: 0, speed: 1 },
    { id: 'quantum', label: 'Compiling quantum algorithms...', progress: 0, speed: 1.2 },
    { id: 'network', label: 'Analyzing network protocols...', progress: 0, speed: 0.8 },
  ]);
  const [techData, setTechData] = useState<string>('');
  const [popup, setPopup] = useState<PopupInfo>({ title: '', content: '', visible: false });
  const [complete, setComplete] = useState(false);

  // Add scrolling text
  const addScrollingText = useCallback(() => {
    const randomTerm = TECH_TERMS[Math.floor(Math.random() * TECH_TERMS.length)];
    setScrollingText(prev => [...prev.slice(-15), randomTerm]);
  }, []);

  // Update progress bars
  const updateProgress = useCallback(() => {
    setProgressBars(prev => 
      prev.map(bar => ({
        ...bar,
        progress: Math.min(100, bar.progress + (bar.speed * speed))
      }))
    );
  }, [speed]);

  // Show random technical data
  const showTechData = useCallback(() => {
    const categories = Object.keys(TECH_DATA) as (keyof typeof TECH_DATA)[];
    const category = categories[Math.floor(Math.random() * categories.length)];
    const data = TECH_DATA[category];
    const randomData = data[Math.floor(Math.random() * data.length)];
    setTechData(`${category}: ${randomData}`);
  }, []);

  // Show educational popup
  const showEducationalPopup = useCallback(() => {
    const popup = EDUCATIONAL_POPUPS[Math.floor(Math.random() * EDUCATIONAL_POPUPS.length)];
    setPopup({ ...popup, visible: true });
    setTimeout(() => setPopup(prev => ({ ...prev, visible: false })), 3000 / speed);
  }, [speed]);

  // Main animation loop
  useEffect(() => {
    if (complete) return;

    const textInterval = setInterval(addScrollingText, 100 / speed);
    const progressInterval = setInterval(updateProgress, 50 / speed);
    const dataInterval = setInterval(showTechData, 500 / speed);
    const popupInterval = setInterval(showEducationalPopup, 2000 / speed);

    // Check for completion
    const checkComplete = setInterval(() => {
      if (progressBars.every(bar => bar.progress >= 100)) {
        setComplete(true);
        onComplete?.();
        clearInterval(textInterval);
        clearInterval(progressInterval);
        clearInterval(dataInterval);
        clearInterval(popupInterval);
        clearInterval(checkComplete);
      }
    }, 100 / speed);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
      clearInterval(dataInterval);
      clearInterval(popupInterval);
      clearInterval(checkComplete);
    };
  }, [progressBars, speed, complete, addScrollingText, updateProgress, showTechData, showEducationalPopup, onComplete]);

  return (
    <div className="font-mono text-green-400 bg-black p-6 rounded-lg min-h-[400px] relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 border-b border-green-500/30 pb-2">
        <Terminal className="w-5 h-5" />
        <span className="text-sm">EDUCATIONAL HACKING SIMULATOR v1.0</span>
      </div>

      {/* Scrolling text */}
      <div className="mb-6 h-40 overflow-hidden">
        {scrollingText.map((text, index) => (
          <div
            key={index}
            className="text-sm opacity-70 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {text}
          </div>
        ))}
      </div>

      {/* Progress bars */}
      <div className="space-y-4 mb-6">
        {progressBars.map(bar => (
          <div key={bar.id} className="space-y-1">
            <div className="text-sm flex items-center gap-2">
              {bar.id === 'mainframe' && <Shield className="w-4 h-4" />}
              {bar.id === 'quantum' && <Cpu className="w-4 h-4" />}
              {bar.id === 'network' && <Network className="w-4 h-4" />}
              <span>{bar.label}</span>
            </div>
            <div className="h-2 bg-green-900/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full transition-all duration-200"
                style={{ width: `${bar.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Technical data */}
      <div className="text-sm mb-4">
        <span className="opacity-70">{techData}</span>
      </div>

      {/* Educational popup */}
      {popup.visible && (
        <div className="absolute bottom-4 right-4 w-64 bg-green-900/30 border border-green-500/30 rounded-lg p-4 animate-fade-in">
          <div className="flex items-center gap-2 mb-2">
            <Lock className="w-4 h-4" />
            <span className="font-bold text-sm">{popup.title}</span>
          </div>
          <p className="text-xs text-green-300/70">{popup.content}</p>
        </div>
      )}

      {/* Completion banner */}
      {complete && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/90 animate-fade-in">
          <div className="text-center">
            <pre className="text-green-500 mb-4">
              {`
   _    ____ ____ ____ ____ ____    ____ ____ ____ _  _ ___ ____ ___  
  / \\  /    /    /___ /___/ /___/   /  _ /  __/  _ / \\/ /  //  __/  \\ 
  | |  | || | || |   \\|   \\ |   \\   | / \\| /  | __/| || /  //  __| | | 
  | |_/\\ || | || |   /|   / |   /   | \\_/| \\__| /  | ||\\/  /|  __| |_/ 
  \\____/\\__/\\__/\\__/ \\__/  \\__/    \\__/\\____\\_/  \\_/\\__/  \\____\\__/  
              `}
            </pre>
            <div className="flex items-center justify-center gap-2 text-xl font-bold">
              <CheckCircle className="w-6 h-6" />
              <span>System Successfully Compromised</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};