// 📁 src/components/ui/AnimatedBadge.tsx

import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface AnimatedBadgeProps {
  label: string;
}

export const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({ label }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-800/40 border border-green-500 text-green-300 text-sm shadow-lg"
    >
      <Sparkles className="w-4 h-4 text-yellow-400 animate-ping-slow" />
      {label}
    </motion.div>
  );
};

export default AnimatedBadge;
