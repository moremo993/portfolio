import { memo, useMemo } from 'react';
import * as THREE from 'three';

type FloorProps = {
  index: number;
  y: number;
  tone: string;
  emissive: string;
};

const wallGeometry = new THREE.BoxGeometry(8, 3.2, 0.25);
const slabGeometry = new THREE.BoxGeometry(8, 0.2, 8);
const windowGeometry = new THREE.PlaneGeometry(1.2, 0.8);

const Floor = memo(function Floor({ index, y, tone, emissive }: FloorProps) {
  const wallMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(tone).multiplyScalar(0.55),
        roughness: 0.92,
        metalness: 0.08,
      }),
    [tone],
  );

  const floorMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(tone).multiplyScalar(0.4),
        roughness: 0.4,
        metalness: 0.28,
      }),
    [tone],
  );

  const windowMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: emissive,
        emissive,
        emissiveIntensity: 1.6,
        roughness: 0.2,
      }),
    [emissive],
  );

  return (
    <group position={[0, y, 0]}>
      <mesh geometry={slabGeometry} material={floorMaterial} position={[0, -1.6, 0]} receiveShadow />
      <mesh geometry={wallGeometry} material={wallMaterial} position={[0, 0, -4]} />
      <mesh geometry={wallGeometry} material={wallMaterial} position={[0, 0, 4]} />
      <mesh geometry={wallGeometry} material={wallMaterial} position={[-4, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={wallGeometry} material={wallMaterial} position={[4, 0, 0]} rotation={[0, Math.PI / 2, 0]} />

      {[-2.3, 0, 2.3].map((xOffset) => (
        <mesh key={`${index}-${xOffset}`} geometry={windowGeometry} material={windowMaterial} position={[xOffset, 0, -3.86]} />
      ))}

      <pointLight position={[0, 0.4, 0]} intensity={0.45} color={emissive} distance={6} />
    </group>
  );
});

export default Floor;
