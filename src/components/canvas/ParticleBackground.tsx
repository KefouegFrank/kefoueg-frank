"use client";

import React, { useState, useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, Float } from "@react-three/drei";

const Nebula = () => {
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={[2, -1, -5]}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshBasicMaterial color="#00ffff" transparent opacity={0.05} />
      </mesh>
      <mesh position={[-3, 2, -7]}>
        <sphereGeometry args={[4, 32, 32]} />
        <meshBasicMaterial color="#0055ff" transparent opacity={0.03} />
      </mesh>
    </Float>
  );
};

const StarBackground = (
  props: React.ComponentPropsWithoutRef<typeof Points>,
) => {
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() => {
    const points = new Float32Array(8000 * 3);
    for (let i = 0; i < 8000; i++) {
      // Random positions in a larger volume for depth
      const radius = 2 + Math.random() * 5;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      points[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      points[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      points[i * 3 + 2] = radius * Math.cos(phi);
    }
    return points;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      // Slow rotation for celestial feel
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;

      // Subtle pulsing of the group scale to simulate depth breathing
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      ref.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={1}
        />
      </Points>
    </group>
  );
};

const ParticleBackground = () => {
  return (
    <div className="w-full h-full fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <Suspense fallback={null}>
          <Nebula />
          <StarBackground />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
