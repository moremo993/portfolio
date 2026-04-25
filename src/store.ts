import { create } from 'zustand';

export type NarrativeSection = {
  id: 'identity' | 'impact' | 'method' | 'proof' | 'cta';
  range: [number, number];
  headline?: string;
  subtext?: string;
  items?: string[];
  framework?: string;
  stats?: string[];
  cta?: string;
};

type State = {
  progress: number;
  activeSectionId: NarrativeSection['id'];
  setProgress: (progress: number) => void;
  setActiveSection: (id: NarrativeSection['id']) => void;
};

export const sections: NarrativeSection[] = [
  {
    id: 'identity',
    range: [0, 0.2],
    headline: 'Trusted with stories that matter.',
    subtext: 'I translate complex mandates into narratives people actually feel.',
  },
  {
    id: 'impact',
    range: [0.2, 0.4],
    headline: 'Work that shifted perception.',
    items: [
      'COP27 climate communications',
      'UNDP Egypt narrative strategy',
      'Regional campaigns across multiple markets',
    ],
  },
  {
    id: 'method',
    range: [0.4, 0.6],
    headline: 'Narrative is architecture.',
    framework: 'Perception → Emotion → Action',
  },
  {
    id: 'proof',
    range: [0.6, 0.8],
    stats: ['6+ years experience', '4 countries', 'UN credentialed'],
  },
  {
    id: 'cta',
    range: [0.8, 1],
    headline: 'Let’s translate this into impact.',
    cta: 'mailto:mo@elsaadawy.com',
  },
];

export const sectionForProgress = (progress: number): NarrativeSection =>
  sections.find(({ range }) => progress >= range[0] && progress <= range[1]) ?? sections[0];

export const useAppStore = create<State>((set) => ({
  progress: 0,
  activeSectionId: 'identity',
  setProgress: (progress) => set({ progress }),
  setActiveSection: (activeSectionId) => set({ activeSectionId }),
}));
