import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, MeshTransmissionMaterial, Environment, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Fix for missing JSX intrinsic elements types
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      ambientLight: any;
      directionalLight: any;
      spotLight: any;
    }
  }
}

// Type definition for the GLTF result based on the provided JSX structure
type GLTFResult = {
  nodes: {
    Retopo_Cube001?: THREE.Mesh;
    [key: string]: any;
  };
  materials: {
    [key: string]: THREE.Material;
  };
};

const TorusModel = () => {
  // Load the model from the specified path
  const { nodes } = useGLTF('/media/torus_dan.glb') as unknown as GLTFResult;
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Check for reduced motion preference
  const prefersReducedMotion = useMemo(() => {
    if (typeof window !== 'undefined') {
       return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  }, []);

  useFrame((state) => {
    if (!meshRef.current || prefersReducedMotion) return;

    const scrollY = window.scrollY;
    const { x, y } = state.pointer;

    // Interactive rotation logic:
    // 1. Constant slow rotation (optional, kept very subtle)
    // 2. Scroll-based rotation (simulating turning the object as you scroll)
    // 3. Mouse parallax (tilting towards cursor)
    
    // Base rotation + Scroll influence
    meshRef.current.rotation.x = (scrollY * 0.0015) + (y * 0.1); 
    meshRef.current.rotation.y = (state.clock.elapsedTime * 0.05) + (scrollY * 0.002) + (x * 0.1);
  });

  // Use the specific geometry from the file if available
  const geometry = nodes.Retopo_Cube001?.geometry;

  if (!geometry) return null;

  return (
    <Float 
      speed={prefersReducedMotion ? 0 : 2} 
      rotationIntensity={prefersReducedMotion ? 0 : 0.5} 
      floatIntensity={prefersReducedMotion ? 0 : 0.5}
    >
      <mesh 
        ref={meshRef}
        geometry={geometry}
        scale={1.8} // Adjusted scale to fill the frame nicely
        rotation={[-0.5, 0.5, 0]} // Initial pose
      >
        {/* Liquid Glass Material settings */}
        <MeshTransmissionMaterial 
           backside
           samples={6}
           resolution={512}
           thickness={0.5}
           roughness={0.05}
           ior={1.2} // Index of refraction for glass-like substance
           chromaticAberration={0.06}
           anisotropy={0.1}
           distortion={0.4} // Liquid distortion effect
           distortionScale={0.3}
           temporalDistortion={0.1} // Moving liquid effect
           color="#ffffff"
           bg="transparent"
        />
      </mesh>
    </Float>
  );
};

const HeroGlassTorus: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
        
        {/* Lighting Setup */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <spotLight position={[-10, -10, -5]} intensity={0.5} color="#0057FF" />
        
        <TorusModel />
        
        {/* Environment preset "city" as requested for nice reflections */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

useGLTF.preload('/media/torus_dan.glb');

export default HeroGlassTorus;