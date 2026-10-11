import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function WheatParticles({ count = 35 }) {
  const meshRef = useRef();

  // Generate random positions, rotations, and speeds for floating wheat grains
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 8;
      const y = (Math.random() - 0.5) * 6;
      const z = (Math.random() - 0.5) * 6;
      const speedY = Math.random() * 0.008 + 0.002;
      const rotSpeed = Math.random() * 0.02 + 0.005;
      const scale = Math.random() * 0.08 + 0.04;
      temp.push({ x, y, z, speedY, rotSpeed, scale, initialY: y });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    particles.forEach((p, i) => {
      // Gentle floating up and drift
      p.y += p.speedY;
      if (p.y > 4) p.y = -3;

      const floatX = p.x + Math.sin(time + i) * 0.3;
      const floatZ = p.z + Math.cos(time + i * 0.5) * 0.3;

      dummy.position.set(floatX, p.y, floatZ);
      dummy.rotation.set(time * p.rotSpeed, time * p.rotSpeed * 1.5, i);
      dummy.scale.set(p.scale, p.scale * 2.2, p.scale);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]} castShadow>
      {/* Wheat grain oval geometry */}
      <sphereGeometry args={[0.8, 8, 16]} />
      <meshStandardMaterial
        color="#D5A447"
        roughness={0.4}
        metalness={0.2}
        emissive="#553b08"
        emissiveIntensity={0.15}
      />
    </instancedMesh>
  );
}

export function FlourDustParticles({ count = 50 }) {
  const pointsRef = useRef();

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
      sz[i] = Math.random() * 0.06 + 0.02;
    }
    return [pos, sz];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const posAttr = pointsRef.current.geometry.attributes.position;
    
    for (let i = 0; i < count; i++) {
      let y = posAttr.getY(i);
      y += 0.003;
      if (y > 3) y = -2.5;
      posAttr.setY(i, y);
      
      let x = posAttr.getX(i);
      x += Math.sin(time + i) * 0.001;
      posAttr.setX(i, x);
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
        color="#FFF9EF"
        size={0.12}
        transparent
        opacity={0.65}
        depthWrite={false}
      />
    </points>
  );
}
