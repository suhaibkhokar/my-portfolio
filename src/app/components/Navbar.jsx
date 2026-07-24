"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { 
  FaHome, FaUser, FaProjectDiagram, FaServicestack, 
  FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaStar  // ← ADDED FaStar
} from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#", icon: FaHome },
  { name: "About", href: "#about", icon: FaUser },
  { name: "Projects", href: "#projects", icon: FaProjectDiagram },
  { name: "Services", href: "#services", icon: FaServicestack },
  { name: "Reviews", href: "#reviews", icon: FaStar },  // ← Now works!
  { name: "Contact", href: "#contact", icon: FaEnvelope },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 50,
      transition: 'all 0.5s ease',
      background: scrolled 
        ? 'rgba(10, 10, 10, 0.95)' 
        : 'rgba(10, 10, 10, 0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: scrolled 
        ? '1px solid rgba(16, 185, 129, 0.15)' 
        : '1px solid rgba(255, 255, 255, 0.05)',
      boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.5)' : 'none',
    },
    nav: {
      maxWidth: '1280px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 24px',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      letterSpacing: '0.05em',
      textDecoration: 'none',
      color: 'white',
    },
    logoGradient: {
      background: 'linear-gradient(to right, #10b981, #059669, #047857)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    logoDot: {
      color: 'white',
    },
    desktopMenu: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    link: function(isActive) {
      return {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 16px',
        borderRadius: '9999px',
        fontSize: '14px',
        fontWeight: 500,
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        color: isActive ? '#10b981' : '#9ca3af',
        background: isActive ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
        border: isActive ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid transparent',
      };
    },
    icon: function(isActive) {
      return {
        fontSize: '14px',
        color: isActive ? '#10b981' : '#6b7280',
      };
    },
    hireButton: {
      marginLeft: '16px',
      padding: '12px 28px',
      background: 'linear-gradient(to right, #10b981, #059669)',
      border: 'none',
      borderRadius: '9999px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)',
      position: 'relative',
      overflow: 'hidden',
    },
    mobileButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '24px',
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
    },
    mobileMenu: {
      background: 'rgba(10, 10, 10, 0.98)',
      backdropFilter: 'blur(12px)',
      borderTop: '1px solid rgba(16, 185, 129, 0.15)',
      overflow: 'hidden',
      display: 'none',
    },
    mobileMenuContent: {
      display: 'flex',
      flexDirection: 'column',
      padding: '32px 24px',
      gap: '12px',
    },
    mobileLink: function(isActive) {
      return {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '14px 16px',
        borderRadius: '12px',
        fontSize: '18px',
        fontWeight: 500,
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        color: isActive ? '#10b981' : '#9ca3af',
        background: isActive ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
        border: isActive ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid transparent',
      };
    },
    mobileHireButton: {
      padding: '16px',
      background: 'linear-gradient(to right, #10b981, #059669)',
      border: 'none',
      borderRadius: '12px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '18px',
      cursor: 'pointer',
      marginTop: '16px',
      boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)',
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginTop: '24px',
      paddingTop: '24px',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    },
    socialLink: {
      color: '#6b7280',
      transition: 'all 0.3s ease',
    },
    progressBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '2px',
      background: 'linear-gradient(to right, #10b981, #059669, #047857)',
      transition: 'width 0.3s ease',
      width: scrolled ? '100%' : '0%',
    },
  };

  // CSS for responsive
  const responsiveStyles = `
    @media (min-width: 769px) {
      .mobile-menu-btn {
        display: none !important;
      }
      .mobile-menu {
        display: none !important;
      }
      .desktop-menu {
        display: flex !important;
      }
    }
    @media (max-width: 768px) {
      .desktop-menu {
        display: none !important;
      }
      .mobile-menu-btn {
        display: block !important;
      }
      .mobile-menu {
        display: block !important;
      }
    }
  `;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={styles.header}
      >
        <nav style={styles.nav}>
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" style={styles.logo}>
              <span style={styles.logoGradient}>Suhaib</span>
              <span style={styles.logoDot}>.</span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div style={styles.desktopMenu} className="desktop-menu">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeLink === link.name;
              return (
                <motion.div
                  key={link.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    style={styles.link(isActive)}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#10b981';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#9ca3af';
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    <Icon style={styles.icon(isActive)} />
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}

            {/* Hire Me Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={styles.hireButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(16, 185, 129, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(16, 185, 129, 0.3)';
              }}
            >
              <span style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px' }}>
                ✨ Hire Me
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            style={{ ...styles.mobileButton, display: 'block' }}
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          >
            {isOpen ? <FiX color="#10b981" size={28} /> : <FiMenu color="#10b981" size={28} />}
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={styles.mobileMenu}
              className="mobile-menu"
            >
              <div style={styles.mobileMenuContent}>
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  const isActive = activeLink === link.name;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => {
                          setIsOpen(false);
                          setActiveLink(link.name);
                        }}
                        style={styles.mobileLink(isActive)}
                      >
                        <Icon style={{ fontSize: '20px', color: isActive ? '#10b981' : '#6b7280' }} />
                        {link.name}
                        {isActive && (
                          <span style={{ marginLeft: 'auto', width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  style={styles.mobileHireButton}
                >
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    ✨ Hire Me
                  </span>
                </motion.button>

                <div style={styles.socialLinks}>
                  {[
                    { icon: FaGithub },
                    { icon: FaLinkedin },
                    { icon: FaTwitter },
                  ].map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={i}
                        href="#"
                        whileHover={{ scale: 1.2, y: -3 }}
                        style={styles.socialLink}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#10b981'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
                      >
                        <Icon size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Bar */}
        <div style={styles.progressBar} />
      </motion.header>

      <style>{responsiveStyles}</style>
    </>
  );
}