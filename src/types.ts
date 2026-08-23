export type AppStage = 'splash' | 'envelope' | 'card';

export type CardTheme = 'champagne' | 'obsidian';

export interface GuestRSVP {
  guestName: string;
  email?: string;
  status: 'confirmed' | 'declined' | 'pending';
  plusOnes: number;
  dietaryOrNotes: string;
  confirmationCode: string;
  confirmedAt?: string;
}

export interface EventInfo {
  brandName: string;
  tagline: string;
  occasion: string;
  date: string;
  dayOfWeek: string;
  time: string;
  venueName: string;
  hallOrArea: string;
  address: string;
  city: string;
  locationUrl?: string;
  wazeUrl?: string;
  dressCode: string;
  dressCodeDesc: string;
  highlights: string[];
}
