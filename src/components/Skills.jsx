import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: "Backend & Core",
    skills: [
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Spring Boot", icon: "devicon-spring-original colored" },
      { name: "Microservices", icon: "devicon-kubernetes-plain colored" },
      { name: "REST APIs", icon: "devicon-nodejs-plain colored" },
      { name: "Hibernate", icon: "devicon-hibernate-plain colored" },
      { name: "JPA", icon: "devicon-sqldeveloper-plain colored" }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
      { name: "GCP", icon: "devicon-googlecloud-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
      { name: "Jenkins", icon: "devicon-jenkins-line colored" },
      { name: "CI/CD", icon: "devicon-githubactions-plain colored" }
    ]
  },
  {
    category: "Architecture & Security",
    skills: [
      { name: "Kafka", icon: "devicon-apachekafka-original colored" },
      { name: "Eureka", icon: "devicon-spring-plain colored" },
      { name: "Spring Security", icon: "devicon-spring-plain colored" },
      { name: "JWT", icon: "devicon-json-plain colored" }
    ]
  }
];

export default function Skills() {
  return (
    <section className="container section-padding" style={{ paddingBottom: '150px' }}>
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="heading-section text-center"
      >
        Technical Skills
      </motion.h2>
      <div className="skills-grid">
        {skillCategories.map((cat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-card"
          >
            <h3 className="card-title text-gold text-center" style={{ marginBottom: '1.5rem' }}>{cat.category}</h3>
            <div className="skills-tags">
              {cat.skills.map((skill, i) => (
                <span key={i} className="skill-tag" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <i className={skill.icon} style={{ fontSize: '1.4rem' }}></i>
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
