"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { 
  FiArrowRight, FiDownload, FiGithub, FiLinkedin, 
  FiTwitter, FiMail, FiCode, FiZap 
} from "react-icons/fi";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Full Stack Developer',
        'React.js Expert',
        'Next.js Specialist',
        'App Developer',
        'Problem Solver',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "15+", label: "Projects" },
    { number: "5.0", label: "Rating" },
    { number: "10+", label: "Clients" },
  ];

  const styles = {
    section: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '120px 24px 80px',
      background: '#0a0a0a',
      position: 'relative',
      overflow: 'hidden',
    },
    bgGlow: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '800px',
      height: '800px',
      background: 'radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)',
      borderRadius: '50%',
      filter: 'blur(80px)',
      zIndex: 0,
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
    left: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
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
      width: 'fit-content',
    },
    title: {
      fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
      fontWeight: 'bold',
      lineHeight: 1.1,
      color: '#ffffff',
    },
    titleGradient: {
      background: 'linear-gradient(to right, #10b981, #059669, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    subtitle: {
      fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
      color: '#9ca3af',
      minHeight: '50px',
      fontFamily: 'monospace',
    },
    description: {
      fontSize: '1rem',
      color: '#6b7280',
      maxWidth: '500px',
      lineHeight: 1.8,
    },
    buttons: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
    },
    primaryBtn: {
      padding: '12px 28px',
      background: 'linear-gradient(to right, #10b981, #059669)',
      border: 'none',
      borderRadius: '9999px',
      color: 'white',
      fontWeight: '600',
      fontSize: '14px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      textDecoration: 'none',
      boxShadow: '0 4px 20px rgba(16,185,129,0.2)',
    },
    secondaryBtn: {
      padding: '12px 28px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '9999px',
      color: 'white',
      fontWeight: '500',
      fontSize: '14px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      textDecoration: 'none',
    },
    social: {
      display: 'flex',
      gap: '12px',
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.04)',
      color: '#6b7280',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    },
    right: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
    },
    profileContainer: {
      position: 'relative',
      width: '100%',
      maxWidth: '380px',
      aspectRatio: '1',
    },
    profileRing: {
      position: 'absolute',
      inset: '-20px',
      borderRadius: '50%',
      border: '1px solid rgba(16,185,129,0.08)',
      animation: 'spin 20s linear infinite',
    },
    profileRing2: {
      position: 'absolute',
      inset: '-35px',
      borderRadius: '50%',
      border: '1px solid rgba(139,92,246,0.06)',
      animation: 'spin 30s linear infinite reverse',
    },
    profileCircle: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #10b981, #059669, #8b5cf6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      boxShadow: '0 0 60px rgba(16,185,129,0.1)',
    },
    profileImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '12px',
      width: '100%',
      maxWidth: '380px',
    },
    statCard: {
      padding: '12px',
      textAlign: 'center',
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '12px',
      border: '1px solid rgba(255,255,255,0.04)',
    },
    statNumber: {
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#10b981',
    },
    statLabel: {
      fontSize: '10px',
      color: '#6b7280',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
  };

  const mobileCSS = `
    @media (max-width: 768px) {
      .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
      .hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
      .hero-profile { max-width: 280px !important; }
      .hero-left { text-align: center !important; align-items: center !important; }
      .hero-desc { max-width: 100% !important; }
      .hero-badge { margin: 0 auto !important; }
      .hero-social { justify-content: center !important; }
      .hero-buttons { justify-content: center !important; }
    }
  `;

  return (
    <section id="home" style={styles.section}>
      <div style={styles.bgGlow} />

      <div style={styles.container} className="hero-grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.left}
          className="hero-left"
        >
          <div style={styles.badge} className="hero-badge">
            ● Available for Freelance
          </div>

          <h1 style={styles.title}>
            Hi, I'm <br />
            <span style={styles.titleGradient}>Suhaib Ali</span>
          </h1>

          <div style={styles.subtitle}>
            <span ref={typedRef} />
          </div>

          <p style={styles.description} className="hero-desc">
            I build production-ready web applications and mobile apps 
            for clients across the globe. 15+ projects delivered with 5.0 rating.
          </p>

          <div style={styles.buttons} className="hero-buttons">
            <a href="#projects" style={styles.primaryBtn}>
              View Projects <FiArrowRight />
            </a>
            <a href="resume/Suhaib_Ali_Resume (1).pdf" style={styles.secondaryBtn}>
              <FiDownload /> Resume
            </a>
          </div>

          <div style={styles.social} className="hero-social">
            {[
              { icon: FiGithub, href: "https://github.com/suhaibkhokar" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/suhaib-ali-10964632a/" },
              { icon: FiMail, href: "mailto:suhaibfreelancer0@gmail.com" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#10b981';
                  e.currentTarget.style.borderColor = 'rgba(16,185,129,0.2)';
                  e.currentTarget.style.background = 'rgba(16,185,129,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#6b7280';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                }}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={styles.right}
        >
          <div style={styles.profileContainer} className="hero-profile">
            <div style={styles.profileRing} />
            <div style={styles.profileRing2} />
            <div style={styles.profileCircle}>
              <img 
                src="/assets/portfolio-image.png" 
                alt="Suhaib Ali" 
                style={styles.profileImage} 
              />
            </div>
          </div>

          <div style={styles.statsGrid} className="hero-stats">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                style={styles.statCard}
                whileHover={{ 
                  background: 'rgba(16,185,129,0.03)',
                  borderColor: 'rgba(16,185,129,0.08)',
                }}
              >
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{mobileCSS}</style>
    </section>
  );
};

export default Hero;