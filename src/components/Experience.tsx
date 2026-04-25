import { useMemo, useRef } from 'react';
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Group,
  MathUtils,
  PointLight,
  PointsMaterial,
} from 'three';
import { Points, Plane } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import Building from './Building';
import CameraRig from './CameraRig';
import { useAppStore } from '../store';

const DUST_MAX = 300;

function DustParticles() {
  const pointsRef = useRef<Group>(null);
  const isMobile = window.innerWidth < 768;

  const particleGeometry = useMemo(() => {
    const count = isMobile ? 150 : DUST_MAX;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = MathUtils.randFloatSpread(14);
      positions[i * 3 + 1] = MathUtils.randFloat(-14, 26);
      positions[i * 3 + 2] = MathUtils.randFloatSpread(14);
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new BufferAttribute(positions, 3));
    return geometry;
  }, [isMobile]);

  const particleMaterial = useMemo(
    () =>
      new PointsMaterial({
        color: '#8ea0ff',
        size: 0.024,
        transparent: true,
        opacity: 0.38,
        depthWrite: false,
        blending: AdditiveBlending,
      }),
    [],
  );

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    pointsRef.current.position.y = Math.sin(clock.elapsedTime * 0.08) * 0.3;
  });

  return <Points ref={pointsRef as never} geometry={particleGeometry} material={particleMaterial} />;
}

export default function Experience() {
  const progress = useAppStore((state) => state.progress);
  const lightRef = useRef<PointLight>(null);

  useFrame(({ clock }) => {
    if (!lightRef.current) return;
    const inMoment = progress >= 0.65 && progress <= 0.72;
    const flicker = inMoment ? 1 + Math.sin(clock.elapsedTime * 45) * 0.12 : 1;
    lightRef.current.intensity = MathUtils.lerp(lightRef.current.intensity, 0.8 * flicker, 0.2);
  });

  return (
    <>
      <color attach="background" args={['#040410']} />
      <fogExp2 attach="fog" args={['#040410', 0.07]} />

      <ambientLight intensity={0.28} color="#5964d9" />
      <pointLight ref={lightRef} position={[0, 25, 4]} intensity={0.8} color="#7f96ff" distance={48} />

      <Plane args={[3, 22]} position={[0, 12, 2.2]}>
        <meshBasicMaterial color="#647eff" transparent opacity={0.08} />
      </Plane>

      <CameraRig />
      <Building />
      <DustParticles />
    </>
  );
}
