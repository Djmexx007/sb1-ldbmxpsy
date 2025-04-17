import React from 'react';
import { Brain, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderBarProps {
  title?: string;
  rightElement?: React.ReactNode;
  onMenuClick?: () => void;
  className?: string;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  title = 'PQAP Study',
  rightElement,
  onMenuClick,
  className = '',
}) => {
  return (
    <header
      className={cn(
        'w-full sticky top-0 z-50 flex items-center justify-between border-b border-emerald-700 bg-emerald-950/80 px-4 py-3 backdrop-blur-md shadow-md text-emerald-100',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <button
          className="md:hidden p-1.5 rounded-lg hover:bg-emerald-800/60 transition"
          onClick={onMenuClick}
        >
          <Menu className="w-5 h-5" />
        </button>
        <Brain className="w-5 h-5 text-emerald-300" />
        <span className="font-bold tracking-wide text-lg">{title}</span>
      </div>
      <div className="flex items-center gap-3">{rightElement}</div>
    </header>
  );
};

export default HeaderBar;
