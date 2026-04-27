import { motion } from 'framer-motion';

export default function Hero() {
  const title = "NIKHILESH".split("");

  return (
    <section className="min-h-screen container hero-section">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="hero-content"
        style={{ zIndex: 10 }}
      >
        <h1 className="heading-hero" style={{ perspective: "1000px" }}>
          {title.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 1, 
                delay: 0.2 + index * 0.1, 
                ease: [0.2, 0.65, 0.3, 0.9] 
              }}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <p className="hero-subtitle text-gold">JAVA BACKEND DEVELOPER</p>
        <p className="hero-description text-body">
          Building scalable microservices and RESTful APIs using Java and Spring Boot. 
          Strong expertise in backend performance tuning, resolving production issues, 
          and distributed systems architecture.
        </p>
        <div className="hero-cta" style={{ marginTop: '2rem' }}>
          <button className="btn-primary">Explore Work</button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', zIndex: 10, width: '100%' }}
      >
        <motion.img 
          src="/images/workspace.png" 
          alt="Software Engineer Workspace" 
          className="glass-card"
          style={{ width: '100%', maxWidth: '600px', padding: '0.5rem', borderRadius: '24px', objectFit: 'cover' }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
