import React, { useState } from 'react';
import logoGreen from '../assets/logo-green.png';
import logoLight from '../assets/logo-light.png';
import moodBeige from '../assets/mood-beige.png';
import moodGreen from '../assets/mood-green.png';
import moodWhite from '../assets/mood-white.png';

interface MoodLogoProps {
  variant?: 'champagne' | 'noir' | 'gold' | 'white' | 'green' | 'light';
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  showSteam?: boolean;
  animatedSteam?: boolean;
}

export const MoodSteam: React.FC<{
  color?: string;
  className?: string;
  animated?: boolean;
}> = ({ color = '#DE6D27', className = '', animated = true }) => {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible ${className}`}
    >
      <g className={animated ? 'animate-steam-1' : ''}>
        <path
          d="M38 108C34 92 41 78 48 64C54 52 56 40 48 24C44 16 38 9 34 2C39 12 43 25 39 37C35 49 26 62 26 77C26 91 32 102 38 108Z"
          fill={color}
        />
      </g>
      <g className={animated ? 'animate-steam-2' : ''}>
        <path
          d="M62 108C57 88 64 72 73 54C81 38 82 22 71 4C78 17 81 32 75 48C69 64 56 79 57 96C58 102 60 106 62 108Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export const MoodLogo: React.FC<MoodLogoProps> = ({
  variant = 'champagne',
  className = '',
  size = 'md',
}) => {
  const [hasError, setHasError] = useState(false);

  let logoSrc = logoLight;
  if (variant === 'noir' || variant === 'green') {
    logoSrc = logoGreen;
  } else if (variant === 'white') {
    logoSrc = moodWhite;
  } else if (variant === 'champagne') {
    logoSrc = logoLight;
  } else {
    logoSrc = logoLight;
  }

  const sizeClasses = {
    xs: 'h-8 sm:h-9 max-w-[140px]',
    sm: 'h-11 sm:h-13 max-w-[190px]',
    md: 'h-16 sm:h-20 max-w-[260px]',
    lg: 'h-24 sm:h-28 max-w-[340px]',
    xl: 'h-32 sm:h-40 max-w-[440px]',
    custom: '',
  }[size];

  if (hasError) {
    // Vector typography fallback
    return (
      <div className={`flex flex-col items-center justify-center select-none ${className}`}>
        <MoodSteam color="#DE6D27" className="w-8 h-8 -mb-1" />
        <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.3em] uppercase text-[#24180F]">
          MOOD
        </span>
        <span className="font-montserrat text-[9px] tracking-[0.4em] uppercase text-[#DE6D27] font-semibold -mt-0.5">
          LOUNGE
        </span>
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Mood Lounge"
        className={`w-auto object-contain transition-all duration-300 drop-shadow-[0_2px_12px_rgba(222,109,39,0.2)] ${sizeClasses}`}
        referrerPolicy="no-referrer"
        loading="eager"
        onError={() => setHasError(true)}
      />
    </div>
  );
};

export const MoodVerticalMotif: React.FC<{
  variant?: 'champagne' | 'noir' | 'gold';
  className?: string;
}> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center justify-center opacity-10 pointer-events-none select-none ${className}`}>
      <img
        src={moodBeige}
        alt="Mood Emblem Motif"
        className="w-56 sm:w-72 max-h-[75vh] object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export const MoodWaxSeal: React.FC<{
  onClick?: () => void;
  isOpening?: boolean;
  className?: string;
}> = ({ onClick, className = '' }) => {
  return (
    <button
      type="button"
      id="wax-seal-button"
      onClick={onClick}
      aria-label="Open invitation seal"
      className={`group relative flex items-center justify-center cursor-pointer transition-transform duration-500 transform hover:scale-105 active:scale-95 focus:outline-none ${className}`}
    >
      {/* Outer Seal Glow Ring - Terracotta Amber & Champagne Gold */}
      <div className="absolute -inset-2 rounded-full bg-[#DE6D27]/30 blur-md group-hover:bg-[#DE6D27]/55 transition-all duration-500 animate-pulse" />

      {/* Wax Seal Outer Rim - Shaded Terracotta Copper with Champagne Inlay */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#F4A774] via-[#DE6D27] to-[#7D3107] p-[3px] shadow-[0_10px_25px_rgba(0,0,0,0.65),inset_0_2px_4px_rgba(235,222,190,0.55)]">
        {/* Wax Emboss Body */}
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#943807] via-[#DE6D27] to-[#F19B64] flex flex-col items-center justify-center p-1.5 shadow-inner border border-[#EBDEBE]/40">
          {/* Concentric Champagne Inlay Ring */}
          <div className="w-full h-full rounded-full border border-dashed border-[#EBDEBE]/75 flex flex-col items-center justify-center relative p-1 overflow-hidden">
            {/* Official Logo inside Seal */}
            <img
              src={moodBeige}
              alt="Mood Lounge Seal"
              className="w-12 sm:w-14 h-auto object-contain drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] filter brightness-110"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Seal Sparkle Tooltip Hint */}
      <div className="absolute -bottom-8 whitespace-nowrap px-3 py-1 rounded-full bg-[#18110B]/95 border border-[#DE6D27]/50 backdrop-blur-md shadow-lg text-[11px] font-montserrat tracking-widest text-[#EBDEBE] uppercase opacity-90 group-hover:opacity-100 transition-opacity">
        Tap to Open
      </div>
    </button>
  );
};
