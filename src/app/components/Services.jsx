"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { 
  FiCode, FiSmartphone, FiServer, FiCloud,
  FiShield, FiZap, FiCheckCircle, FiTrendingUp,
  FiArrowRight
} from "react-icons/fi";

const Services = () => {
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

  const services = [
    {
      title: "Web Development",
      desc: "Modern web applications with React.js, Next.js, and cutting-edge technologies.",
      icon: FiCode,
      color: "#10b981",
    },
    {
      title: "App Development",
      desc: "Cross-platform mobile apps for iOS and Android using React Native.",
      icon: FiSmartphone,
      color: "#ec4899",
    },
    {
      title: "Full-Stack Solutions",
      desc: "End-to-end development with Node.js, databases, and cloud infrastructure.",
      icon: FiServer,
      color: "#3b82f6",
    },
    {
      title: "Cloud & DevOps",
      desc: "Scalable cloud infrastructure and CI/CD pipelines for modern apps.",
      icon: FiCloud,
      color: "#06b6d4",
    },
    {
      title: "AI Integration",
      desc: "Intelligent AI features and automation to enhance product capabilities.",
      icon: FiZap,
      color: "#f59e0b",
    },
    {
      title: "UI/UX Design",
      desc: "Beautiful, intuitive user interfaces designed for exceptional experiences.",
      icon: FiTrendingUp,
      color: "#8b5cf6",
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
      gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
      gap: '24px',
    },
    card: {
      padding: '28px',
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.04)',
      transition: 'all 0.3s ease',
    },
    icon: (color) => ({
      fontSize: '32px',
      color: color,
      marginBottom: '12px',
    }),
    cardTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '6px',
    },
    cardDesc: {
      fontSize: '0.9rem',
      color: '#6b7280',
      lineHeight: 1.6,
    },
  };

  const mobileCSS = `
    @media (max-width: 768px) {
      .services-grid { grid-template-columns: 1fr !important; }
    }
  `;

  return (
    <section id="services" style={styles.section} ref={ref}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.badge}>What I Offer</div>
          <h2 style={styles.title}>
            My <span style={styles.titleGradient}>Services</span>
          </h2>
        </div>

        <div style={styles.grid} className="services-grid">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                style={styles.card}
                whileHover={{
                  y: -6,
                  borderColor: 'rgba(16,185,129,0.15)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
                }}
              >
                <Icon style={styles.icon(service.color)} />
                <h4 style={styles.cardTitle}>{service.title}</h4>
                <p style={styles.cardDesc}>{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{mobileCSS}</style>
    </section>
  );
};

export default Services;