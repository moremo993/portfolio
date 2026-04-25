import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useAppStore } from '../store';

const start = new THREE.Vector3(0, 30, 6);
const end = new THREE.Vector3(0, -8, 6);
const lookTarget = new THREE.Vector3(0, -2, 0);

export default function CameraRig() {
  const { camera } = useThree();
  const progress = useAppStore((state) => state.progress);
  const shakeRef = useRef(0);

  useFrame(({ clock }, delta) => {
    const target = start.clone().lerp(end, progress);
    const t = clock.elapsedTime;

    const signatureMoment = progress >= 0.65 && progress <= 0.72;
    const targetShake = signatureMoment ? 0.08 : 0;
    shakeRef.current += (targetShake - shakeRef.current) * Math.min(1, delta * 8);

    target.x += Math.sin(t * 0.28) * 0.28;
    target.z += Math.cos(t * 0.31) * 0.24;
    target.x += (Math.random() - 0.5) * shakeRef.current;
    target.y += (Math.random() - 0.5) * shakeRef.current;

    camera.position.lerp(target, Math.min(1, delta * 2.6));

    const look = lookTarget.clone();
    look.y = THREE.MathUtils.lerp(2, -8, progress) - 1;
    camera.lookAt(look);
  });

  return null;
}
