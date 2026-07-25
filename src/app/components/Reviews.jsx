"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiStar, FiUser, FiCalendar, FiHeart, FiShare2 } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {
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

  const reviews = [
    {
      name: "James Mitchell",
      role: "Product Lead",
      country: "🇺🇸 United States",
      date: "2025-12-13",
      rating: 5,
      content: "Suhaib delivered a production-ready platform with clean architecture and reliable performance. Communication was clear throughout.",
      avatar: "JM",
      color: "#10b981",
    },
    {
      name: "Aisha Khan",
      role: "Founder",
      country: "🇵🇰 Pakistan",
      date: "2025-11-19",
      rating: 5,
      content: "From UI polish to backend integration, the quality was consistently high. He understood business goals quickly.",
      avatar: "AK",
      color: "#8b5cf6",
    },
    {
      name: "Daniel Ortiz",
      role: "Engineering Manager",
      country: "🇺🇸 United States",
      date: "2025-11-13",
      rating: 5,
      content: "A dependable engineer with strong full-stack skills. He writes maintainable code and collaborates well.",
      avatar: "DO",
      color: "#f59e0b",
    },
  ];

  const stats = [
    { number: "108+", label: "Five-Star Reviews" },
    { number: "20", label: "Countries" },
    { number: "5.0", label: "Average Rating" },
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
      marginBottom: '40px',
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
    statsRow: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px',
      marginBottom: '40px',
    },
    statCard: {
      padding: '16px',
      textAlign: 'center',
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '12px',
      border: '1px solid rgba(255,255,255,0.04)',
    },
    statNumber: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#10b981',
    },
    statLabel: {
      fontSize: '13px',
      color: '#6b7280',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
      gap: '20px',
    },
    card: {
      padding: '20px',
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.04)',
      transition: 'all 0.3s ease',
    },
    avatar: (color) => ({
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      background: `linear-gradient(135deg, ${color}, ${color}dd)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      fontWeight: 'bold',
      color: 'white',
    }),
    name: {
      fontSize: '15px',
      fontWeight: '600',
      color: '#ffffff',
    },
    role: {
      fontSize: '12px',
      color: '#6b7280',
    },
    country: {
      fontSize: '11px',
      color: '#4b5563',
    },
    rating: {
      display: 'flex',
      gap: '2px',
      margin: '8px 0',
    },
    star: (filled) => ({
      color: filled ? '#f59e0b' : '#374151',
      fontSize: '14px',
    }),
    content: {
      fontSize: '0.9rem',
      color: '#d1d5db',
      lineHeight: 1.6,
      fontStyle: 'italic',
      margin: '8px 0',
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '12px',
      borderTop: '1px solid rgba(255,255,255,0.04)',
    },
    date: {
      fontSize: '11px',
      color: '#4b5563',
    },
    actions: {
      display: 'flex',
      gap: '8px',
    },
    actionBtn: {
      background: 'none',
      border: 'none',
      color: '#4b5563',
      cursor: 'pointer',
    },
  };

  const mobileCSS = `
    @media (max-width: 768px) {
      .reviews-stats { grid-template-columns: repeat(3, 1fr) !important; }
      .reviews-grid { grid-template-columns: 1fr !important; }
    }
  `;

  return (
    <section id="reviews" style={styles.section} ref={ref}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.badge}>Client Reviews</div>
          <h2 style={styles.title}>
            Trusted by <span style={styles.titleGradient}>Clients Worldwide</span>
          </h2>
        </div>

        <div style={styles.statsRow} className="reviews-stats">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              style={styles.statCard}
              whileHover={{
                background: 'rgba(16,185,129,0.02)',
                borderColor: 'rgba(16,185,129,0.08)',
              }}
            >
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div style={styles.grid} className="reviews-grid">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              style={styles.card}
              whileHover={{
                y: -4,
                borderColor: 'rgba(16,185,129,0.1)',
              }}
            >
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={styles.avatar(review.color)}>{review.avatar}</div>
                <div>
                  <div style={styles.name}>{review.name}</div>
                  <div style={styles.role}>{review.role}</div>
                  <div style={styles.country}>{review.country}</div>
                </div>
              </div>

              <div style={styles.rating}>
                {[...Array(5)].map((_, j) => (
                  <FiStar key={j} style={styles.star(j < review.rating)} />
                ))}
              </div>

              <FaQuoteLeft style={{ color: 'rgba(16,185,129,0.1)', fontSize: '20px' }} />
              <p style={styles.content}>"{review.content}"</p>

              <div style={styles.footer}>
                <span style={styles.date}>
                  <FiCalendar style={{ display: 'inline', marginRight: '4px' }} />
                  {review.date}
                </span>
                <div style={styles.actions}>
                  <button style={styles.actionBtn}><FiHeart /></button>
                  <button style={styles.actionBtn}><FiShare2 /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{mobileCSS}</style>
    </section>
  );
};

export default Reviews;