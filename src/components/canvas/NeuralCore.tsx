"use client";

import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  Float,
  PerspectiveCamera,
  Icosahedron,
  MeshWobbleMaterial,
  Torus,
} from "@react-three/drei";

import { Mesh } from "three";

const NeuralSphere = () => {
  const meshRef = useRef<Mesh>(null);
  const coreRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y = -state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Outer Wireframe Shell */}
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <Icosahedron ref={meshRef} args={[1.5, 2]}>
          <meshBasicMaterial
            color={hovered ? "#00ffff" : "#005555"}
            wireframe
            transparent
            opacity={0.3}
          />
        </Icosahedron>
      </Float>

      {/* Rotating Torus Ring */}
      <Torus args={[2, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <MeshWobbleMaterial color="#00ffff" factor={0.4} speed={1} />
      </Torus>

      {/* Central Glowing Core */}
      <Float speed={5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Icosahedron ref={coreRef} args={[0.8, 4]}>
          <MeshDistortMaterial
            color="#00ffff"
            attach="material"
            distort={0.6}
            speed={4}
            roughness={0}
            metalness={1}
            emissive="#00ffff"
            emissiveIntensity={2}
          />
        </Icosahedron>
      </Float>

      {/* Light Source inside the core */}
      <pointLight position={[0, 0, 0]} intensity={2} color="#00ffff" />
    </group>
  );
};

const NeuralCore = () => {
  return (
    <div className="w-full h-full min-h-[400px] relative cursor-pointer">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} />
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
          <NeuralSphere />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default NeuralCore;
