import React from 'react';
import {
  MoodLogo,
  MoodVerticalMotif,
} from './MoodLogo';
import { EventInfo } from '../types';
import {
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
} from 'lucide-react';

interface InvitationCardProps {
  guestName?: string;
  onUpdateGuestName?: (name: string) => void;
  onReplay?: () => void;
}

const WAZE_URL =
  'https://ul.waze.com/ul?ll=36.86262800%2C42.97797900&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location';

const DEFAULT_EVENT: EventInfo = {
  brandName: 'MOOD LOUNGE',
  tagline: 'An Elevated Sanctuary of Taste & Atmosphere',
  occasion: 'PRIVATE VIP GRAND OPENING',
  date: 'Saturday, August 29, 2026',
  dayOfWeek: 'SATURDAY',
  time: '6:00 PM',
  venueName: 'Mood Lounge',
  hallOrArea: 'VIP Pavilion & Terrace',
  address: 'Coordinates: 36.8626, 42.9780',
  city: 'VIP Destination',
  locationUrl: WAZE_URL,
  wazeUrl: WAZE_URL,
  dressCode: 'Sophisticated Noir & Champagne Gold',
  dressCodeDesc: 'Elegantly tailored evening attire. Formal or high-fashion cocktail.',
  highlights: [
    'Artisan Mixology & Welcome Vintage Champagne',
    'Curated Deep Lounge Melodies & Live Instrumental Sessions',
    'Bespoke Tasting Tapas by Executive Culinary Chefs',
    'Exclusive Terrace Panorama & Private Shisha Booths',
  ],
};

export const InvitationCard: React.FC<InvitationCardProps> = () => {
  return (
    <div className="fixed inset-0 w-full h-[100dvh] h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-[#EBDEBE] text-[#24180F] overflow-hidden select-none">
      {/* Background Ambient Glows & Vertical Watermark Motifs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[680px] h-[680px] bg-gradient-to-b from-[#DE6D27]/15 via-[#FAF4E6]/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-[#FFFFFF]/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-72 h-72 bg-[#DE6D27]/10 rounded-full blur-3xl" />

        {/* Brand Vertical Pattern Watermark in Background */}
        <div className="absolute top-0 right-4 sm:right-8 h-full opacity-10 flex flex-col items-center pointer-events-none">
          <MoodVerticalMotif variant="noir" className="h-full" />
        </div>
        <div className="absolute top-0 left-4 sm:left-8 h-full opacity-10 flex flex-col items-center pointer-events-none hidden md:flex">
          <MoodVerticalMotif variant="noir" className="h-full" />
        </div>
      </div>

      {/* Main Luxury Invitation Card */}
      <div className="relative z-10 w-full max-w-[460px] flex items-center justify-center my-auto">
        <div className="w-full rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(78,48,26,0.18)] border-2 paper-texture-ivory text-[#24180F] border-[#DE6D27]/50 bg-[#FAF7F0] relative overflow-hidden flex flex-col justify-between">
          {/* Outer Secondary Terracotta Foil Inset Frame */}
          <div className="absolute inset-2.5 sm:inset-3.5 border border-[#DE6D27]/35 rounded-xl pointer-events-none" />

          {/* Inner Fine Main Inset Frame */}
          <div className="absolute inset-3.5 sm:inset-4.5 border border-[#EBDEBE] rounded-lg pointer-events-none" />

          {/* Corner Decorative Flourishes in Terracotta */}
          <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-[#DE6D27] pointer-events-none" />
          <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-[#DE6D27] pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-[#DE6D27] pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-[#DE6D27] pointer-events-none" />

          {/* --- CARD HEADER --- */}
          <div className="relative flex flex-col items-center text-center">
            {/* Header Badge */}
            <div className="flex items-center gap-2 mb-2 px-3.5 py-1 rounded-full bg-[#FAF4E6] border border-[#DE6D27]/40 shadow-xs">
              <div className="h-[1px] w-5 bg-[#DE6D27]" />
              <span className="font-cinzel text-[8px] sm:text-[9px] tracking-[0.35em] uppercase font-bold text-[#DE6D27]">
                VIP INVITATION PASS
              </span>
              <div className="h-[1px] w-5 bg-[#DE6D27]" />
            </div>

            {/* Central Official Brand Logo */}
            <div className="py-1">
              <MoodLogo variant="noir" size="md" animatedSteam={true} />
            </div>

            {/* Occasion / Invitation Title */}
            <div className="mt-2 flex flex-col items-center">
              <h1 className="font-cinzel text-base sm:text-lg font-bold tracking-[0.2em] uppercase text-center text-[#24180F]">
                {DEFAULT_EVENT.occasion}
              </h1>
            </div>
          </div>

          {/* Fine Ornamental Divider */}
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#DE6D27]/50" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#DE6D27] bg-[#DE6D27]/20" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#DE6D27]/50" />
          </div>

          {/* Short Invitation Text */}
          <div className="my-2.5 text-center px-3 sm:px-5">
            <p className="font-garamond text-xs sm:text-sm text-[#3E291B] leading-relaxed italic font-normal">
              You are cordially invited to experience an exclusive evening celebrating the grand opening of Mood Lounge. Join us for bespoke mixology, curated culinary craft, and an elevated atmosphere.
            </p>
          </div>

          {/* Fine Ornamental Divider */}
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#DE6D27]/50" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#DE6D27] bg-[#DE6D27]/20" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#DE6D27]/50" />
          </div>

          {/* --- EVENT SPECIFICATION DETAILS GRID --- */}
          <div className="grid grid-cols-2 gap-3 text-left">
            {/* Date & Time */}
            <div className="p-3 rounded-xl border-2 flex items-start gap-2.5 bg-[#FAF4E6] border-[#EBDEBE] shadow-xs">
              <div className="p-2 rounded-lg bg-[#DE6D27]/15 text-[#DE6D27] flex-shrink-0 mt-0.5">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="block font-montserrat text-[8px] tracking-[0.2em] uppercase text-[#7A5030] font-semibold">
                  Date & Timing
                </span>
                <span className="block font-cinzel text-xs font-bold truncate text-[#24180F] mt-0.5">
                  Sat, Aug 29, 2026
                </span>
                <span className="block font-montserrat text-[10px] text-[#7A5030] flex items-center gap-1 font-medium mt-0.5">
                  <Clock className="w-3 h-3 inline flex-shrink-0 text-[#DE6D27]" />{' '}
                  {DEFAULT_EVENT.time}
                </span>
              </div>
            </div>

            {/* Venue & Location (Direct link to Waze) */}
            <a
              href={WAZE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border-2 flex items-start gap-2.5 bg-[#FAF4E6] border-[#EBDEBE] hover:border-[#DE6D27] transition-all group shadow-xs cursor-pointer"
              title="Open location in Waze"
            >
              <div className="p-2 rounded-lg bg-[#DE6D27]/15 text-[#DE6D27] flex-shrink-0 mt-0.5 group-hover:bg-[#DE6D27] group-hover:text-white transition-colors">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="block font-montserrat text-[8px] tracking-[0.2em] uppercase text-[#7A5030] font-semibold">
                  Venue & Location
                </span>
                <span className="block font-cinzel text-xs font-bold truncate text-[#24180F] mt-0.5">
                  {DEFAULT_EVENT.venueName}
                </span>
                <span className="block font-montserrat text-[10px] text-[#DE6D27] font-semibold truncate flex items-center gap-1 mt-0.5 group-hover:underline">
                  Open in Waze <ExternalLink className="w-2.5 h-2.5 inline flex-shrink-0" />
                </span>
              </div>
            </a>
          </div>

          {/* Bottom Luxury Seal Accent */}
          <div className="mt-5 pt-3 border-t border-[#DE6D27]/25 flex items-center justify-between text-[#7A5030] font-montserrat text-[8px] tracking-[0.25em] uppercase">
            <span>VIP Access Guaranteed</span>
            <span className="text-[#DE6D27] font-bold">•</span>
            <span>Mood Lounge</span>
          </div>
        </div>
      </div>
    </div>
  );
};
