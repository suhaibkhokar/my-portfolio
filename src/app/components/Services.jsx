"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { 
  FiCode, FiSmartphone, FiServer, FiCloud,
  FiShield, FiZap, FiTrendingUp, FiUsers,
  FiArrowRight, FiCheckCircle
} from "react-icons/fi";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiFirebase } from "react-icons/si";

const Services = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Building modern, responsive web applications using React.js, Next.js, and cutting-edge technologies.",
      icon: FiCode,
      color: "#a78bfa",
      features: [
        "Custom React.js & Next.js applications",
        "Responsive and mobile-first design",
        "Performance optimization",
        "SEO-friendly architecture"
      ]
    },
    {
      id: 2,
      title: "App Development",
      description: "Cross-platform mobile applications for iOS and Android using React Native and Expo.",
      icon: FiSmartphone,
      color: "#ec4899",
      features: [
        "React Native cross-platform apps",
        "Native-like performance",
        "App Store & Play Store deployment",
        "Push notifications and real-time features"
      ]
    },
    {
      id: 3,
      title: "Full-Stack Solutions",
      description: "End-to-end development with Node.js, databases, and cloud infrastructure.",
      icon: FiServer,
      color: "#3b82f6",
      features: [
        "Node.js backend development",
        "RESTful APIs and GraphQL",
        "Database design (MongoDB, PostgreSQL)",
        "Authentication and authorization"
      ]
    },
    {
      id: 4,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and CI/CD pipelines for modern applications.",
      icon: FiCloud,
      color: "#06b6d4",
      features: [
        "AWS, Google Cloud, Azure deployment",
        "Docker containerization",
        "CI/CD pipeline setup",
        "Cloud cost optimization"
      ]
    },
    {
      id: 5,
      title: "AI Integration",
      description: "Intelligent AI features and automation to enhance product capabilities.",
      icon: FiZap,
      color: "#f59e0b",
      features: [
        "AI chatbot integration",
        "OpenAI API implementation",
        "Automation workflows",
        "Smart data processing"
      ]
    },
    {
      id: 6,
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces designed for exceptional user experiences.",
      icon: FiTrendingUp,
      color: "#10b981",
      features: [
        "User-centered design approach",
        "Wireframing and prototyping",
        "Design systems and components",
        "Usability testing"
      ]
    }
  ];

  const process = [
    { step: "01", title: "Discovery", description: "Understanding your vision, goals, and requirements" },
    { step: "02", title: "Planning", description: "Strategic planning and technical architecture design" },
    { step: "03", title: "Development", description: "Agile development with regular progress updates" },
    { step: "04", title: "Deployment", description: "Launch, testing, and ongoing support" }
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
    header: {
      textAlign: 'center',
      marginBottom: '50px',
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
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
      gap: '30px',
      marginBottom: '60px',
    },
    serviceCard: {
      background: 'rgba(255,255,255,0.03)',
      borderRadius: '20px',
      border: '1px solid rgba(255,255,255,0.06)',
      padding: '30px',
      transition: 'all 0.4s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    serviceIcon: {
      fontSize: '36px',
      marginBottom: '16px',
      display: 'block',
    },
    serviceTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '8px',
    },
    serviceDescription: {
      fontSize: '0.9rem',
      color: '#9ca3af',
      lineHeight: 1.6,
      marginBottom: '16px',
    },
    serviceFeatures: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
    },
    serviceFeature: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px',
      color: '#6b7280',
    },
    serviceFeatureIcon: {
      color: '#a78bfa',
      fontSize: '12px',
    },
    // Process Section
    processSection: {
      marginTop: '60px',
    },
    processHeader: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    processTitle: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '8px',
    },
    processSubtitle: {
      fontSize: '1rem',
      color: '#6b7280',
    },
    processGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '24px',
    },
    processCard: {
      textAlign: 'center',
      padding: '24px',
      background: 'rgba(255,255,255,0.03)',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.06)',
      transition: 'all 0.3s ease',
    },
    processStep: {
      fontSize: '2rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #a78bfa, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '8px',
    },
    processCardTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '4px',
    },
    processCardDesc: {
      fontSize: '0.85rem',
      color: '#6b7280',
    },
  };

  const mobileStyles = `
    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr !important;
      }
      .process-grid {
        grid-template-columns: 1fr 1fr !important;
      }
    }
    @media (max-width: 480px) {
      .process-grid {
        grid-template-columns: 1fr !important;
      }
    }
  `;

  return (
    <section id="services" style={styles.section}>
      <div style={styles.bgGlow} />

      <div style={styles.container}>
        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={styles.header}
        >
          <div style={styles.badge}>What I Offer</div>
          <h2 style={styles.title}>
            My <span style={styles.titleGradient}>Services</span>
          </h2>
          <p style={styles.subtitle}>
            Full-stack development, AI integration, and automation solutions designed to help businesses scale with confidence.
          </p>
        </motion.div>

        {/* ===== SERVICES GRID ===== */}
        <div style={styles.servicesGrid} className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                ref={sectionRef}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                style={styles.serviceCard}
                whileHover={{ 
                  y: -10,
                  borderColor: 'rgba(139,92,246,0.3)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                }}
              >
                <Icon style={{ ...styles.serviceIcon, color: service.color }} />
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDescription}>{service.description}</p>
                <div style={styles.serviceFeatures}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} style={styles.serviceFeature}>
                      <FiCheckCircle style={styles.serviceFeatureIcon} />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ===== PROCESS SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={styles.processSection}
        >
          <div style={styles.processHeader}>
            <h3 style={styles.processTitle}>How I Work</h3>
            <p style={styles.processSubtitle}>A streamlined process to bring your vision to life</p>
          </div>

          <div style={styles.processGrid} className="process-grid">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={styles.processCard}
                whileHover={{ 
                  y: -5,
                  background: 'rgba(139,92,246,0.05)',
                  borderColor: 'rgba(139,92,246,0.2)'
                }}
              >
                <div style={styles.processStep}>{item.step}</div>
                <h4 style={styles.processCardTitle}>{item.title}</h4>
                <p style={styles.processCardDesc}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{mobileStyles}</style>
    </section>
  );
};

export default Services;