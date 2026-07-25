"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { 
  FiCode, FiSmartphone, FiServer, FiCloud, 
  FiShield, FiZap, FiCheckCircle, FiAward,
  FiBriefcase, FiUsers, FiTrendingUp
} from "react-icons/fi";

const About = () => {
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

  const stats = [
    { number: "2+", label: "Years Experience", icon: FiBriefcase, color: "#10b981" },
    { number: "15+", label: "Projects Delivered", icon: FiCheckCircle, color: "#8b5cf6" },
    { number: "10+", label: "Happy Clients", icon: FiUsers, color: "#f59e0b" },
    { number: "99%", label: "Satisfaction", icon: FiTrendingUp, color: "#ec4899" },
  ];

  const skills = [
    { name: "Frontend Development", icon: FiCode, color: "#10b981", level: 90 },
    { name: "App Development", icon: FiSmartphone, color: "#ec4899", level: 85 },
    { name: "Backend Development", icon: FiServer, color: "#3b82f6", level: 75 },
    { name: "Cloud & DevOps", icon: FiCloud, color: "#06b6d4", level: 70 },
  ];

  const highlights = [
    { title: "Full-Stack Expertise", desc: "End-to-end web applications with React, Next.js, Node.js.", icon: FiCode, color: "#10b981" },
    { title: "App Development", desc: "Cross-platform mobile apps with React Native.", icon: FiSmartphone, color: "#ec4899" },
    { title: "Performance Focused", desc: "Optimized architecture for production-grade reliability.", icon: FiZap, color: "#f59e0b" },
    { title: "Security First", desc: "Best practices for secure, scalable applications.", icon: FiShield, color: "#3b82f6" },
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
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px',
      marginBottom: '50px',
    },
    statCard: {
      padding: '20px',
      textAlign: 'center',
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.04)',
    },
    statIcon: (color) => ({
      fontSize: '24px',
      color: color,
      marginBottom: '4px',
    }),
    statNumber: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#ffffff',
    },
    statLabel: {
      fontSize: '13px',
      color: '#6b7280',
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
      marginBottom: '50px',
    },
    aboutText: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    aboutHeading: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#ffffff',
    },
    aboutDesc: {
      fontSize: '1rem',
      color: '#9ca3af',
      lineHeight: 1.8,
    },
    highlightList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    highlightItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      color: '#d1d5db',
      fontSize: '0.95rem',
    },
    skillsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    skillItem: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    },
    skillHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '0.9rem',
      color: '#d1d5db',
    },
    skillBar: {
      width: '100%',
      height: '4px',
      background: 'rgba(255,255,255,0.04)',
      borderRadius: '9999px',
      overflow: 'hidden',
    },
    skillFill: (level, color) => ({
      width: level + '%',
      height: '100%',
      background: `linear-gradient(to right, ${color}, ${color}dd)`,
      borderRadius: '9999px',
    }),
    highlightsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px',
    },
    highlightCard: {
      padding: '20px',
      textAlign: 'center',
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.04)',
    },
    highlightIcon: (color) => ({
      fontSize: '28px',
      color: color,
      marginBottom: '8px',
    }),
    highlightTitle: {
      fontSize: '0.95rem',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '4px',
    },
    highlightDesc: {
      fontSize: '0.85rem',
      color: '#6b7280',
      lineHeight: 1.5,
    },
  };

  const mobileCSS = `
    @media (max-width: 768px) {
      .about-stats { grid-template-columns: repeat(2, 1fr) !important; }
      .about-content { grid-template-columns: 1fr !important; gap: 30px !important; }
      .about-highlights { grid-template-columns: 1fr 1fr !important; }
    }
    @media (max-width: 480px) {
      .about-highlights { grid-template-columns: 1fr !important; }
    }
  `;

  return (
    <section id="about" style={styles.section} ref={ref}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.badge}>About Me</div>
          <h2 style={styles.title}>
            Know <span style={styles.titleGradient}>Me Better</span>
          </h2>
        </div>

        <div style={styles.statsGrid} className="about-stats">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                style={styles.statCard}
                whileHover={{ 
                  background: 'rgba(16,185,129,0.02)',
                  borderColor: 'rgba(16,185,129,0.08)',
                }}
              >
                <Icon style={styles.statIcon(stat.color)} />
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        <div style={styles.contentGrid} className="about-content">
          <div style={styles.aboutText}>
            <h3 style={styles.aboutHeading}>
              Building the Future, <span style={{ color: '#10b981' }}>One Line at a Time</span>
            </h3>
            <p style={styles.aboutDesc}>
              I'm a passionate <strong style={{ color: '#10b981' }}>Frontend Developer</strong> and 
              <strong style={{ color: '#ec4899' }}> App Developer</strong> with 2+ years of experience.
            </p>
            <p style={styles.aboutDesc}>
              I specialize in <strong style={{ color: '#10b981' }}>React.js</strong>, 
              <strong style={{ color: '#10b981' }}> Next.js</strong>, and 
              <strong style={{ color: '#ec4899' }}> React Native</strong>.
            </p>
            <div style={styles.highlightList}>
              {["🎯 2+ Years Experience", "🚀 15+ Projects", "📱 Cross-Platform Apps", "💻 Full-Stack Expert"].map((item, i) => (
                <div key={i} style={styles.highlightItem}>
                  <FiCheckCircle style={{ color: '#10b981' }} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={styles.skillsContainer}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#ffffff' }}>My Skills</h3>
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  style={styles.skillItem}
                >
                  <div style={styles.skillHeader}>
                    <span><Icon style={{ color: skill.color, marginRight: '6px' }} /> {skill.name}</span>
                    <span style={{ color: '#6b7280' }}>{skill.level}%</span>
                  </div>
                  <div style={styles.skillBar}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: skill.level + '%' } : {}}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      style={styles.skillFill(skill.level, skill.color)}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div style={styles.highlightsGrid} className="about-highlights">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                style={styles.highlightCard}
                whileHover={{ 
                  background: 'rgba(16,185,129,0.02)',
                  borderColor: 'rgba(16,185,129,0.08)',
                  y: -4,
                }}
              >
                <Icon style={styles.highlightIcon(item.color)} />
                <h4 style={styles.highlightTitle}>{item.title}</h4>
                <p style={styles.highlightDesc}>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{mobileCSS}</style>
    </section>
  );
};

export default About;