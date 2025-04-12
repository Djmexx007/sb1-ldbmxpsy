// src/components/ui/XPBadge.tsx
import React from "react";

interface XPBadgeProps {
  currentXP: number;
  maxXP?: number;
}

export const AnimatedXPBar: React.FC<XPBadgeProps> = ({
  currentXP,
  maxXP = 1000,
}) => {
  const percent = Math.min((currentXP / maxXP) * 100, 100);

  return (
    <div className="relative w-28 h-4 bg-emerald-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-emerald-500 transition-all duration-500 ease-out"
        style={{ width: `${percent}%` }}
      />
      <div className="absolute inset-0 flex justify-center items-center text-xs text-white font-semibold">
        {Math.min(currentXP, maxXP)} XP
      </div>
    </div>
  );
};
