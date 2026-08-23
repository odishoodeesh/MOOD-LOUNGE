import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { MoodLogo } from './MoodLogo';

interface SplashViewProps {
  onComplete: () => void;
}

export const SplashView: React.FC<SplashViewProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      onClick={onComplete}
      className="fixed inset-0 w-full h-[100dvh] h-screen flex flex-col items-center justify-center bg-[#EBDEBE] text-[#24180F] overflow-hidden select-none cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label="Mood Lounge Splash - Tap to enter"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onComplete();
      }}
    >
      {/* Ambient Lighting Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-b from-[#DE6D27]/15 via-[#FAF4E6]/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#FFFFFF]/30 rounded-full blur-2xl pointer-events-none" />

      {/* Decorative Outer Frame with #DE6D27 Inset Lines */}
      <div className="absolute inset-4 sm:inset-6 border border-[#DE6D27]/35 rounded-2xl pointer-events-none shadow-[inset_0_0_20px_rgba(222,109,39,0.06)]">
        <div className="absolute inset-1.5 border border-[#24180F]/15 rounded-xl pointer-events-none" />
        <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#DE6D27]" />
        <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#DE6D27]" />
        <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#DE6D27]" />
        <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#DE6D27]" />
      </div>

      {/* Main Centered Brand Logo Presentation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center justify-center gap-4 px-6 text-center"
      >
        {/* Glow halo behind logo */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#DE6D27]/15 via-[#FFFFFF]/50 to-[#DE6D27]/15 rounded-full blur-xl" />
          <MoodLogo variant="green" size="xl" className="relative z-10" />
        </div>
      </motion.div>
    </div>
  );
};
