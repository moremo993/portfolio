import { Canvas } from '@react-three/fiber';
import { useEffect } from 'react';
import Experience from './components/Experience';
import UI from './components/UI';
import { setupScroll } from './lib/scroll';

export default function App() {
  useEffect(() => setupScroll(), []);

  const dpr = window.innerWidth < 768 ? 1 : Math.min(1.5, window.devicePixelRatio);

  return (
    <main className="relative min-h-[600vh] bg-abyss">
      <div className="fixed inset-0">
        <Canvas dpr={dpr} camera={{ position: [0, 30, 6], fov: 36 }} gl={{ antialias: true, powerPreference: 'high-performance' }}>
          <Experience />
        </Canvas>
      </div>
      <UI />
    </main>
  );
}
