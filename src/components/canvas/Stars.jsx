import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

// The project previously imported `maath/random/dist/maath-random.esm`,
// which can fail to resolve depending on the installed package version.
// To avoid depending on that internal path we generate sphere positions
// directly here (small, self-contained generator).

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);
    const radius = 1.2;

    for (let i = 0; i < count; i++) {
      // generate a random point uniformly distributed inside a sphere
      // using normalized random direction and cubic root for radius
      let x = Math.random() * 2 - 1;
      let y = Math.random() * 2 - 1;
      let z = Math.random() * 2 - 1;
      let len = Math.sqrt(x * x + y * y + z * z) || 1;
      x /= len;
      y /= len;
      z /= len;
      const r = Math.pow(Math.random(), 1 / 3) * radius;

      positions[i * 3 + 0] = x * r;
      positions[i * 3 + 1] = y * r;
      positions[i * 3 + 2] = z * r;
    }

    return positions;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]' style={{ pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
