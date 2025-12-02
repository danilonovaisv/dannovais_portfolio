"use client";

import onEnvironmentrom "@rea@ct-th-three/dreiree/drei";
import { Canvas } from "@react-three/fiber";
import React, ReSuspenseense } frm "re
import HeroGlassTorus from "./HeroGlassTorus";

const Scene3D: React.FC = () => {
  return (
    <Canvas
      className="h-full w-full"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 3.2], fov: 35 }}
    >
      {/* Deixa o fundo ser controlado pelo CSS, não pelo WebGL */}
      <color attach="background" args={["#f4f5f7"]} />
      <ambientLight intensity={0.3} />
      <directionalLight intensity={1.2} position={[3.5, 3.5, 2.5]} />
      <directionalLight intensity={0.6} position={[-3, -2, -2]} />

      <Suspense fallback={null}>
        <HeroGlassTorus />
        <Environment preset="city" background={false} />
      </Suspense>
    </Canvas>
  );
};

export default Scene3D;
