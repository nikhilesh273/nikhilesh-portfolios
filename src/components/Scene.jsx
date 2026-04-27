import { Canvas } from '@react-three/fiber';
import { Environment, Float, Preload } from '@react-three/drei';
import Lighting from './Lighting';
import FloatingLogo from './FloatingLogo';
import StardustParticles from './StardustParticles';

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 2]} // Support high-dpi displays
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['#050505']} />
      
      {/* Fog for depth fading */}
      <fog attach="fog" args={['#050505', 5, 15]} />

      <Lighting />

      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <FloatingLogo />
      </Float>

      <StardustParticles />

      {/* Environment lighting for reflections */}
      <Environment preset="city" />
      
      <Preload all />
    </Canvas>
  );
}
