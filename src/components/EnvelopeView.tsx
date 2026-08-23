import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { MoodWaxSeal, MoodLogo, MoodSteam } from './MoodLogo';
import { playSealBreakSound, playOpenWhooshSound } from '../utils/audio';

interface EnvelopeViewProps {
  onOpenComplete: () => void;
  guestName?: string;
}

export const EnvelopeView: React.FC<EnvelopeViewProps> = ({
  onOpenComplete,
}) => {
  const [openingPhase, setOpeningPhase] = useState<'sealed' | 'unsealing' | 'opened'>('sealed');

  const triggerGoldConfetti = () => {
    try {
      // Luxury warm amber #DE6D27 & champagne #EBDEBE dust explosion
      confetti({
        particleCount: 65,
        spread: 80,
        origin: { y: 0.55 },
        colors: ['#EBDEBE', '#DE6D27', '#FAF4E6', '#C35615', '#FFEADB', '#8F3908'],
        disableForReducedMotion: true,
        scalar: 0.95,
        ticks: 200,
        shapes: ['circle'],
      });
    } catch {
      // Ignore if canvas not supported
    }
  };

  const handleOpenEnvelope = () => {
    if (openingPhase !== 'sealed') return;

    setOpeningPhase('unsealing');
    playSealBreakSound();
    triggerGoldConfetti();

    // After seal breaks, flap unfolds and card slides out
    setTimeout(() => {
      playOpenWhooshSound();
    }, 450);

    setTimeout(() => {
      setOpeningPhase('opened');
    }, 1400);

    setTimeout(() => {
      onOpenComplete();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 w-full h-[100dvh] h-screen flex flex-col items-center justify-center py-6 sm:py-8 px-4 bg-[#EBDEBE] text-[#24180F] overflow-hidden select-none">
      {/* Background Lighting and Theme Accents */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <MoodLogo variant="green" size="xl" showSteam={false} />
      </div>

      {/* Radiant Theme Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-b from-[#DE6D27]/15 via-[#FAF4E6]/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#FFFFFF]/35 rounded-full blur-2xl pointer-events-none" />

      {/* Decorative Outer Screen Inset Border */}
      <div className="absolute inset-3 sm:inset-5 border border-[#DE6D27]/35 rounded-2xl pointer-events-none shadow-[inset_0_0_20px_rgba(222,109,39,0.06)]">
        <div className="absolute inset-1.5 border border-[#24180F]/15 rounded-xl pointer-events-none" />
        <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#DE6D27]" />
        <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#DE6D27]" />
        <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#DE6D27]" />
        <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#DE6D27]" />
      </div>

      {/* Top Brand Logo & VIP Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center z-20 mb-3 sm:mb-5 text-center"
      >
        <MoodLogo variant="green" size="md" />
        <div className="flex items-center gap-2.5 mt-2.5">
          <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#DE6D27]/60" />
          <h2 className="font-cinzel text-xs sm:text-sm tracking-[0.35em] uppercase font-bold text-[#24180F]">
            VIP INVITATION CARD
          </h2>
          <div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-[#DE6D27]/60" />
        </div>
      </motion.div>

      {/* 3D Envelope Container */}
      <div className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[440px] h-[230px] sm:h-[280px] perspective-1000 my-auto flex items-center justify-center">
        {/* Envelope Outer Shadow & Ambient Base */}
        <div className="absolute inset-0 bg-[#63432A]/25 rounded-xl blur-xl transform translate-y-8 scale-95" />

        {/* --- MAIN ENVELOPE BODY --- */}
        <div className="relative w-full h-full rounded-xl overflow-visible bg-[#E4D4AE] border-2 border-[#DE6D27]/60 shadow-[0_20px_45px_rgba(78,48,26,0.22),inset_0_1px_3px_rgba(255,255,255,0.7)]">
          {/* Primary Inlay Edge Border around Envelope */}
          <div className="absolute inset-2 border border-[#DE6D27]/30 rounded-lg pointer-events-none" />
          <div className="absolute inset-3 border border-dashed border-[#24180F]/15 rounded-md pointer-events-none" />

          {/* Envelope Inner Lining Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#DE6D27_1px,transparent_1px)] [background-size:16px_16px] opacity-20 rounded-xl" />

          {/* --- INVITATION CARD (SLIDING OUT) --- */}
          <motion.div
            initial={{ y: 0, scale: 0.94, opacity: 0.95 }}
            animate={
              openingPhase === 'unsealing' || openingPhase === 'opened'
                ? {
                    y: -115,
                    scale: 1,
                    opacity: 1,
                    transition: { delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] },
                  }
                : {}
            }
            className="absolute left-3 right-3 top-3 h-[210px] sm:h-[250px] bg-[#FAF7F0] rounded-lg shadow-2xl p-3.5 sm:p-5 flex flex-col items-center justify-between text-[#24180F] border-2 border-[#DE6D27]/50 z-10 paper-texture-ivory"
          >
            {/* Card Gold & Amber Inset Borders */}
            <div className="absolute inset-1.5 border border-[#DE6D27]/40 rounded pointer-events-none" />
            <div className="absolute inset-2.5 border border-[#EBDEBE] rounded pointer-events-none" />

            <div className="w-full flex items-center justify-between border-b border-[#DE6D27]/30 pb-1.5">
              <span className="font-cinzel text-[8px] sm:text-[9px] tracking-[0.25em] text-[#DE6D27] uppercase font-bold">
                Private Grand Opening
              </span>
              <div className="w-3.5 h-3.5 text-[#DE6D27]">
                <MoodSteam color="#DE6D27" animated={false} />
              </div>
            </div>

            {/* Teaser Logo inside Card */}
            <div className="my-auto flex flex-col items-center">
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#24180F]">
                MOOD
              </span>
              <span className="font-montserrat text-[8px] sm:text-[10px] tracking-[0.35em] uppercase text-[#DE6D27] -mt-1 font-semibold">
                Lounge
              </span>
              <div className="h-[1px] w-12 bg-[#DE6D27]/40 my-1" />
              <p className="font-garamond text-xs sm:text-sm text-[#7A5030] italic">
                Exclusive VIP Guest Access
              </p>
            </div>

            <div className="w-full flex items-center justify-between text-[8px] sm:text-[9px] font-montserrat tracking-widest text-[#7D5333] uppercase border-t border-[#DE6D27]/30 pt-1 font-semibold">
              <span className="text-[#24180F]">Sat, Aug 29, 2026</span>
              <span className="text-[#DE6D27]">6:00 PM</span>
            </div>
          </motion.div>

          {/* Envelope Pocket Front Left & Right Triangles (#EBDEBE Shapes) */}
          <div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              clipPath: 'polygon(0% 0%, 50% 50%, 0% 100%)',
              background: 'linear-gradient(135deg, #F3E7CA 0%, #EBDEBE 60%, #DECFA5 100%)',
              borderRight: '1.5px solid rgba(222, 109, 39, 0.45)',
              filter: 'drop-shadow(2px 0 4px rgba(78, 48, 26, 0.1))',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)',
              background: 'linear-gradient(225deg, #F3E7CA 0%, #EBDEBE 60%, #DECFA5 100%)',
              borderLeft: '1.5px solid rgba(222, 109, 39, 0.45)',
              filter: 'drop-shadow(-2px 0 4px rgba(78, 48, 26, 0.1))',
            }}
          />

          {/* Envelope Pocket Bottom Triangle (#EBDEBE Shape) */}
          <div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              clipPath: 'polygon(0% 100%, 50% 50%, 100% 100%)',
              background: 'linear-gradient(0deg, #DCCAA0 0%, #EBDEBE 65%, #F4E8CE 100%)',
              borderTop: '2px solid rgba(222, 109, 39, 0.65)',
              boxShadow: '0 -6px 20px rgba(78, 48, 26, 0.15)',
            }}
          >
            {/* Terracotta/Espresso foil stamp on bottom flap */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <div className="h-[1.5px] w-6 bg-gradient-to-r from-transparent to-[#DE6D27]" />
              <span className="font-cinzel text-[8px] sm:text-[9px] tracking-[0.35em] uppercase text-[#24180F] font-bold">
                MOOD
              </span>
              <div className="h-[1.5px] w-6 bg-gradient-to-l from-transparent to-[#DE6D27]" />
            </div>
          </div>

          {/* --- TOP FOLDING FLAP (3D ROTATING #EBDEBE Shape) --- */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={
              openingPhase === 'unsealing' || openingPhase === 'opened'
                ? {
                    rotateX: -180,
                    zIndex: 5,
                    transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] },
                  }
                : { rotateX: 0, zIndex: 30 }
            }
            style={{
              transformOrigin: 'top center',
              clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
              background: 'linear-gradient(180deg, #F6ECD2 0%, #EBDEBE 60%, #DECFA7 100%)',
              borderBottom: '2.5px solid rgba(222, 109, 39, 0.75)',
            }}
            className="absolute inset-0 h-full w-full shadow-[0_12px_28px_rgba(78,48,26,0.2)] cursor-pointer"
            onClick={handleOpenEnvelope}
          >
            {/* Terracotta Foil Line accents on flap */}
            <div className="absolute top-2.5 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#DE6D27]/60 to-transparent" />
            <div className="absolute top-4 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#24180F]/20 to-transparent" />
          </motion.div>

          {/* --- WAX SEAL (Centered at the apex of the flap) --- */}
          <AnimatePresence>
            {openingPhase === 'sealed' && (
              <motion.div
                key="wax-seal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.4, opacity: 0, transition: { duration: 0.4 } }}
                className="absolute top-[40%] sm:top-[43%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
              >
                <MoodWaxSeal
                  onClick={handleOpenEnvelope}
                  isOpening={openingPhase !== 'sealed'}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

