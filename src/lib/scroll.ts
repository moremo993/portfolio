import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { sectionForProgress, useAppStore } from '../store';

gsap.registerPlugin(ScrollTrigger);

export const setupScroll = () => {
  const lenis = new Lenis({
    duration: 1.15,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.1,
  });

  const setState = useAppStore.setState;
  let latestProgress = 0;

  const updateProgress = () => {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.max(0, Math.min(1, window.scrollY / maxScroll));

    if (Math.abs(progress - latestProgress) > 0.001) {
      latestProgress = progress;
      const section = sectionForProgress(progress);
      setState({ progress, activeSectionId: section.id });
    }
  };

  lenis.on('scroll', () => {
    updateProgress();
    ScrollTrigger.update();
  });

  let rafId = 0;
  const raf = (time: number) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };

  rafId = requestAnimationFrame(raf);
  updateProgress();

  return () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
    ScrollTrigger.killAll();
  };
};
