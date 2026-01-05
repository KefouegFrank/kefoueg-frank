"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

export default function HeroModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Smooth mouse follow with lerp
    const targetRotationY = mouseX.current * 0.5;
    const targetRotationX = mouseY.current * 0.3;

    meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * 0.05;
    meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.05;
  });

  // Update mouse position
  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", (e) => {
      mouseX.current = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY.current = -(e.clientY / window.innerHeight) * 2 + 1;
    });
  }

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <MeshDistortMaterial
          color="#00d4ff"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      <pointLight position={[2, 2, 2]} color="#8b5cf6" intensity={1} />
    </Float>
  );
}
