"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { 
  FiExternalLink, FiGithub, FiArrowRight, 
  FiCode, FiSmartphone, FiServer, FiCloud,
  FiStar, FiUsers, FiClock, FiCheckCircle
} from "react-icons/fi";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiFirebase } from "react-icons/si";

const Projects = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Homeschooling with MBU",
      description: "Free homeschool resources, curriculum, and support platform for parents. Features daily routines, preschool to high school programs, and educational flashcards.",
      image: "📚",
      category: "Ed-Tech",
      tech: [
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      ],
      features: [
        "Free homeschool resources and curriculum",
        "Daily routine guides for parents",
        "Educational flashcards for 0-15 age group",
        "Preschool to High School programs"
      ],
      github: "https://github.com",
      demo: "https://www.homeschoolingwithmbu.com/",
      stats: { users: "500+", rating: "4.8" }
    },
    {
      id: 2,
      title: "MBU Devs - Digital Agency",
      description: "Full-service digital agency building world-class digital products. Specializing in AI chatbots, web/mobile development, and digital transformation.",
      image: "💻",
      category: "Digital Agency",
      tech: [
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "React Native", icon: FaReact, color: "#61DAFB" },
        { name: "MySQL", icon: SiMongodb, color: "#47A248" },
        { name: "AWS", icon: FiCloud, color: "#FF9900" },
      ],
      features: [
        "AI-powered chatbots and automation",
        "Cross-platform mobile app development",
        "End-to-end digital transformation",
        "20+ experts, 30+ projects delivered"
      ],
      github: "https://github.com",
      demo: "https://www.mbudevs.com/",
      stats: { users: "100+", rating: "4.9" }
    },
    {
      id: 3,
      title: "JSM Advertising",
      description: "Full-service outdoor advertising company specializing in sign boards, LED signage, and digital billboards with nationwide installation.",
      image: "📢",
      category: "Advertising",
      tech: [
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      ],
      features: [
        "Custom sign board design & installation",
        "LED & Neon signage solutions",
        "Shop & building branding",
        "Vehicle graphics & wraps"
      ],
      github: "https://github.com",
      demo: "https://jsmadvertising.com/",
      stats: { users: "200+", rating: "4.7" }
    }
  ];

  const styles = {
    section: {
      padding: '80px 24px',
      background: '#0a0a0a',
      position: 'relative',
      overflow: 'hidden',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
    },
    bgGlow: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '800px',
      height: '800px',
      background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
      borderRadius: '50%',
      filter: 'blur(80px)',
      zIndex: 0,
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
    },
    badge: {
      display: 'inline-block',
      padding: '6px 16px',
      background: 'rgba(139,92,246,0.15)',
      border: '1px solid rgba(139,92,246,0.3)',
      borderRadius: '9999px',
      color: '#a78bfa',
      fontSize: '13px',
      fontWeight: 500,
      marginBottom: '16px',
    },
    title: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '12px',
    },
    titleGradient: {
      background: 'linear-gradient(to right, #a78bfa, #8b5cf6, #7c3aed)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#6b7280',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: 1.7,
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
      gap: '30px',
    },
    projectCard: {
      background: 'rgba(255,255,255,0.03)',
      borderRadius: '20px',
      border: '1px solid rgba(255,255,255,0.06)',
      overflow: 'hidden',
      transition: 'all 0.4s ease',
      position: 'relative',
    },
    cardImage: {
      padding: '30px 30px 0',
      fontSize: '60px',
      textAlign: 'center',
    },
    cardContent: {
      padding: '24px 30px 30px',
    },
    cardCategory: {
      display: 'inline-block',
      padding: '4px 12px',
      background: 'rgba(139,92,246,0.15)',
      borderRadius: '9999px',
      color: '#a78bfa',
      fontSize: '11px',
      fontWeight: 600,
      marginBottom: '12px',
    },
    cardTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '8px',
    },
    cardDescription: {
      fontSize: '0.9rem',
      color: '#9ca3af',
      lineHeight: 1.6,
      marginBottom: '16px',
    },
    techStack: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '16px',
    },
    techItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      padding: '4px 10px',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: '9999px',
      fontSize: '11px',
      color: '#d1d5db',
    },
    featuresList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      marginBottom: '16px',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px',
      color: '#6b7280',
    },
    featureIcon: {
      color: '#a78bfa',
      fontSize: '12px',
    },
    statsRow: {
      display: 'flex',
      gap: '20px',
      marginBottom: '16px',
      paddingTop: '16px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    },
    statItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '12px',
      color: '#6b7280',
    },
    statValue: {
      color: '#ffffff',
      fontWeight: 600,
    },
    buttonGroup: {
      display: 'flex',
      gap: '12px',
    },
    btnGithub: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '8px 16px',
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '9999px',
      color: '#d1d5db',
      fontSize: '13px',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    },
    btnDemo: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '8px 16px',
      background: 'linear-gradient(to right, #8b5cf6, #7c3aed)',
      border: 'none',
      borderRadius: '9999px',
      color: 'white',
      fontSize: '13px',
      fontWeight: 500,
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    },
  };

  const mobileStyles = `
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr !important;
      }
    }
  `;

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.bgGlow} />

      <div style={styles.container}>
        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={styles.header}
        >
          <div style={styles.badge}>Portfolio</div>
          <h2 style={styles.title}>
            Featured <span style={styles.titleGradient}>Projects</span>
          </h2>
          <p style={styles.subtitle}>
            Production-ready solutions with measurable impact — built for scale, performance, and real users.
          </p>
        </motion.div>

        {/* ===== PROJECTS GRID ===== */}
        <div style={styles.projectsGrid} className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={sectionRef}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              style={styles.projectCard}
              whileHover={{ 
                y: -10,
                borderColor: 'rgba(139,92,246,0.3)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              }}
            >
              {/* Image */}
              <div style={styles.cardImage}>
                {project.image}
              </div>

              {/* Content */}
              <div style={styles.cardContent}>
                <span style={styles.cardCategory}>{project.category}</span>
                <h3 style={styles.cardTitle}>{project.title}</h3>
                <p style={styles.cardDescription}>{project.description}</p>

                {/* Tech Stack */}
                <div style={styles.techStack}>
                  {project.tech.map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                      <span key={idx} style={styles.techItem}>
                        <Icon size={14} color={tech.color} />
                        {tech.name}
                      </span>
                    );
                  })}
                </div>

                {/* Features */}
                <div style={styles.featuresList}>
                  {project.features.map((feature, idx) => (
                    <div key={idx} style={styles.featureItem}>
                      <FiCheckCircle style={styles.featureIcon} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div style={styles.statsRow}>
                  <div style={styles.statItem}>
                    <FiUsers size={14} />
                    <span style={styles.statValue}>{project.stats.users}</span>
                    <span>Users</span>
                  </div>
                  <div style={styles.statItem}>
                    <FiStar size={14} />
                    <span style={styles.statValue}>{project.stats.rating}</span>
                    <span>Rating</span>
                  </div>
                </div>

                {/* Buttons */}
                <div style={styles.buttonGroup}>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.btnGithub}
                    whileHover={{ 
                      background: 'rgba(255,255,255,0.1)',
                      y: -2
                    }}
                  >
                    <FiGithub size={16} /> Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.btnDemo}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 4px 20px rgba(139,92,246,0.4)'
                    }}
                  >
                    Live Demo <FiExternalLink size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{mobileStyles}</style>
    </section>
  );
};

export default Projects;