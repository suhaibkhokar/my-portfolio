"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { 
  FiArrowRight, FiDownload, FiGithub, FiLinkedin, 
  FiTwitter, FiMail, FiTerminal, FiMapPin, FiCode,
  FiServer, FiDatabase, FiZap
} from "react-icons/fi";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Full Stack Developer & AI Engineer',
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
    { number: "195+", label: "PROJECTS" },
    { number: "5.0", label: "RATING" },
    { number: "100+", label: "CLIENTS" },
  ];

  const pipeline = [
    { icon: FiCode, name: "Next.js", desc: "Frontend + Dashboard" },
    { icon: FiServer, name: "FastAPI", desc: "API + Scraper workers" },
    { icon: FiDatabase, name: "PostgreSQL + Redis", desc: "Storage + Queues" },
    { icon: FiZap, name: "Telegram / Email", desc: "Instant alerts" },
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
    // Background Glow
    bgGlow: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '800px',
      height: '800px',
      background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)',
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
    // Left Content
    leftContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    // System Header
    systemHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '6px 14px',
      background: 'rgba(16,185,129,0.06)',
      border: '1px solid rgba(16,185,129,0.1)',
      borderRadius: '6px',
      fontSize: '12px',
      color: '#10b981',
      fontFamily: 'monospace',
      width: 'fit-content',
    },
    dot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      display: 'inline-block',
    },
    greeting: {
      fontSize: '1.1rem',
      color: '#6b7280',
      marginBottom: '2px',
    },
    title: {
      fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
      fontWeight: 'bold',
      lineHeight: 1.1,
      color: '#ffffff',
    },
    titleGradient: {
      background: 'linear-gradient(to right, #10b981, #059669, #047857)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    cursor: {
      display: 'inline-block',
      width: '3px',
      height: 'clamp(2rem, 4vw, 3rem)',
      background: '#10b981',
      marginLeft: '4px',
      animation: 'blink 1s step-end infinite',
    },
    subtitle: {
      fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
      color: '#9ca3af',
      minHeight: '50px',
      fontWeight: 500,
      fontFamily: 'monospace',
    },
    command: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#10b981',
      fontSize: '14px',
      fontFamily: 'monospace',
      background: 'rgba(16,185,129,0.05)',
      padding: '4px 12px',
      borderRadius: '4px',
      width: 'fit-content',
    },
    description: {
      fontSize: '1rem',
      color: '#6b7280',
      maxWidth: '520px',
      lineHeight: 1.8,
    },
    buttons: {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap',
      marginTop: '4px',
    },
    primaryBtn: {
      padding: '12px 28px',
      background: 'transparent',
      border: '1px solid rgba(16,185,129,0.3)',
      borderRadius: '9999px',
      color: '#10b981',
      fontWeight: 500,
      fontSize: '14px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
    },
    secondaryBtn: {
      padding: '12px 28px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '9999px',
      color: 'white',
      fontWeight: 500,
      fontSize: '14px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
    },
    socialLinks: {
      display: 'flex',
      gap: '12px',
      marginTop: '4px',
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
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    // Right Content - Pipeline Only
    rightContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
    },
    // Stats Grid
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px',
      width: '100%',
    },
    statCard: {
      padding: '16px',
      textAlign: 'center',
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '12px',
      border: '1px solid rgba(255,255,255,0.04)',
      transition: 'all 0.3s ease',
    },
    statNumber: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#10b981',
      letterSpacing: '1px',
    },
    statLabel: {
      fontSize: '11px',
      color: '#6b7280',
      marginTop: '4px',
      letterSpacing: '1px',
      fontWeight: 500,
    },
    // Pipeline Architecture
    pipelineSection: {
      marginTop: '8px',
    },
    pipelineTitle: {
      fontSize: '12px',
      color: '#6b7280',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '16px',
      fontFamily: 'monospace',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    pipelineTitleLine: {
      flex: 1,
      height: '1px',
      background: 'rgba(255,255,255,0.05)',
    },
    pipelineGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px',
    },
    pipelineItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      padding: '16px 20px',
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.04)',
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    pipelineIcon: {
      fontSize: '20px',
      color: '#10b981',
      flexShrink: 0,
    },
    pipelineInfo: {
      display: 'flex',
      flexDirection: 'column',
    },
    pipelineName: {
      fontSize: '14px',
      color: '#ffffff',
      fontWeight: 600,
    },
    pipelineDesc: {
      fontSize: '12px',
      color: '#6b7280',
    },
  };

  const mobileStyles = `
    @media (max-width: 768px) {
      .hero-container {
        grid-template-columns: 1fr !important;
        gap: 40px !important;
      }
      .hero-stats {
        grid-template-columns: repeat(3, 1fr) !important;
      }
      .hero-pipeline {
        grid-template-columns: 1fr !important;
      }
      .hero-left {
        text-align: center !important;
        align-items: center !important;
      }
      .hero-description {
        max-width: 100% !important;
        text-align: center !important;
      }
      .hero-buttons {
        justify-content: center !important;
      }
      .hero-social {
        justify-content: center !important;
      }
      .hero-status {
        margin: 0 auto !important;
      }
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `;

  return (
    <section id="home" style={styles.section}>
      {/* Background Glow */}
      <div style={styles.bgGlow} />

      <div style={styles.container} className="hero-container">
        {/* ===== LEFT SIDE ===== */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.leftContent}
          className="hero-left"
        >
          {/* System Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={styles.systemHeader}
            className="hero-status"
          >
            <span style={{ ...styles.dot, background: '#10b981' }} />
            <span style={{ ...styles.dot, background: '#f59e0b' }} />
            <span style={{ ...styles.dot, background: '#ef4444' }} />
            <span style={{ marginLeft: '8px' }}>PORTFOLIO.SYS · v2026</span>
            <span style={{ marginLeft: '8px', color: '#6b7280' }}>33.6844°N · 73.0479°E</span>
          </motion.div>

          <div>
            <p style={styles.greeting}>👋 Hi, I'm</p>
            <h1 style={styles.title}>
              <span style={styles.titleGradient}>Suhaib Ali</span>
              <span style={styles.cursor} />
            </h1>
          </div>

          <div style={styles.subtitle}>
            <span ref={typedRef}></span>
          </div>

          {/* Command Line */}
          <div style={styles.command}>
            <FiTerminal size={14} />
            <span>$ npm run build</span>
          </div>

          <p style={styles.description} className="hero-description">
            I build SaaS platforms, web applications, and mobile apps that hold up in production, 
            for clients across the globe. 15+ projects delivered with a 5.0 rating.
          </p>

          {/* Buttons */}
          <div style={styles.buttons} className="hero-buttons">
            <motion.a
              href="#projects"
              whileHover={{ 
                scale: 1.05,
                background: 'rgba(16,185,129,0.1)',
                borderColor: '#10b981'
              }}
              whileTap={{ scale: 0.95 }}
              style={styles.primaryBtn}
            >
              View Projects <FiArrowRight />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ 
                scale: 1.05,
                background: 'rgba(255,255,255,0.05)',
                borderColor: 'rgba(255,255,255,0.1)'
              }}
              whileTap={{ scale: 0.95 }}
              style={styles.secondaryBtn}
            >
              EXPLORE STACK
            </motion.a>
          </div>

          {/* Social Links */}
          <div style={styles.socialLinks} className="hero-social">
            {[
              { icon: FiGithub, href: "https://github.com" },
              { icon: FiLinkedin, href: "https://linkedin.com" },
              { icon: FiMail, href: "mailto:suhaib@email.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#10b981', borderColor: 'rgba(16,185,129,0.2)' }}
                style={styles.socialIcon}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ===== RIGHT SIDE - Pipeline Only ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={styles.rightContent}
        >
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
                  background: 'rgba(16,185,129,0.03)',
                  borderColor: 'rgba(16,185,129,0.1)',
                  y: -3
                }}
              >
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Pipeline Architecture */}
          <div style={styles.pipelineSection}>
            <div style={styles.pipelineTitle}>
              pipeline.architecture
              <span style={styles.pipelineTitleLine} />
            </div>
            <div style={styles.pipelineGrid} className="hero-pipeline">
              {pipeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    style={styles.pipelineItem}
                    whileHover={{ 
                      background: 'rgba(16,185,129,0.05)',
                      borderColor: 'rgba(16,185,129,0.15)',
                      y: -3,
                      boxShadow: '0 8px 30px rgba(0,0,0,0.2)'
                    }}
                  >
                    <Icon style={styles.pipelineIcon} />
                    <div style={styles.pipelineInfo}>
                      <span style={styles.pipelineName}>{item.name}</span>
                      <span style={styles.pipelineDesc}>{item.desc}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{mobileStyles}</style>
    </section>
  );
};

export default Hero;