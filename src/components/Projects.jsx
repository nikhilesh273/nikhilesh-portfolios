import { motion } from 'framer-motion';

const projects = [
  {
    name: "Spring Boot JWT Authentication",
    description: "A lightweight Java library for securing REST APIs using JWT authentication with Spring Security. Provides token generation, validation, and request filtering for stateless authentication in Spring Boot applications.",
    tech: "Java, Spring Boot, Spring Security, JJWT, Maven",
    link: "https://github.com/nikhilesh273/java-authentication"
  },
  {
    name: "Heartenza Services",
    description: "Offers expertly curated Wayanad travel experiences along with reliable lifestyle services. From planning unforgettable trips to providing trusted support, ensuring a seamless and stress-free experience.",
    tech: "Vite, React, Tailwind CSS",
    link: "https://heartenzaservices.com/"
  },
  {
    name: "Wentoura Holidays",
    description: "A travel platform creating stress-free, unforgettable moments. Whether it's a laid-back beach getaway or an international adventure, our team helps create stories you'll want to tell over and over.",
    tech: "HTML5, CSS, JS",
    link: "https://www.wentouraholidays.com/"
  },
  {
    name: "Pasta Evangelists",
    description: "Developed microservices for a high-traffic e-commerce platform handling real-time orders.",
    tech: "Java, Spring Boot, Kafka, GCP"
  },
  {
    name: "Good Of Food",
    description: "Optimized microservices for cart, checkout, product availability, improving transaction speed by 30%.",
    tech: "Java, AWS, REST APIs"
  },
  {
    name: "HIREQ",
    description: "Developed RESTful APIs for HR workflows using Java 11, Spring Boot, and JPA. Implemented microservice architecture with Eureka Server.",
    tech: "Java 11, Spring Boot, PostgreSQL, AWS"
  }
];

export default function Projects() {
  return (
    <section className="container section-padding">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="heading-section"
      >
        Projects
      </motion.h2>
      <div className="cards-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="glass-card"
          >
            <h3 className="card-title text-gold">{project.name}</h3>
            <p className="card-body">{project.description}</p>
            <div className="card-tech">{project.tech}</div>
            
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  marginTop: '1.5rem', 
                  display: 'inline-block', 
                  color: '#FFFFFF', 
                  textDecoration: 'none', 
                  borderBottom: '1px solid #D4AF37',
                  paddingBottom: '2px',
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                  width: 'fit-content'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#D4AF37'}
                onMouseOut={(e) => e.currentTarget.style.color = '#FFFFFF'}
              >
                View Project ↗
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
