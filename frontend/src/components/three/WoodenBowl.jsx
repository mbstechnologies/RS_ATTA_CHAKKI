import React, { useMemo } from 'react';
import * as THREE from 'three';

export function WoodenBowl({ position = [0, -1.3, 0], scale = [1, 1, 1] }) {
  // Generate procedural wood texture
  const woodTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#654321';
    ctx.fillRect(0, 0, 512, 512);

    for (let i = 0; i < 300; i++) {
      ctx.fillStyle = `rgba(139, 90, 43, ${Math.random() * 0.4})`;
      ctx.fillRect(0, i * 2, 512, Math.random() * 4 + 1);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    return texture;
  }, []);

  return (
    <group position={position} scale={scale}>
      {/* Wooden Bowl Outer Mesh */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[1.5, 0.9, 0.6, 32, 1, true]} />
        <meshStandardMaterial map={woodTexture} roughness={0.7} side={THREE.DoubleSide} />
      </mesh>

      {/* Wooden Bowl Base Bottom */}
      <mesh castShadow receiveShadow position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.9, 0.85, 0.08, 32]} />
        <meshStandardMaterial map={woodTexture} roughness={0.7} />
      </mesh>

      {/* Flour Mound inside bowl */}
      <mesh receiveShadow position={[0, 0.05, 0]}>
        <sphereGeometry args={[1.42, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.48]} />
        <meshStandardMaterial
          color="#FFFDF7"
          roughness={0.95}
          metalness={0.0}
          bumpScale={0.05}
        />
      </mesh>

      {/* Flour Dust Scatter around Rim */}
      <mesh position={[0, 0.15, 0]}>
        <ringGeometry args={[1.38, 1.48, 32]} rotation={[-Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#FFFBF0" roughness={1.0} transparent opacity={0.75} />
      </mesh>
    </group>
  );
}
