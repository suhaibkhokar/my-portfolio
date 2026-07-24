"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { 
  FiArrowRight, FiDownload, FiGithub, FiLinkedin, 
  FiTwitter, FiMail 
} from "react-icons/fi";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Frontend Developer 🚀',
        'App Developer 📱',
        'React.js Expert ⚛️',
        'Next.js Specialist 💎',
        'Full Stack Developer 💻',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "14+", label: "Projects Completed" },
    { number: "6+", label: "Technologies" },
    { number: "179+", label: "Code Commits" },
  ];

  const styles = {
    section: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px 80px',
      background: '#0a0a0a',
      position: 'relative',
      overflow: 'hidden',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2,
    },
    // Background Glows
   
    bgGlow2: {
      position: 'absolute',
      bottom: '-20%',
      left: '-10%',
      width: '500px',
      height: '500px',
      background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)',
      borderRadius: '50%',
      filter: 'blur(80px)',
      zIndex: 0,
    },
    // Left Content
    leftContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    badge: {
      display: 'inline-block',
      padding: '8px 20px',
      background: 'rgba(139,92,246,0.15)',
      border: '1px solid rgba(139,92,246,0.3)',
      borderRadius: '9999px',
      color: '#a78bfa',
      fontSize: '14px',
      fontWeight: 500,
      width: 'fit-content',
    },
    title: {
      fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
      fontWeight: 'bold',
      lineHeight: 1.1,
      color: '#ffffff',
    },
    titleGradient: {
      background: 'linear-gradient(to right, #a78bfa, #8b5cf6, #7c3aed)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    subtitle: {
      fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
      color: '#9ca3af',
      minHeight: '50px',
      fontWeight: 500,
    },
    description: {
      fontSize: '1.1rem',
      color: '#6b7280',
      maxWidth: '500px',
      lineHeight: 1.8,
    },
    buttons: {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap',
    },
    primaryBtn: {
      padding: '14px 32px',
      background: 'linear-gradient(to right, #8b5cf6, #7c3aed)',
      border: 'none',
      borderRadius: '9999px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '16px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 20px rgba(139,92,246,0.4)',
      textDecoration: 'none',
    },
    secondaryBtn: {
      padding: '14px 32px',
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '9999px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '16px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
    },
    socialLinks: {
      display: 'flex',
      gap: '16px',
    },
    socialIcon: {
      width: '44px',
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      color: '#6b7280',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    // Right Content - Image with Simple Blue Line
    rightContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '32px',
      position: 'relative',
    },
    profileContainer: {
      position: 'relative',
      width: '100%',
      maxWidth: '420px',
      aspectRatio: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    // SIMPLE BLUE LINE - Top Left Corner
    cornerLine: {
      position: 'absolute',
      top: '-20px',
      left: '-20px',
      width: '80px',
      height: '80px',
      borderTop: '3px solid #3b82f6',
      borderLeft: '3px solid #3b82f6',
      borderRadius: '4px 0 0 0',
      zIndex: 1,
      opacity: 0.6,
    },
    profileCircle: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #8b5cf6, #7c3aed, #ec4899)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 0 80px rgba(139,92,246,0.3)',
      border: '4px solid rgba(139,92,246,0.2)',
    },
    profileImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%',
    },
    // Simple Glow Ring
    glowRing: {
      position: 'absolute',
      inset: '-12px',
      borderRadius: '50%',
      border: '2px solid rgba(59,130,246,0.3)',
      opacity: 0.5,
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px',
      width: '100%',
      maxWidth: '420px',
    },
    statCard: {
      padding: '16px',
      textAlign: 'center',
      background: 'rgba(255,255,255,0.03)',
      borderRadius: '12px',
      border: '1px solid rgba(255,255,255,0.05)',
      transition: 'all 0.3s ease',
    },
    statNumber: {
      fontSize: '24px',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #a78bfa, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    statLabel: {
      fontSize: '12px',
      color: '#6b7280',
      marginTop: '4px',
    },
  };

  const mobileStyles = `
    @media (max-width: 768px) {
      .hero-container {
        grid-template-columns: 1fr !important;
        gap: 40px !important;
      }
      .hero-stats {
        grid-template-columns: repeat(2, 1fr) !important;
      }
      .hero-profile {
        max-width: 280px !important;
      }
      .hero-left {
        text-align: center !important;
        align-items: center !important;
      }
      .hero-description {
        max-width: 100% !important;
        text-align: center !important;
      }
      .hero-badge {
        margin: 0 auto !important;
      }
      .hero-social {
        justify-content: center !important;
      }
      .hero-buttons {
        justify-content: center !important;
      }
      .corner-line {
        display: none !important;
      }
    }
  `;

  return (
    <section id="home" style={styles.section}>
      {/* Background Effects */}
      <div style={styles.bgGlow1} />
      <div style={styles.bgGlow2} />

      <div style={styles.container} className="hero-container">
        {/* ===== LEFT SIDE ===== */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.leftContent}
          className="hero-left"
        >
          <div style={styles.badge} className="hero-badge">
            🚀 Available for Freelance Work
          </div>

          <h1 style={styles.title}>
            Hi, I'm <br />
            <span style={styles.titleGradient}>Suhaib Ali</span>
          </h1>

          <div style={styles.subtitle}>
            <span ref={typedRef}></span>
          </div>

          <p style={styles.description} className="hero-description">
            I'm a passionate <strong style={{ color: '#a78bfa' }}>Frontend Developer</strong> and 
            <strong style={{ color: '#ec4899' }}> App Developer</strong> with 2+ years of experience 
            building modern, responsive web applications and mobile apps using 
            React.js, Next.js, and React Native.
          </p>

          <div style={styles.buttons} className="hero-buttons">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={styles.primaryBtn}
            >
              Hire Me <FiArrowRight />
            </motion.a>
            <motion.a
              href="resume/Suhaib_Ali_Resume (1).pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={styles.secondaryBtn}
            >
              <FiDownload /> Download CV
            </motion.a>
          </div>

          <div style={styles.socialLinks} className="hero-social">
            {[
              { icon: FiGithub, href: "https://github.com/settings/profile", label: "GitHub" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/suhaib-ali-10964632a/", label: "LinkedIn" },
              { icon: FiMail, href: "mailto:suhaibfreelancer0@email.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#a78bfa', borderColor: '#a78bfa' }}
                style={styles.socialIcon}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ===== RIGHT SIDE - Image with Simple Blue Line ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={styles.rightContent}
        >
          <div style={styles.profileContainer} className="hero-profile">
            {/* Simple Blue Corner Line */}
            <div style={styles.cornerLine} className="corner-line" />

            {/* Simple Glow Ring */}
            <div style={styles.glowRing} />

            {/* Profile Circle with YOUR IMAGE */}
            <motion.div
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={styles.profileCircle}
            >
              {/* ===== YOUR IMAGE ===== */}
              <img 
                src="assets/portfolio-image.png" 
                alt="Suhaib Ali" 
                style={styles.profileImage} 
              />
            </motion.div>
          </div>

          {/* Stats */}
          <div style={styles.statsGrid} className="hero-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={styles.statCard}
                whileHover={{ 
                  background: 'rgba(139,92,246,0.1)',
                  borderColor: 'rgba(139,92,246,0.3)',
                  y: -5
                }}
              >
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{mobileStyles}</style>
    </section>
  );
};

export default Hero;