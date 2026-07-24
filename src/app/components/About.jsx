"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FiCode, FiSmartphone, FiServer, FiCloud, 
  FiShield, FiZap, FiCheckCircle, FiAward,
  FiBriefcase, FiUsers, FiClock, FiTrendingUp
} from "react-icons/fi";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: "2+", label: "Years Experience", icon: FiBriefcase },
    { number: "15+", label: "Projects Delivered", icon: FiCheckCircle },
    { number: "10+", label: "Happy Clients", icon: FiUsers },
    { number: "99%", label: "Client Satisfaction", icon: FiTrendingUp },
  ];

  const skills = [
    { name: "Frontend Development", icon: FiCode, color: "#a78bfa", level: 90 },
    { name: "App Development", icon: FiSmartphone, color: "#ec4899", level: 85 },
    { name: "Backend Development", icon: FiServer, color: "#3b82f6", level: 75 },
    { name: "Cloud & DevOps", icon: FiCloud, color: "#06b6d4", level: 70 },
  ];

  const highlights = [
    {
      title: "Full-Stack Expertise",
      description: "Building end-to-end web applications with React, Next.js, Node.js, and modern APIs.",
      icon: FiCode,
    },
    {
      title: "App Development",
      description: "Cross-platform mobile apps using React Native and Expo for iOS and Android.",
      icon: FiSmartphone,
    },
    {
      title: "Performance Focused",
      description: "Optimized architecture and clean code for production-grade reliability.",
      icon: FiZap,
    },
    {
      title: "Security First",
      description: "Implementing best practices for secure, scalable, and maintainable applications.",
      icon: FiShield,
    },
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
    // Background Glow
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
    // Header
    header: {
      textAlign: 'center',
      marginBottom: '60px',
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
    // Stats Grid
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '20px',
      marginBottom: '60px',
    },
    statCard: {
      textAlign: 'center',
      padding: '24px',
      background: 'rgba(255,255,255,0.03)',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.05)',
      transition: 'all 0.3s ease',
    },
    statIcon: {
      fontSize: '28px',
      marginBottom: '8px',
      color: '#a78bfa',
    },
    statNumber: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#ffffff',
    },
    statLabel: {
      fontSize: '14px',
      color: '#6b7280',
      marginTop: '4px',
    },
    // Main Content
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
      marginBottom: '60px',
    },
    // Left - About Text
    aboutText: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    aboutHeading: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#ffffff',
    },
    aboutDescription: {
      fontSize: '1rem',
      color: '#9ca3af',
      lineHeight: 1.8,
    },
    highlightList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      marginTop: '8px',
    },
    highlightItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      color: '#d1d5db',
      fontSize: '0.95rem',
    },
    highlightIcon: {
      color: '#a78bfa',
      fontSize: '18px',
      flexShrink: 0,
    },
    // Right - Skills
    skillsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    skillsHeading: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#ffffff',
    },
    skillItem: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
    },
    skillHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    skillName: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#d1d5db',
      fontSize: '0.95rem',
    },
    skillPercent: {
      color: '#6b7280',
      fontSize: '0.85rem',
      fontWeight: 500,
    },
    skillBar: {
      width: '100%',
      height: '6px',
      background: 'rgba(255,255,255,0.06)',
      borderRadius: '9999px',
      overflow: 'hidden',
    },
    skillFill: (level) => ({
      width: `${level}%`,
      height: '100%',
      background: 'linear-gradient(to right, #a78bfa, #8b5cf6, #7c3aed)',
      borderRadius: '9999px',
      transition: 'width 1s ease',
    }),
    // Highlights Grid
    highlightsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '20px',
    },
    highlightCard: {
      padding: '24px',
      background: 'rgba(255,255,255,0.03)',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.05)',
      textAlign: 'center',
      transition: 'all 0.3s ease',
    },
    highlightCardIcon: {
      fontSize: '32px',
      marginBottom: '12px',
      display: 'block',
    },
    highlightCardTitle: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '6px',
    },
    highlightCardDesc: {
      fontSize: '0.85rem',
      color: '#6b7280',
      lineHeight: 1.5,
    },
  };

  const mobileStyles = `
    @media (max-width: 768px) {
      .about-stats {
        grid-template-columns: repeat(2, 1fr) !important;
      }
      .about-content {
        grid-template-columns: 1fr !important;
        gap: 30px !important;
      }
      .about-highlights {
        grid-template-columns: 1fr 1fr !important;
      }
    }
    @media (max-width: 480px) {
      .about-highlights {
        grid-template-columns: 1fr !important;
      }
    }
  `;

  return (
    <section id="about" style={styles.section}>
      <div style={styles.bgGlow} />

      <div style={styles.container}>
        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={styles.header}
        >
          <div style={styles.badge}>About Me</div>
          <h2 style={styles.title}>
            Know <span style={styles.titleGradient}>Me Better</span>
          </h2>
          <p style={styles.subtitle}>
            A passionate developer dedicated to building exceptional digital experiences
          </p>
        </motion.div>

        {/* ===== STATS ===== */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={styles.statsGrid}
          className="about-stats"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ 
                  y: -5,
                  background: 'rgba(139,92,246,0.08)',
                  borderColor: 'rgba(139,92,246,0.2)'
                }}
                style={styles.statCard}
              >
                <Icon style={styles.statIcon} />
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ===== MAIN CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={styles.contentGrid}
          className="about-content"
        >
          {/* Left - About Text */}
          <div style={styles.aboutText}>
            <h3 style={styles.aboutHeading}>
              Building the Future, <span style={{ color: '#a78bfa' }}>One Line of Code at a Time</span>
            </h3>
            <p style={styles.aboutDescription}>
              I'm a passionate <strong style={{ color: '#a78bfa' }}>Frontend Developer</strong> and 
              <strong style={{ color: '#ec4899' }}> App Developer</strong> with 2+ years of experience 
              in building modern, responsive web applications and mobile apps.
            </p>
            <p style={styles.aboutDescription}>
              I specialize in <strong style={{ color: '#a78bfa' }}>React.js</strong>, 
              <strong style={{ color: '#a78bfa' }}> Next.js</strong>, and 
              <strong style={{ color: '#ec4899' }}> React Native</strong>, 
              delivering high-quality, scalable solutions that solve real-world problems.
            </p>

            <div style={styles.highlightList}>
              {[
                "🎯 2+ Years of Professional Experience",
                "🚀 15+ Production-Ready Projects",
                "📱 Cross-Platform App Development",
                "💻 Full-Stack Web Development",
                "🤝 Client-Focused Approach",
              ].map((item, index) => (
                <div key={index} style={styles.highlightItem}>
                  <FiCheckCircle style={styles.highlightIcon} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Skills */}
          <div style={styles.skillsContainer}>
            <h3 style={styles.skillsHeading}>My Skills</h3>
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={styles.skillItem}
                >
                  <div style={styles.skillHeader}>
                    <span style={styles.skillName}>
                      <Icon style={{ color: skill.color }} />
                      {skill.name}
                    </span>
                    <span style={styles.skillPercent}>{skill.level}%</span>
                  </div>
                  <div style={styles.skillBar}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      style={styles.skillFill(skill.level)}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ===== HIGHLIGHTS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={styles.highlightsGrid}
          className="about-highlights"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ 
                  y: -8,
                  background: 'rgba(139,92,246,0.08)',
                  borderColor: 'rgba(139,92,246,0.2)',
                  boxShadow: '0 8px 30px rgba(139,92,246,0.1)'
                }}
                style={styles.highlightCard}
              >
                <Icon style={styles.highlightCardIcon} />
                <h4 style={styles.highlightCardTitle}>{item.title}</h4>
                <p style={styles.highlightCardDesc}>{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>{mobileStyles}</style>
    </section>
  );
};

export default About;