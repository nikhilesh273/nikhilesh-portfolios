import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial } from '@react-three/drei';

export default function FloatingLogo() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef} scale={[1.5, 1.5, 1.5]}>
      {/* Abstract 'N' shape constructed from high-end geometry */}
      
      {/* Left Vertical Pillar */}
      <mesh position={[-1, 0, 0]}>
        <boxGeometry args={[0.4, 3, 0.4]} />
        <meshPhysicalMaterial 
          color="#111111" 
          metalness={0.9} 
          roughness={0.2} 
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Right Vertical Pillar */}
      <mesh position={[1, 0, 0]}>
        <boxGeometry args={[0.4, 3, 0.4]} />
        <meshPhysicalMaterial 
          color="#111111" 
          metalness={0.9} 
          roughness={0.2} 
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Diagonal Connecting Pillar */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <boxGeometry args={[0.3, 3.5, 0.3]} />
        {/* Glowing / Glass material for the center */}
        <MeshTransmissionMaterial 
          backside
          thickness={0.5}
          roughness={0.1}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.05}
          color="#D4AF37" // Metallic gold tint
          emissive="#D4AF37"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Orbiting glowing rings (Fiber-optic veins) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.02, 16, 100]} />
        <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={2} />
      </mesh>
      
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.5, 0.01, 16, 100]} />
        <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={1} />
      </mesh>
    </group>
  );
}
