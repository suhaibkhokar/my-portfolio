"use client";

import { FiMessageCircle, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Contact = () => {
  const phoneNumber = "923014685576";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.user_name.value;
    const message = form.message.value;
    const encodedMessage = encodeURIComponent(`Hello! I'm ${name}. ${message}`);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    form.reset();
  };

  const styles = {
    section: {
      padding: '80px 24px',
      background: '#0a0a0a',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      width: '100%',
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#ffffff',
    },
    titleGradient: {
      background: 'linear-gradient(to right, #25D366, #128C7E)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    subtitle: {
      color: '#6b7280',
      fontSize: '1.1rem',
      maxWidth: '600px',
      margin: '0 auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
    },
    infoCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '20px',
      background: 'rgba(255,255,255,0.03)',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.06)',
      marginBottom: '16px',
      textDecoration: 'none',
      color: 'white',
      transition: 'all 0.3s ease',
    },
    infoIcon: (color) => ({
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '12px',
      background: `${color}20`,
      color: color,
      fontSize: '22px',
    }),
    infoTitle: {
      fontSize: '13px',
      color: '#6b7280',
    },
    infoValue: {
      fontSize: '16px',
      color: '#ffffff',
      fontWeight: 500,
    },
    formContainer: {
      background: 'rgba(255,255,255,0.03)',
      borderRadius: '20px',
      border: '1px solid rgba(255,255,255,0.06)',
      padding: '30px',
    },
    formTitle: {
      fontSize: '1.3rem',
      color: '#ffffff',
      marginBottom: '8px',
    },
    formSubtitle: {
      color: '#6b7280',
      marginBottom: '24px',
    },
    formInput: {
      width: '100%',
      padding: '12px 16px',
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '12px',
      color: '#ffffff',
      fontSize: '15px',
      marginBottom: '16px',
      outline: 'none',
    },
    formTextarea: {
      width: '100%',
      padding: '12px 16px',
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '12px',
      color: '#ffffff',
      fontSize: '15px',
      minHeight: '120px',
      resize: 'vertical',
      marginBottom: '16px',
      outline: 'none',
      fontFamily: 'inherit',
    },
    submitBtn: {
      padding: '14px 32px',
      background: 'linear-gradient(to right, #25D366, #128C7E)',
      border: 'none',
      borderRadius: '9999px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '16px',
      cursor: 'pointer',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
    whatsappButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      padding: '16px',
      background: 'rgba(37,211,102,0.1)',
      border: '1px solid rgba(37,211,102,0.3)',
      borderRadius: '12px',
      color: '#25D366',
      textDecoration: 'none',
      marginTop: '16px',
      fontWeight: 500,
    },
    socialGrid: {
      display: 'flex',
      gap: '12px',
      marginTop: '16px',
    },
    socialLink: {
      width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '12px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.06)',
      color: '#6b7280',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
    },
  };

  const mobileStyles = `
    @media (max-width: 768px) {
      .contact-grid {
        grid-template-columns: 1fr !important;
      }
    }
  `;

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        {/* ===== HEADER ===== */}
        <div style={styles.header}>
          <h2 style={styles.title}>
            Let's <span style={styles.titleGradient}>Connect</span>
          </h2>
          <p style={styles.subtitle}>
            Have a project in mind? Send me a message on WhatsApp!
          </p>
        </div>

        {/* ===== CONTENT ===== */}
        <div style={styles.grid} className="contact-grid">
          {/* ===== LEFT ===== */}
          <div>
            {/* WhatsApp */}
            <a href={whatsappLink} target="_blank" rel="noopener" style={styles.infoCard}>
              <div style={styles.infoIcon("#25D366")}>
                <FiMessageCircle size={22} />
              </div>
              <div>
                <div style={styles.infoTitle}>WhatsApp</div>
                <div style={styles.infoValue}>+92 301 4685576</div>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:923014685576" style={styles.infoCard}>
              <div style={styles.infoIcon("#ec4899")}>
                <FiPhone size={22} />
              </div>
              <div>
                <div style={styles.infoTitle}>Call</div>
                <div style={styles.infoValue}>+92 301 4685576</div>
              </div>
            </a>

            {/* Location */}
            <div style={styles.infoCard}>
              <div style={styles.infoIcon("#3b82f6")}>
                <FiMapPin size={22} />
              </div>
              <div>
                <div style={styles.infoTitle}>Location</div>
                <div style={styles.infoValue}>Lahore, Pakistan</div>
              </div>
            </div>

            {/* WhatsApp Chat Button */}
            <a href={whatsappLink} target="_blank" rel="noopener" style={styles.whatsappButton}>
              <FiMessageCircle size={24} />
              <span>Chat Now on WhatsApp</span>
            </a>

            {/* Social Links */}
            <div style={styles.socialGrid}>
              <a href="https://github.com" target="_blank" rel="noopener" style={styles.socialLink}>
                <FiGithub size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" style={styles.socialLink}>
                <FiLinkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener" style={styles.socialLink}>
                <FiTwitter size={20} />
              </a>
            </div>
          </div>

          {/* ===== RIGHT - Form ===== */}
          <div style={styles.formContainer}>
            <h3 style={styles.formTitle}>Send via WhatsApp</h3>
            <p style={styles.formSubtitle}>Fill in the form and it will open WhatsApp with your message</p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                style={styles.formInput}
                required
              />
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                style={styles.formTextarea}
                required
              />
              <button type="submit" style={styles.submitBtn}>
                Send on WhatsApp <FiMessageCircle size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{mobileStyles}</style>
    </section>
  );
};

export default Contact;