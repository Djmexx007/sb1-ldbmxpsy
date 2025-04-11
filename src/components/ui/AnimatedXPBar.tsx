import React from 'react';

interface AnimatedXPBarProps {
  currentXP: number;
  maxXP?: number;
}

const AnimatedXPBar: React.FC<AnimatedXPBarProps> = ({ currentXP, maxXP = 1000 }) => {
  const percentage = Math.min((currentXP / maxXP) * 100, 100);

  return (
    <div className="w-32 h-4 bg-green-900/30 rounded-full overflow-hidden border border-green-500">
      <div
        className="h-full bg-green-400 transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default AnimatedXPBar;