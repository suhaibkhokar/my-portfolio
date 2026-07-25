"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Contact = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const [formStatus, setFormStatus] = useState(null);

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

  const phoneNumber = "923014685576";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.user_name.value;
    const message = form.message.value;
    const encoded = encodeURIComponent(`Hello! I'm ${name}. ${message}`);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
    setFormStatus("success");
    form.reset();
    setTimeout(() => setFormStatus(null), 5000);
  };

  const contactInfo = [
    { icon: FiMail, title: "Email", info: "suhaib@email.com", link: "mailto:suhaib@email.com", color: "#10b981" },
    { icon: FiPhone, title: "WhatsApp", info: "+92 301 4685576", link: whatsappLink, color: "#25D366" },
    { icon: FiMapPin, title: "Location", info: "Lahore, Pakistan", link: "#", color: "#3b82f6" },
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
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
    },
    left: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    infoCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      padding: '16px 20px',
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '12px',
      border: '1px solid rgba(255,255,255,0.04)',
      textDecoration: 'none',
    },
    infoIcon: (color) => ({
      width: '44px',
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '12px',
      background: color + '15',
      color: color,
      fontSize: '20px',
    }),
    infoTitle: {
      fontSize: '12px',
      color: '#6b7280',
    },
    infoValue: {
      fontSize: '15px',
      color: '#ffffff',
      fontWeight: 500,
    },
    socialRow: {
      display: 'flex',
      gap: '12px',
      marginTop: '8px',
    },
    socialLink: {
      width: '44px',
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '12px',
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.04)',
      color: '#6b7280',
    },
    formContainer: {
      padding: '28px',
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.04)',
    },
    formTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#ffffff',
    },
    formSub: {
      fontSize: '0.9rem',
      color: '#6b7280',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
    },
    input: {
      padding: '10px 14px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '10px',
      color: '#ffffff',
      fontSize: '14px',
      outline: 'none',
    },
    textarea: {
      padding: '10px 14px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '10px',
      color: '#ffffff',
      fontSize: '14px',
      minHeight: '100px',
      resize: 'vertical',
      outline: 'none',
      fontFamily: 'inherit',
    },
    submitBtn: {
      padding: '12px',
      background: 'linear-gradient(to right, #10b981, #059669)',
      border: 'none',
      borderRadius: '9999px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '15px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
    success: {
      padding: '12px',
      background: 'rgba(16,185,129,0.08)',
      border: '1px solid rgba(16,185,129,0.15)',
      borderRadius: '10px',
      color: '#10b981',
      textAlign: 'center',
    },
  };

  const mobileCSS = `
    @media (max-width: 768px) {
      .contact-grid { grid-template-columns: 1fr !important; }
    }
  `;

  return (
    <section id="contact" style={styles.section} ref={ref}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.badge}>Get In Touch</div>
          <h2 style={styles.title}>
            Let's <span style={styles.titleGradient}>Connect</span>
          </h2>
        </div>

        <div style={styles.grid} className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={styles.left}
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <a key={i} href={item.link} target={item.title === "WhatsApp" ? "_blank" : ""} rel="noopener" style={styles.infoCard}>
                  <div style={styles.infoIcon(item.color)}><Icon /></div>
                  <div>
                    <div style={styles.infoTitle}>{item.title}</div>
                    <div style={styles.infoValue}>{item.info}</div>
                  </div>
                </a>
              );
            })}

            <div style={styles.socialRow}>
              {[
                { icon: FiGithub, href: "https://github.com", color: "#ffffff" },
                { icon: FiLinkedin, href: "https://www.linkedin.com/in/suhaib-ali-10964632a/", color: "#0A66C2" },
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener" style={styles.socialLink}>
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={styles.formContainer}
          >
            <h3 style={styles.formTitle}>Send a Message</h3>
            <p style={styles.formSub}>I'll respond within 24 hours</p>

            <form onSubmit={handleSubmit} style={styles.form}>
              <input type="text" name="user_name" placeholder="Your Name" style={styles.input} required />
              <textarea name="message" placeholder="Tell me about your project..." style={styles.textarea} required />
              {formStatus === "success" && (
                <div style={styles.success}>✅ Message sent! I'll get back to you soon.</div>
              )}
              <button type="submit" style={styles.submitBtn}>
                Send on WhatsApp <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <style>{mobileCSS}</style>
    </section>
  );
};

export default Contact;