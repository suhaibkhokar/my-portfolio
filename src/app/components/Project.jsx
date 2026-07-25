"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiExternalLink, FiGithub, FiUsers, FiStar, FiCheckCircle } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiFirebase } from "react-icons/si";

const Projects = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Homeschooling with MBU",
      desc: "Free homeschool resources, curriculum, and support platform for parents.",
      image: "📚",
      category: "Ed-Tech",
      tech: [
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      ],
      features: ["Free homeschool curriculum", "Daily routine guides", "Educational flashcards"],
      users: "500+",
      rating: "4.8",
      demo: "https://homeschoolingwithmbu.com",
    },
    {
      title: "MBU Devs - Digital Agency",
      desc: "Full-service digital agency building world-class digital products.",
      image: "💻",
      category: "Digital Agency",
      tech: [
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "React Native", icon: FaReact, color: "#61DAFB" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      ],
      features: ["AI-powered chatbots", "Cross-platform apps", "Digital transformation"],
      users: "100+",
      rating: "4.9",
      demo: "https://mbudevs.com",
    },
    {
      title: "JSM Advertising",
      desc: "Full-service outdoor advertising company with sign boards and LED signage.",
      image: "📢",
      category: "Advertising",
      tech: [
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      ],
      features: ["Custom sign board design", "LED & Neon signage", "Vehicle graphics"],
      users: "200+",
      rating: "4.7",
      demo: "https://jsmadvertising.com",
    },
  ];

  const styles = {
    section: {
      padding: '80px 24px',
      background: '#0a0a0a',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
    },
    badge: {
      display: 'inline-block',
      padding: '6px 16px',
      background: 'rgba(16,185,129,0.08)',
      border: '1px solid rgba(16,185,129,0.15)',
      borderRadius: '9999px',
      color: '#10b981',
      fontSize: '12px',
      fontFamily: 'monospace',
      marginBottom: '16px',
    },
    title: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 'bold',
      color: '#ffffff',
    },
    titleGradient: {
      background: 'linear-gradient(to right, #10b981, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
      gap: '24px',
    },
    card: {
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.04)',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
    },
    cardImage: {
      padding: '24px 24px 0',
      fontSize: '48px',
      textAlign: 'center',
    },
    cardContent: {
      padding: '20px 24px 24px',
    },
    category: {
      display: 'inline-block',
      padding: '2px 10px',
      background: 'rgba(16,185,129,0.08)',
      borderRadius: '9999px',
      color: '#10b981',
      fontSize: '11px',
      fontWeight: 500,
      marginBottom: '8px',
    },
    cardTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '4px',
    },
    cardDesc: {
      fontSize: '0.9rem',
      color: '#6b7280',
      lineHeight: 1.6,
      marginBottom: '12px',
    },
    techStack: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      marginBottom: '12px',
    },
    techItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      padding: '2px 10px',
      background: 'rgba(255,255,255,0.03)',
      borderRadius: '9999px',
      fontSize: '11px',
      color: '#9ca3af',
    },
    features: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      marginBottom: '12px',
    },
    feature: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '13px',
      color: '#6b7280',
    },
    stats: {
      display: 'flex',
      gap: '16px',
      paddingTop: '12px',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      marginBottom: '12px',
    },
    stat: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '12px',
      color: '#6b7280',
    },
    statValue: {
      color: '#ffffff',
      fontWeight: 500,
    },
    btns: {
      display: 'flex',
      gap: '8px',
    },
    btnGithub: {
      padding: '6px 14px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '9999px',
      color: '#9ca3af',
      fontSize: '12px',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    },
    btnDemo: {
      padding: '6px 14px',
      background: 'linear-gradient(to right, #10b981, #059669)',
      border: 'none',
      borderRadius: '9999px',
      color: 'white',
      fontSize: '12px',
      fontWeight: 500,
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    },
  };

  const mobileCSS = `
    @media (max-width: 768px) {
      .projects-grid { grid-template-columns: 1fr !important; }
    }
  `;

  return (
    <section id="projects" style={styles.section} ref={ref}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.badge}>Portfolio</div>
          <h2 style={styles.title}>
            Featured <span style={styles.titleGradient}>Projects</span>
          </h2>
        </div>

        <div style={styles.grid} className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              style={styles.card}
              whileHover={{
                y: -6,
                borderColor: 'rgba(16,185,129,0.12)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
              }}
            >
              <div style={styles.cardImage}>{project.image}</div>
              <div style={styles.cardContent}>
                <span style={styles.category}>{project.category}</span>
                <h4 style={styles.cardTitle}>{project.title}</h4>
                <p style={styles.cardDesc}>{project.desc}</p>

                <div style={styles.techStack}>
                  {project.tech.map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                      <span key={idx} style={styles.techItem}>
                        <Icon size={12} color={tech.color} />
                        {tech.name}
                      </span>
                    );
                  })}
                </div>

                <div style={styles.features}>
                  {project.features.map((f, idx) => (
                    <div key={idx} style={styles.feature}>
                      <FiCheckCircle size={12} color="#10b981" />
                      {f}
                    </div>
                  ))}
                </div>

                <div style={styles.stats}>
                  <div style={styles.stat}>
                    <FiUsers size={14} />
                    <span style={styles.statValue}>{project.users}</span>
                  </div>
                  <div style={styles.stat}>
                    <FiStar size={14} />
                    <span style={styles.statValue}>{project.rating}</span>
                  </div>
                </div>

                <div style={styles.btns}>
                  <a href="#" style={styles.btnGithub}>
                    <FiGithub size={14} /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener" style={styles.btnDemo}>
                    <FiExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{mobileCSS}</style>
    </section>
  );
};

export default Projects;