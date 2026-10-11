import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Creates a high-resolution CanvasTexture with English branding
 */
export function useAttaBagTexture(brandName = "Shuddh Chakki Atta", weight = "5 kg", colorTheme = "#4A2C11") {
  return useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Background - Extremely Light Yellow Cream
    ctx.fillStyle = '#FFFDE7';
    ctx.fillRect(0, 0, 1024, 1024);

    // Add subtle paper grain/texture pattern
    for (let i = 0; i < 40000; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 1024;
      const opacity = Math.random() * 0.05;
      ctx.fillStyle = `rgba(180, 130, 60, ${opacity})`;
      ctx.fillRect(x, y, 2, 2);
    }

    // Top & Bottom Mid Dark Brown Banner
    ctx.fillStyle = colorTheme || '#4A2C11';
    ctx.fillRect(0, 0, 1024, 140);
    ctx.fillRect(0, 880, 1024, 144);

    // Top Gold Accent Line
    ctx.fillStyle = '#D59B2D';
    ctx.fillRect(0, 140, 1024, 12);
    ctx.fillRect(0, 868, 1024, 12);

    // Top Banner Text
    ctx.fillStyle = '#FEFCE8';
    ctx.font = 'bold 36px "Outfit", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🌾 100% FRESH & PURE STONE GROUND 🌾', 512, 85);

    // Decorative Gold Inner Border Frame
    ctx.strokeStyle = '#D59B2D';
    ctx.lineWidth = 6;
    ctx.strokeRect(60, 180, 904, 660);

    ctx.strokeStyle = '#4A2C11';
    ctx.lineWidth = 2;
    ctx.strokeRect(70, 190, 884, 640);

    // Brand Seal Badge Circle
    ctx.beginPath();
    ctx.arc(512, 320, 90, 0, Math.PI * 2);
    ctx.fillStyle = '#D59B2D';
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#FFFDE7';
    ctx.stroke();

    // Seal Text
    ctx.fillStyle = '#3D230D';
    ctx.font = 'bold 26px "Outfit", sans-serif';
    ctx.fillText('100% NATURAL', 512, 310);
    ctx.font = '20px "Outfit", sans-serif';
    ctx.fillText('★ PREMIUM QUALITY ★', 512, 340);

    // Main Brand Name in English
    ctx.fillStyle = '#4A2C11';
    ctx.font = 'bold 68px "Outfit", sans-serif';
    ctx.shadowColor = 'rgba(213, 155, 45, 0.4)';
    ctx.shadowBlur = 10;
    ctx.fillText(brandName.toUpperCase(), 512, 470);
    ctx.shadowBlur = 0;

    // Subtitle / Tagline
    ctx.fillStyle = '#7A4E27';
    ctx.font = '600 32px "Outfit", sans-serif';
    ctx.fillText('Freshness in Every Roti, Warmth in Every Bite', 512, 530);

    // Wheat Illustration Silhouette
    ctx.fillStyle = '#D59B2D';
    ctx.font = '64px sans-serif';
    ctx.fillText('🌾🌾🌾', 512, 610);

    // Quality Callout Pill
    ctx.fillStyle = '#4A2C11';
    ctx.beginPath();
    ctx.roundRect(312, 650, 400, 60, 30);
    ctx.fill();

    ctx.fillStyle = '#FEFCE8';
    ctx.font = 'bold 28px "Outfit", sans-serif';
    ctx.fillText('PURE WITH NO ADDED MAIDA', 512, 690);

    // Net Weight Badge
    ctx.fillStyle = '#4A2C11';
    ctx.font = 'bold 38px "Outfit", sans-serif';
    ctx.fillText(`Net Weight: ${weight}`, 512, 780);

    // Bottom Footer Banner Text
    ctx.fillStyle = '#FEFCE8';
    ctx.font = '24px "Outfit", sans-serif';
    ctx.fillText('FSSAI CERTIFIED HYGIENIC PACKAGING | TRADITIONAL CHAKKI', 512, 940);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, [brandName, weight, colorTheme]);
}

/**
 * 3D Atta Bag Model Component
 */
export function AttaPackaging({
  brandName = "Shuddh Chakki Atta",
  weight = "5 kg",
  colorTheme = "#4A2C11",
  hovered = false,
  autoRotate = true,
  scale = 1,
  ...props
}) {
  const bagRef = useRef();
  const texture = useAttaBagTexture(brandName, weight, colorTheme);

  useFrame((state, delta) => {
    if (bagRef.current && autoRotate) {
      bagRef.current.rotation.y += delta * 0.35;
      bagRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.5) * 0.08;
    }
  });

  const bagGeometry = useMemo(() => {
    const geom = new THREE.BoxGeometry(1.8, 2.5, 0.9, 16, 16, 16);
    const pos = geom.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i);
      let y = pos.getY(i);
      let z = pos.getZ(i);

      const puffFactor = Math.cos((y / 2.5) * Math.PI * 0.85);
      z = z * (1 + puffFactor * 0.38);
      x = x * (1 + puffFactor * 0.12);

      if (y > 1.0) {
        x *= 0.85;
        z *= 0.6;
      }
      if (y < -1.0) {
        x *= 0.92;
        z *= 0.8;
      }

      pos.setXYZ(i, x, y, z);
    }
    geom.computeVertexNormals();
    return geom;
  }, []);

  return (
    <group ref={bagRef} scale={[scale, scale, scale]} {...props}>
      <mesh geometry={bagGeometry} castShadow receiveShadow>
        <meshStandardMaterial
          map={texture}
          roughness={0.65}
          metalness={0.05}
          bumpScale={0.02}
        />
      </mesh>

      <mesh position={[0, 1.28, 0]} castShadow>
        <boxGeometry args={[1.6, 0.12, 0.4]} />
        <meshStandardMaterial color="#4A2C11" roughness={0.8} />
      </mesh>

      <mesh position={[0, 1.32, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 1.65, 8]} rotation={[0, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#D59B2D" roughness={0.5} />
      </mesh>

      <group position={[0.75, 1.0, 0.2]} rotation={[0, 0, -0.2]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.22, 0.22, 0.04, 32]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial color="#D59B2D" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
}
