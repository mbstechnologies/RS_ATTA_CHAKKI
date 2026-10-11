import React from 'react';

export function SingleWheatStalk({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) {
  return (
    <group position={position} rotation={rotation} scale={[scale, scale, scale]}>
      {/* Central Stalk Stem */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.02, 0.03, 2.4, 8]} />
        <meshStandardMaterial color="#C59336" roughness={0.6} />
      </mesh>

      {/* Wheat Ears (Spikelets) along the stem */}
      {[...Array(9)].map((_, i) => {
        const yPos = 1.2 + i * 0.16;
        const isLeft = i % 2 === 0;
        const xRot = 0.3;
        const zRot = isLeft ? 0.45 : -0.45;
        const xPos = isLeft ? 0.05 : -0.05;

        return (
          <group key={i} position={[xPos, yPos, 0]} rotation={[xRot, 0, zRot]}>
            {/* Grain seed pod */}
            <mesh castShadow>
              <coneGeometry args={[0.07, 0.22, 6]} />
              <meshStandardMaterial color="#E5B457" roughness={0.4} metalness={0.1} />
            </mesh>
            {/* Whisker / Awn thread */}
            <mesh position={[0, 0.22, 0]}>
              <cylinderGeometry args={[0.005, 0.005, 0.3, 4]} />
              <meshStandardMaterial color="#D5A447" />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

export function WheatStalksGroup() {
  return (
    <group>
      {/* Left side wheat stalks cluster */}
      <SingleWheatStalk position={[-2.2, -1.2, -0.5]} rotation={[0.1, 0.4, 0.25]} scale={1.1} />
      <SingleWheatStalk position={[-1.8, -1.2, 0.6]} rotation={[-0.1, 0.2, 0.4]} scale={0.9} />
      
      {/* Right side wheat stalks cluster */}
      <SingleWheatStalk position={[2.2, -1.2, -0.4]} rotation={[0.1, -0.5, -0.3]} scale={1.15} />
      <SingleWheatStalk position={[1.8, -1.2, 0.5]} rotation={[-0.15, -0.3, -0.45]} scale={0.95} />
    </group>
  );
}
