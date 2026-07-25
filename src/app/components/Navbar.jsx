"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { 
  FaHome, FaUser, FaProjectDiagram, FaServicestack, 
  FaStar, FaEnvelope, FaGithub, FaLinkedin, FaTwitter 
} from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#", icon: FaHome },
  { name: "About", href: "#about", icon: FaUser },
  { name: "Services", href: "#services", icon: FaServicestack },
  { name: "Projects", href: "#projects", icon: FaProjectDiagram },
  { name: "Reviews", href: "#reviews", icon: FaStar },
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
      transition: 'all 0.4s ease',
      background: scrolled 
        ? 'rgba(10, 10, 10, 0.95)' 
        : 'rgba(10, 10, 10, 0.8)',
      backdropFilter: 'blur(16px)',
      borderBottom: scrolled 
        ? '1px solid rgba(16, 185, 129, 0.1)' 
        : '1px solid rgba(255, 255, 255, 0.04)',
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
      textDecoration: 'none',
      color: 'white',
    },
    logoGradient: {
      background: 'linear-gradient(to right, #10b981, #059669, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    desktopMenu: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    },
    link: (isActive) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '8px 16px',
      borderRadius: '9999px',
      fontSize: '13px',
      fontWeight: 500,
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      color: isActive ? '#10b981' : '#9ca3af',
      background: isActive ? 'rgba(16, 185, 129, 0.08)' : 'transparent',
      border: isActive ? '1px solid rgba(16, 185, 129, 0.15)' : '1px solid transparent',
    }),
    hireBtn: {
      padding: '10px 24px',
      background: 'linear-gradient(to right, #10b981, #059669)',
      border: 'none',
      borderRadius: '9999px',
      color: 'white',
      fontWeight: '600',
      fontSize: '13px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 20px rgba(16, 185, 129, 0.2)',
      marginLeft: '8px',
    },
    mobileBtn: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '24px',
      cursor: 'pointer',
      padding: '8px',
    },
    mobileMenu: {
      background: 'rgba(10, 10, 10, 0.98)',
      backdropFilter: 'blur(12px)',
      borderTop: '1px solid rgba(16, 185, 129, 0.08)',
      overflow: 'hidden',
      display: 'none',
    },
    mobileContent: {
      display: 'flex',
      flexDirection: 'column',
      padding: '24px',
      gap: '8px',
    },
    mobileLink: (isActive) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: 500,
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      color: isActive ? '#10b981' : '#9ca3af',
      background: isActive ? 'rgba(16, 185, 129, 0.06)' : 'transparent',
    }),
    mobileHireBtn: {
      padding: '14px',
      background: 'linear-gradient(to right, #10b981, #059669)',
      border: 'none',
      borderRadius: '12px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '8px',
    },
  };

  const responsiveCSS = `
    @media (min-width: 769px) {
      .mobile-menu-btn { display: none !important; }
      .mobile-menu { display: none !important; }
    }
    @media (max-width: 768px) {
      .desktop-menu { display: none !important; }
      .mobile-menu-btn { display: block !important; }
      .mobile-menu { display: block !important; }
    }
  `;

  return (
    <>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <Link href="/" style={styles.logo}>
            <span style={styles.logoGradient}>Suhaib</span>.
          </Link>

          <div style={styles.desktopMenu} className="desktop-menu">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeLink === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  style={styles.link(isActive)}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#10b981';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#9ca3af';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <Icon size={14} />
                  {link.name}
                </Link>
              );
            })}
            <button style={styles.hireBtn}>Hire Me</button>
          </div>

          <button
            className="mobile-menu-btn"
            style={styles.mobileBtn}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>

        {isOpen && (
          <div style={styles.mobileMenu} className="mobile-menu">
            <div style={styles.mobileContent}>
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeLink === link.name;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveLink(link.name);
                    }}
                    style={styles.mobileLink(isActive)}
                  >
                    <Icon size={18} />
                    {link.name}
                  </Link>
                );
              })}
              <button style={styles.mobileHireBtn}>✨ Hire Me</button>
            </div>
          </div>
        )}
      </header>
      <style>{responsiveCSS}</style>
    </>
  );
}