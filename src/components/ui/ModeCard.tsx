// src/components/ui/ModeCard.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface ModeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
  active?: boolean;
}

export const ModeCard: React.FC<ModeCardProps> = ({
  icon,
  title,
  description,
  onClick,
  active = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-6 text-left rounded-xl transition-all duration-300 shadow-sm border border-gray-200 bg-white hover:shadow-md",
        active && "ring-2 ring-emerald-400 ring-offset-2"
      )}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="text-emerald-500">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </button>
  );
};
