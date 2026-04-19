"use client";

import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WavePoints = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 100;
  const sep = 0.2;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * count * 3);
    let i = 0;
    for (let x = 0; x < count; x++) {
      for (let z = 0; z < count; z++) {
        pos[i++] = (x - count / 2) * sep;
        pos[i++] = 0;
        pos[i++] = (z - count / 2) * sep;
      }
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!pointsRef.current) return;

    const posAttr = pointsRef.current.geometry.attributes.position;
    for (let i = 0; i < count * count; i++) {
      const x = posAttr.getX(i);
      const z = posAttr.getZ(i);
      
      // Logika gelombang sinus kompleks
      const y = Math.sin(x * 0.5 + time) * 0.3 + Math.sin(z * 0.3 + time) * 0.3;
      posAttr.setY(i, y);
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]} 
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.015} 
        color="#ffffff" 
        transparent 
        opacity={0.4} 
        sizeAttenuation={true} 
      />
    </points>
  );
};

export default function ParticleWave() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-black h-screen w-screen overflow-hidden">
      <Canvas 
        camera={{ position: [0, 2, 5], fov: 75 }}
        dpr={[1, 2]}
      >
        <WavePoints />
      </Canvas>
    </div>
  );
}