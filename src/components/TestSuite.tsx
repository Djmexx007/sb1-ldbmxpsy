import React, { useState, useEffect } from 'react';
import { useGame } from '../components/GameState';
import { Brain, Bug, CheckCircle, XCircle, AlertTriangle, Timer, Wrench, ArrowRight, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';
import { BugReport } from '../components/BugReport';

interface TestResult {
  name: string;
  status: 'success' | 'error' | 'warning';
  message: string;
  details?: {
    expected?: string;
    actual?: string;
    metrics?: {
      name: string;
      value: number;
      unit: string;
    }[];
    steps?: string[];
    impact?: string;
    solution?: string;
    code?: {
      file: string;
      line: string;
      issue: string;
      fix: string;
    };
  };
  timestamp: number;
}

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  responseTime: number;
  coverage: number;
}

export const TestSuite: React.FC = () => {
  const { state, addXP } = useGame();
  const [results, setResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showBugReport, setShowBugReport] = useState(false);
  const [expandedResults, setExpandedResults] = useState<number[]>([]);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    responseTime: 0,
    coverage: 0
  });

  const toggleExpand = (index: number) => {
    setExpandedResults(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const runAllTests = async () => {
    setIsRunning(true);
    setResults([]);
    setProgress(0);
    setExpandedResults([]);

    const tests = [
      testGameState,
      testMemoryUsage,
      testResponseTime,
      analyzeGameCode,
      testGameLogic
    ];

    for (let i = 0; i < tests.length; i++) {
      await tests[i]();
      setProgress(((i + 1) / tests.length) * 100);
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    calculateCoverage();
    setIsRunning(false);
  };

  // Test implementation functions...
  const testGameState = async () => {
    // Implementation remains the same
  };

  const testMemoryUsage = async () => {
    // Implementation remains the same
  };

  const testResponseTime = async () => {
    // Implementation remains the same
  };

  const analyzeGameCode = async () => {
    // Implementation remains the same
  };

  const testGameLogic = async () => {
    // Implementation remains the same
  };

  const calculateCoverage = () => {
    // Implementation remains the same
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-green-400">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="bg-black/30 rounded-xl border border-green-500/30 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Brain className="w-8 h-8 text-green-400" />
              <h1 className="text-2xl font-bold">Test Suite</h1>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={runAllTests}
                disabled={isRunning}
                className={`
                  flex items-center px-6 py-3 rounded-xl font-medium transition-all
                  ${isRunning 
                    ? 'bg-green-900/30 cursor-not-allowed' 
                    : 'bg-green-500/20 hover:bg-green-500/30 border border-green-500'
                  }
                `}
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Running Tests...
                  </>
                ) : (
                  <>
                    <Wrench className="w-5 h-5 mr-2" />
                    Run All Tests
                  </>
                )}
              </button>
              <button
                onClick={() => setShowBugReport(true)}
                className="flex items-center px-6 py-3 rounded-xl font-medium bg-red-500/20 hover:bg-red-500/30 border border-red-500 transition-all"
              >
                <Bug className="w-5 h-5 mr-2" />
                Report Bug
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          {isRunning && (
            <div className="mb-6">
              <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-green-400/70 mt-2">
                Running tests... {Math.round(progress)}% complete
              </p>
            </div>
          )}

          {/* Metrics Grid */}
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(metrics).map(([key, value]) => (
              <div key={key} className="bg-black/20 rounded-lg p-4 border border-green-500/10">
                <h3 className="text-sm text-green-400/70 mb-1 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-xl font-mono">
                  {value}
                  <span className="text-sm text-green-400/50 ml-1">
                    {key === 'coverage' ? '%' : 'ms'}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Test Results */}
        <div className="space-y-4">
          {results.map((result, index) => (
            <div
              key={index}
              className={`
                bg-black/30 rounded-xl border transition-all
                ${result.status === 'success' 
                  ? 'border-green-500/30' 
                  : result.status === 'error'
                  ? 'border-red-500/30'
                  : 'border-yellow-500/30'
                }
              `}
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full px-6 py-4 flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  {result.status === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : result.status === 'error' ? (
                    <XCircle className="w-5 h-5 text-red-500" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  )}
                  <h3 className="font-medium">{result.name}</h3>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-green-400/70">
                    {new Date(result.timestamp).toLocaleTimeString()}
                  </span>
                  {expandedResults.includes(index) ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>

              {expandedResults.includes(index) && result.details && (
                <div className="px-6 pb-4 space-y-3 border-t border-green-500/10">
                  <p className="text-green-400/90 mt-4">{result.message}</p>
                  
                  {result.details.expected && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-green-400/70">Expected:</span>
                      <code className="px-2 py-1 bg-black/20 rounded text-sm font-mono">
                        {result.details.expected}
                      </code>
                    </div>
                  )}

                  {result.details.actual && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-green-400/70">Actual:</span>
                      <code className="px-2 py-1 bg-black/20 rounded text-sm font-mono">
                        {result.details.actual}
                      </code>
                    </div>
                  )}

                  {result.details.impact && (
                    <div className="mt-4">
                      <h4 className="text-sm text-green-400/70 mb-1">Impact:</h4>
                      <p className="text-sm">{result.details.impact}</p>
                    </div>
                  )}

                  {result.details.solution && (
                    <div className="mt-4">
                      <h4 className="text-sm text-green-400/70 mb-1">Solution:</h4>
                      <p className="text-sm text-green-400">{result.details.solution}</p>
                    </div>
                  )}

                  {result.details.code && (
                    <div className="mt-4 bg-black/20 rounded-lg p-4">
                      <h4 className="text-sm text-green-400/70 mb-2">Code Fix:</h4>
                      <div className="font-mono text-sm">
                        <p className="text-green-400/70">File: {result.details.code.file}</p>
                        <p className="text-green-400/70">Line: {result.details.code.line}</p>
                        <p className="mt-2 text-red-400">{result.details.code.issue}</p>
                        <p className="mt-2 text-green-400">{result.details.code.fix}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bug Report Modal */}
        {showBugReport && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6">
            <div className="bg-gray-900 rounded-xl border border-green-500/30 w-full max-w-4xl">
              <BugReport onClose={() => setShowBugReport(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};