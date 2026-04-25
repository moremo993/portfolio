import { useMemo, useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import Floor from './Floor';
import { useAppStore } from '../store';

const floorThemes = [
  { tone: '#241e44', emissive: '#e88f5d' },
  { tone: '#1e2a50', emissive: '#66a6ff' },
  { tone: '#1f2b3f', emissive: '#72d4f9' },
  { tone: '#15233a', emissive: '#72a7ff' },
  { tone: '#10172a', emissive: '#94a3ff' },
];

const floorHeight = 8;

export default function Building() {
  const groupRef = useRef<Group>(null);
  const progress = useAppStore((state) => state.progress);

  const floors = useMemo(
    () =>
      floorThemes.map((theme, index) => (
        <Floor
          key={index}
          index={index}
          y={20 - index * floorHeight}
          tone={theme.tone}
          emissive={theme.emissive}
        />
      )),
    [],
  );

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const targetY = -progress * 2.2;
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * Math.min(1, delta * 1.8);
  });

  return <group ref={groupRef}>{floors}</group>;
}
