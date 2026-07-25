"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiTerminal, FiCode, FiZap, FiCpu } from "react-icons/fi";

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");
  const [showContent, setShowContent] = useState(false);
  const [particles, setParticles] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const loadingMessages = [
    { at: 0, text: "🚀 Initializing System..." },
    { at: 15, text: "⚡ Loading Modules..." },
    { at: 30, text: "📦 Configuring Portfolio..." },
    { at: 45, text: "🎨 Applying Styles..." },
    { at: 60, text: "🔗 Connecting Services..." },
    { at: 75, text: "🧪 Running Tests..." },
    { at: 90, text: "✨ Almost Ready..." },
    { at: 98, text: "🚀 Launching..." },
  ];

  // Generate particles only on client side
  useEffect(() => {
    setIsMounted(true);
    const generatedParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 3,
      duration: 4 + Math.random() * 4,
      delay: Math.random() * 3,
    }));
    setParticles(generatedParticles);
  }, []);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);

    // ===== 10 SECONDS TOTAL =====
    const totalDuration = 10000; // 10 seconds
    const intervalTime = 100; // Update every 100ms
    const steps = totalDuration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      // Update loading text based on progress
      for (let i = loadingMessages.length - 1; i >= 0; i--) {
        if (newProgress >= loadingMessages[i].at) {
          setLoadingText(loadingMessages[i].text);
          break;
        }
      }

      // When progress reaches 100%
      if (newProgress >= 100) {
        clearInterval(interval);
        // Small delay then hide splash
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            onComplete();
          }, 300);
        }, 500);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  // ===== STYLES =====
  const styles = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 9999,
      background: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      transition: 'opacity 0.6s ease, transform 0.6s ease',
    },
    containerHidden: {
      opacity: 0,
      transform: 'scale(1.05)',
      pointerEvents: 'none',
    },
    bgGradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `
        radial-gradient(ellipse at 20% 50%, rgba(16,185,129,0.15) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 50%, rgba(139,92,246,0.12) 0%, transparent 60%),
        radial-gradient(ellipse at 50% 100%, rgba(16,185,129,0.08) 0%, transparent 50%)
      `,
      zIndex: 0,
    },
    gridOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `
        linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
      zIndex: 0,
    },
    glowOrb1: {
      position: 'absolute',
      top: '-10%',
      right: '-5%',
      width: '500px',
      height: '500px',
      background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
      borderRadius: '50%',
      filter: 'blur(60px)',
      zIndex: 0,
    },
    glowOrb2: {
      position: 'absolute',
      bottom: '-10%',
      left: '-5%',
      width: '400px',
      height: '400px',
      background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
      borderRadius: '50%',
      filter: 'blur(60px)',
      zIndex: 0,
    },
    glowOrb3: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '600px',
      height: '600px',
      background: 'radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)',
      borderRadius: '50%',
      filter: 'blur(80px)',
      zIndex: 0,
    },
    content: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
    },
    photoContainer: {
      position: 'relative',
      width: '140px',
      height: '140px',
      borderRadius: '50%',
      padding: '4px',
      background: 'linear-gradient(135deg, #10b981, #059669, #8b5cf6)',
      backgroundSize: '300% 300%',
      animation: 'gradientSpin 4s ease infinite',
      boxShadow: '0 0 60px rgba(16,185,129,0.2)',
    },
    photoInner: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      overflow: 'hidden',
      background: '#0a0a0a',
      border: '2px solid rgba(10,10,10,1)',
    },
    photo: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    photoRing: {
      position: 'absolute',
      inset: '-8px',
      borderRadius: '50%',
      border: '1px solid rgba(16,185,129,0.15)',
      animation: 'ringPulse 2s ease-out infinite',
    },
    photoRing2: {
      position: 'absolute',
      inset: '-16px',
      borderRadius: '50%',
      border: '1px solid rgba(139,92,246,0.08)',
      animation: 'ringPulse 2.5s ease-out infinite 0.5s',
    },
    logo: {
      fontSize: '48px',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #10b981, #059669, #047857, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      backgroundSize: '300% 300%',
      animation: 'gradientMove 3s ease infinite',
      letterSpacing: '2px',
    },
    logoSub: {
      fontSize: '14px',
      color: '#6b7280',
      fontWeight: 400,
      letterSpacing: '10px',
      textTransform: 'uppercase',
      fontFamily: 'monospace',
      marginTop: '-4px',
    },
    terminalIcons: {
      display: 'flex',
      gap: '20px',
      marginTop: '4px',
    },
    terminalIcon: {
      fontSize: '22px',
      color: '#10b981',
      opacity: 0.6,
      animation: 'floatIcon 3s ease-in-out infinite',
    },
    statusTag: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '4px 16px',
      background: 'rgba(16,185,129,0.06)',
      border: '1px solid rgba(16,185,129,0.08)',
      borderRadius: '9999px',
      fontSize: '11px',
      color: '#10b981',
      fontFamily: 'monospace',
      marginTop: '4px',
    },
    statusDot: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: '#10b981',
      animation: 'pulse 1.5s ease-in-out infinite',
    },
    progressContainer: {
      width: '100%',
      maxWidth: '380px',
      marginTop: '8px',
    },
    progressBarTrack: {
      width: '100%',
      height: '2px',
      background: 'rgba(255,255,255,0.04)',
      borderRadius: '9999px',
      overflow: 'hidden',
      position: 'relative',
    },
    progressBar: {
      height: '100%',
      background: 'linear-gradient(to right, #10b981, #8b5cf6)',
      borderRadius: '9999px',
      transition: 'width 0.3s ease',
      boxShadow: '0 0 20px rgba(16,185,129,0.2)',
    },
    progressText: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '10px',
      fontSize: '11px',
      color: '#4b5563',
      fontFamily: 'monospace',
    },
    progressPercent: {
      color: '#10b981',
      fontWeight: 600,
    },
    loadingMessage: {
      fontSize: '12px',
      color: '#6b7280',
      fontFamily: 'monospace',
      marginTop: '6px',
      minHeight: '20px',
      textAlign: 'center',
    },
    particle: (x, y, size, duration, delay) => ({
      position: 'absolute',
      left: x + '%',
      top: y + '%',
      width: size + 'px',
      height: size + 'px',
      background: 'rgba(16,185,129,0.06)',
      borderRadius: '50%',
      zIndex: 0,
      animation: 'floatParticle ' + duration + 's ease-in-out infinite ' + delay + 's',
    }),
    footer: {
      position: 'absolute',
      bottom: '32px',
      display: 'flex',
      gap: '24px',
      fontSize: '10px',
      color: '#374151',
      fontFamily: 'monospace',
      zIndex: 1,
      letterSpacing: '1px',
    },
    footerDot: {
      color: '#10b981',
    },
    timer: {
      fontSize: '12px',
      color: '#374151',
      fontFamily: 'monospace',
      marginTop: '4px',
    },
  };

  // ===== ANIMATION VARIANTS =====
  const photoVariants = {
    hidden: { scale: 0.6, opacity: 0, rotate: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.6 }
    }
  };

  const progressVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.6, duration: 0.5 }
    }
  };

  // Don't render on server
  if (!isMounted) {
    return (
      <div style={styles.container}>
        <div style={styles.bgGradient} />
        <div style={styles.gridOverlay} />
        <div style={styles.glowOrb1} />
        <div style={styles.glowOrb2} />
        <div style={styles.glowOrb3} />
        <div style={styles.content}>
          <div style={styles.photoContainer}>
            <div style={styles.photoInner}>
              <img 
                src="/assets/portfolio-image.png" 
                alt="Suhaib Ali" 
                style={styles.photo} 
              />
            </div>
          </div>
          <div style={styles.logo}>Suhaib Ali</div>
          <div style={styles.logoSub}>Full Stack Developer</div>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            ...styles.container,
            ...(!isVisible ? styles.containerHidden : {}),
          }}
        >
          {/* ===== BACKGROUND ===== */}
          <div style={styles.bgGradient} />
          <div style={styles.gridOverlay} />
          <div style={styles.glowOrb1} />
          <div style={styles.glowOrb2} />
          <div style={styles.glowOrb3} />

          {/* ===== PARTICLES ===== */}
          {particles.map((p) => (
            <div
              key={p.id}
              style={styles.particle(p.x, p.y, p.size, p.duration, p.delay)}
            />
          ))}

          {/* ===== MAIN CONTENT ===== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            style={styles.content}
          >
            {/* ===== PROFILE PHOTO ===== */}
            <motion.div
              variants={photoVariants}
              initial="hidden"
              animate={showContent ? "visible" : "hidden"}
              style={styles.photoContainer}
            >
              <div style={styles.photoRing} />
              <div style={styles.photoRing2} />

              <div style={styles.photoInner}>
                <img 
                  src="/assets/portfolio-image.png" 
                  alt="Suhaib Ali" 
                  style={styles.photo} 
                />
              </div>
            </motion.div>

            {/* ===== TEXT ===== */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate={showContent ? "visible" : "hidden"}
              style={{ textAlign: 'center' }}
            >
              <div style={styles.logo}>Suhaib Ali</div>
              <div style={styles.logoSub}>Full Stack Developer</div>
            </motion.div>

            {/* ===== TERMINAL ICONS ===== */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate={showContent ? "visible" : "hidden"}
              style={styles.terminalIcons}
            >
              <FiTerminal style={{ ...styles.terminalIcon, animationDelay: '0s' }} />
              <FiCode style={{ ...styles.terminalIcon, animationDelay: '0.5s' }} />
              <FiZap style={{ ...styles.terminalIcon, animationDelay: '1s' }} />
              <FiCpu style={{ ...styles.terminalIcon, animationDelay: '1.5s' }} />
            </motion.div>

            {/* ===== STATUS TAG ===== */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate={showContent ? "visible" : "hidden"}
              style={styles.statusTag}
            >
              <span style={styles.statusDot} />
              <span>SYSTEM ONLINE</span>
              <span style={{ color: '#374151' }}>·</span>
              <span style={{ color: '#374151' }}>v2.0.0</span>
            </motion.div>

            {/* ===== PROGRESS ===== */}
            <motion.div
              variants={progressVariants}
              initial="hidden"
              animate={showContent ? "visible" : "hidden"}
              style={styles.progressContainer}
            >
              <div style={styles.progressBarTrack}>
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: progress + '%' }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={styles.progressBar}
                />
              </div>
              <div style={styles.progressText}>
                <span>Loading...</span>
                <span style={styles.progressPercent}>{Math.round(progress)}%</span>
              </div>
              <div style={styles.loadingMessage}>
                {loadingText}
              </div>
            </motion.div>
          </motion.div>

          {/* ===== FOOTER ===== */}
          <div style={styles.footer}>
            <span>© 2026 Suhaib Ali</span>
            <span style={styles.footerDot}>●</span>
            <span>PORTFOLIO</span>
            <span style={styles.footerDot}>●</span>
            <span style={{ color: '#10b981' }}>READY</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;