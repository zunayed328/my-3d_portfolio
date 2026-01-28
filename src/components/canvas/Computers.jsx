import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  // Use absolute path from public root so textures resolve correctly
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* 1. GLOBAL BRIGHTNESS FIX (Hemisphere Light up from 0.15 to 5) */}
      <hemisphereLight intensity={5} groundColor='black' />

      {/* 2. MAIN SPOTLIGHT FIX (Intensity up from 1 to 10) */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />

      {/* 3. GENERAL FILL LIGHT (Intensity up from 1 to 5) */}
      <pointLight intensity={5} />

      {/* 4. RGB FAN GLOW EFFECT (New Addition for colorful light) */}
      <pointLight
        intensity={15}
        position={[-2.5, -1.5, -1.5]} // Positioned near the PC case fans
        color="#915EFF" // Purple color for the glow
        distance={10}
      />

      {/* 5. SCREEN REFLECTION GLOW (Blue Light) */}
      <pointLight
        intensity={2}
        position={[0, 0.5, 0]} // Positioned near the monitor area
        color="#61dafb"
        distance={5}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ touchAction: 'pan-y' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;