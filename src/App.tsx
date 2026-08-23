import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AppStage } from './types';
import { SplashView } from './components/SplashView';
import { EnvelopeView } from './components/EnvelopeView';
import { InvitationCard } from './components/InvitationCard';

export default function App() {
  const [stage, setStage] = useState<AppStage>('splash');
  const [guestName, setGuestName] = useState<string>('Honored Guest');

  return (
    <main className="fixed inset-0 w-full h-[100dvh] h-screen bg-[#EBDEBE] text-[#24180F] flex flex-col items-center justify-center overflow-hidden font-body select-none selection:bg-[#DE6D27]/30 selection:text-[#24180F]">
      <AnimatePresence mode="wait">
        {stage === 'splash' && (
          <motion.div
            key="stage-splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full flex flex-col items-center justify-center overflow-hidden"
          >
            <SplashView onComplete={() => setStage('envelope')} />
          </motion.div>
        )}

        {stage === 'envelope' && (
          <motion.div
            key="stage-envelope"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full flex flex-col items-center justify-center overflow-hidden"
          >
            <EnvelopeView
              guestName={guestName}
              onOpenComplete={() => setStage('card')}
            />
          </motion.div>
        )}

        {stage === 'card' && (
          <motion.div
            key="stage-card"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full flex flex-col items-center justify-center overflow-hidden"
          >
            <InvitationCard
              guestName={guestName}
              onUpdateGuestName={setGuestName}
              onReplay={() => setStage('envelope')}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
