import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Stars from './Stars'

const StarsCanvas = () => {
  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 0, 1], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <Stars />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default StarsCanvas
