import { useEffect, useMemo, useRef } from 'react';
import type { MouseEvent } from 'react';
import gsap from 'gsap';
import { sections, useAppStore } from '../store';

function rangeDistance(progress: number, start: number, end: number) {
  const center = (start + end) * 0.5;
  return Math.abs(progress - center) / ((end - start) * 0.5);
}

export default function UI() {
  const progress = useAppStore((state) => state.progress);
  const activeSectionId = useAppStore((state) => state.activeSectionId);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = gsap.quickTo(cursorRef.current, 'x', { duration: 0.28, ease: 'power3.out' });
    const r = gsap.quickTo(cursorRef.current, 'y', { duration: 0.28, ease: 'power3.out' });

    const onPointerMove = (ev: PointerEvent) => {
      q(ev.clientX - 8);
      r(ev.clientY - 8);
    };

    window.addEventListener('pointermove', onPointerMove);
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, []);


  const handleMagneticMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
    gsap.to(el, { x, y, duration: 0.2, ease: 'power2.out' });
  };

  const handleMagneticLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    gsap.to(event.currentTarget, { x: 0, y: 0, duration: 0.28, ease: 'power3.out' });
  };

  const floorLabel = useMemo(() => {
    const index = sections.findIndex((section) => section.id === activeSectionId);
    return `Layer ${index + 1} / ${sections.length}`;
  }, [activeSectionId]);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 text-slate-200">
      <div ref={cursorRef} className="pointer-events-none fixed left-0 top-0 h-4 w-4 rounded-full border border-slate-200/70" />

      <header className="absolute left-8 top-8 flex items-center gap-4">
        <h1 className="text-lg font-medium tracking-wide text-slate-100">The Descent — Mo ElSaadawy</h1>
        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Narrative Strategy</span>
      </header>

      <div className="absolute left-8 top-1/2 w-[min(560px,70vw)] -translate-y-1/2 space-y-6">
        {sections.map((section) => {
          const distance = rangeDistance(progress, section.range[0], section.range[1]);
          const strength = Math.max(0, 1 - distance);
          const isActive = activeSectionId === section.id;
          const opacity = 0.25 + strength * 0.75;
          const translateY = (1 - strength) * 24;
          const scale = 0.98 + strength * 0.02;

          return (
            <article
              key={section.id}
              className="rounded-xl border border-slate-200/10 bg-slate-900/35 p-6 backdrop-blur-md transition-all duration-500"
              style={{
                opacity,
                transform: `translateY(${translateY}px) scale(${scale})`,
              }}
            >
              {section.headline && <h2 className="mb-2 text-2xl font-semibold text-slate-100">{section.headline}</h2>}
              {section.subtext && <p className="max-w-xl leading-relaxed text-slate-300">{section.subtext}</p>}
              {section.items && (
                <ul className="space-y-1 text-slate-300">
                  {section.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              )}
              {section.framework && <p className="font-medium text-slate-200">{section.framework}</p>}
              {section.stats && (
                <div className="flex flex-wrap gap-2">
                  {section.stats.map((stat) => (
                    <span key={stat} className="rounded-full border border-slate-300/25 px-3 py-1 text-sm text-slate-100">
                      {stat}
                    </span>
                  ))}
                </div>
              )}
              {section.cta && (
                <a
                  className="pointer-events-auto inline-block rounded-full border border-indigo-300/60 px-5 py-2 text-sm font-semibold text-indigo-200 transition hover:-translate-y-0.5 hover:shadow-glow"
                  href={section.cta}
                  onMouseMove={handleMagneticMove}
                  onMouseLeave={handleMagneticLeave}
                >
                  Let’s make this land
                </a>
              )}
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">{isActive ? 'Active Layer' : section.id}</div>
            </article>
          );
        })}
      </div>

      <div className="absolute bottom-8 right-8 flex items-end gap-4">
        <div className="h-44 w-1 rounded-full bg-slate-700/50">
          <div className="w-full rounded-full bg-indigo-300" style={{ height: `${progress * 100}%` }} />
        </div>
        <div className="text-right">
          <div className="text-xs uppercase tracking-[0.22em] text-slate-400">{floorLabel}</div>
          <div className="text-sm text-slate-300">Impact is perception, scaled.</div>
        </div>
      </div>
    </div>
  );
}
