import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Freelance Backend Developer",
    company: "Freelance",
    date: "10/2025 - Present",
    points: [
      "Designing and developing a scalable Order Management System with backend architecture.",
      "Building REST APIs for efficient system communication and integration.",
      "Optimizing database queries and improving system performance.",
      "Exploring and building solutions using AI/LLM technologies."
    ]
  },
  {
    title: "Software Developer",
    company: "Storilabs System Technologies",
    date: "02/2023 - 10/2025",
    location: "Calicut, Kerala",
    points: [
      "Developed and maintained a robust microservices architecture using Spring Boot.",
      "Implemented features for Order Management System.",
      "Integrated delivery platforms like Shopify.",
      "Managed MongoDB, PostgreSQL, and MySQL databases."
    ]
  },
  {
    title: "Software Developer",
    company: "uviQo Technologies",
    date: "09/2021 - 02/2023",
    location: "Trivandrum, Kerala",
    points: [
      "Led development of SaaS education and HRM platforms.",
      "Designed microservices architecture with reusable Java libraries.",
      "Implemented Eureka service registry in microservices architecture.",
      "Implemented Spring Security for API authentication."
    ]
  }
];

export default function Experience() {
  return (
    <section className="container section-padding">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="heading-section"
      >
        Experience
      </motion.h2>
      <div className="cards-grid">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="glass-card"
          >
            <h3 className="card-title text-gold">{exp.title}</h3>
            <p className="card-subtitle">{exp.company} | {exp.date}</p>
            <ul className="card-list">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
