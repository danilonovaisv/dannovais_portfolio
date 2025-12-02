"use client";

import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame, useThree, type GroupProps } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

type GlassMesh = THREE.Mesh<
  THREE.BufferGeometry,
  THREE.Material | THREE.Material[]
>;

const MODEL_PATH = "/media/torus_dan.glb";

const HeroGlassTorus: React.FC<GroupProps> = (props) => {
  const groupRef = useRef<THREE.Group>(null);
  const gltf = useGLTF(MODEL_PATH);
  const reduceMotion = useReducedMotion();
  const { mouse } = useThree();

  const geometry = useMemo(() => {
    let found: GlassMesh | null = null;

    gltf.scene.traverse((obj) => {
      if (!found && (obj as GlassMesh).isMesh) {
        found = obj as GlassMesh;
      }
    });

    return found?.geometry ?? undefined;
  }, [gltf]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const t = state.clock.getElapsedTime();

    const targetRotY = reduceMotion ? 0.6 : t * 0.35;
    const targetRotX = reduceMotion ? 0.3 : 0.4 + mouse.y * 0.4;

    const targetPosX = reduceMotion ? 0 : mouse.x * 0.25;
    const targetPosY = reduceMotion ? 0 : mouse.y * -0.25;

    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetRotY,
      3,
      delta
    );
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetRotX,
      3,
      delta
    );

    groupRef.current.position.x = THREE.MathUtils.damp(
      groupRef.current.position.x,
      targetPosX,
      4,
      delta
    );
    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      targetPosY,
      4,
      delta
    );
  });

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      position={[0, 0, 0]}
      rotation={[0.4, 0.6, 0]}
    >
      {geometry && (
        <mesh geometry={geometry} castShadow receiveShadow>
          <MeshTransmissionMaterial
            backside
            samples={12}
            resolution={768}
            thickness={0.6}
            ior={1.23}
            chromaticAberration={0.05}
            anisotropicBlur={0.2}
            distortion={0.52}
            distortionScale={0.36}
            temporalDistortion={reduceMotion ? 0 : 0.22}
            roughness={0.08}
            transmission={1}
            clearcoat={1}
            clearcoatRoughness={0.02}
            attenuationDistance={1.4}
            attenuationColor="#88b6ff"
            color="#ffffff"
          />
        </mesh>
      )}
    </group>
  );
};

useGLTF.preload(MODEL_PATH);

export default HeroGlassTorus;
