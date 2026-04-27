export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.2} />
      
      {/* Main spotlight to highlight the center logo */}
      <spotLight 
        position={[5, 10, 5]} 
        intensity={2} 
        angle={0.5} 
        penumbra={1} 
        color="#ffffff" 
        castShadow
      />
      
      {/* Rim light for luxury aesthetic (gold/amber) */}
      <spotLight 
        position={[-5, 5, -5]} 
        intensity={3} 
        angle={0.8} 
        penumbra={1} 
        color="#D4AF37" 
      />

      {/* Soft purple/amber ambient light from the bottom */}
      <pointLight 
        position={[0, -5, 0]} 
        intensity={1.5} 
        color="#6B21A8" /* Purple hue for depth */
        distance={20} 
      />
    </>
  );
}
