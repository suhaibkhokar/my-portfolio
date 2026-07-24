"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { 
  FiStar, FiUser, FiMapPin, FiCalendar, 
  FiMessageCircle, FiHeart, FiShare2
} from "react-icons/fi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
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

  const reviews = [
    {
      id: 1,
      name: "James Mitchell",
      role: "Product Lead · RealWealtdy",
      country: "🇺🇸 United States",
      date: "2025-12-13",
      rating: 5,
      content: "Suhaib delivered a production-ready platform with clean architecture and reliable performance. Communication was clear throughout, milestones were met on time, and the final product exceeded our launch requirements.",
      avatar: "JM",
      color: "#10b981"
    },
    {
      id: 2,
      name: "Aisha Khan",
      role: "Founder · InvestPlay",
      country: "🇵🇰 Pakistan",
      date: "2025-11-19",
      rating: 5,
      content: "From UI polish to backend integration, the quality was consistently high. He understood business goals quickly and translated them into a scalable solution we could confidently ship to users.",
      avatar: "AK",
      color: "#8b5cf6"
    },
    {
      id: 3,
      name: "Daniel Ortiz",
      role: "Engineering Manager · PlanLab Solutions",
      country: "🇺🇸 United States",
      date: "2025-11-13",
      rating: 5,
      content: "A dependable engineer with strong full-stack skills. He writes maintainable code, collaborates well in agile sprints, and proactively suggests improvements that improve delivery speed and product stability.",
      avatar: "DO",
      color: "#f59e0b"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "CTO · TechStart Inc.",
      country: "🇬🇧 United Kingdom",
      date: "2025-12-08",
      rating: 5,
      content: "Working with Suhaib was a game-changer for our project. His expertise in React and Next.js helped us launch 2 months ahead of schedule. Highly recommend!",
      avatar: "SJ",
      color: "#ec4899"
    },
    {
      id: 5,
      name: "Mohammed Al-Fahd",
      role: "CEO · Gulf Solutions",
      country: "🇦🇪 UAE",
      date: "2025-12-01",
      rating: 5,
      content: "Suhaib's AI integration skills are top-notch. He built a complete chatbot system that handles 80% of our customer queries automatically. Outstanding work!",
      avatar: "MA",
      color: "#3b82f6"
    },
    {
      id: 6,
      name: "Emma Watson",
      role: "Product Manager · HealthTech",
      country: "🇨🇦 Canada",
      date: "2025-11-25",
      rating: 5,
      content: "The mobile app Suhaib developed for us is beautiful and performs flawlessly. He's now our go-to developer for all React Native projects.",
      avatar: "EW",
      color: "#06b6d4"
    },
  ];

  const stats = [
    { number: "108+", label: "Five-star reviews" },
    { number: "20", label: "Countries Served" },
    { number: "5.0", label: "Average Rating" },
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
      background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)',
      borderRadius: '50%',
      filter: 'blur(80px)',
      zIndex: 0,
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    badge: {
      display: 'inline-block',
      padding: '6px 16px',
      background: 'rgba(16,185,129,0.1)',
      border: '1px solid rgba(16,185,129,0.2)',
      borderRadius: '9999px',
      color: '#10b981',
      fontSize: '13px',
      fontWeight: 500,
      marginBottom: '16px',
      fontFamily: 'monospace',
    },
    title: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '8px',
    },
    titleGradient: {
      background: 'linear-gradient(to right, #10b981, #059669, #047857)',
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
    // Stats Row
    statsRow: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      marginBottom: '40px',
    },
    statCard: {
      textAlign: 'center',
      padding: '20px',
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.04)',
    },
    statNumber: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#10b981',
    },
    statLabel: {
      fontSize: '14px',
      color: '#6b7280',
      marginTop: '4px',
    },
    // Reviews Grid
    reviewsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
      gap: '24px',
    },
    reviewCard: {
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '20px',
      border: '1px solid rgba(255,255,255,0.05)',
      padding: '24px',
      transition: 'all 0.4s ease',
      position: 'relative',
    },
    reviewHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      marginBottom: '12px',
    },
    avatar: (color) => ({
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      background: `linear-gradient(135deg, ${color}, ${color}dd)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      fontWeight: 'bold',
      color: 'white',
      flexShrink: 0,
    }),
    reviewInfo: {
      flex: 1,
    },
    reviewName: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#ffffff',
    },
    reviewRole: {
      fontSize: '13px',
      color: '#6b7280',
    },
    reviewCountry: {
      fontSize: '12px',
      color: '#4b5563',
      marginTop: '2px',
    },
    rating: {
      display: 'flex',
      gap: '2px',
      marginBottom: '10px',
    },
    star: (filled) => ({
      color: filled ? '#f59e0b' : '#374151',
      fontSize: '16px',
    }),
    quoteIcon: {
      color: 'rgba(16,185,129,0.1)',
      fontSize: '28px',
      marginBottom: '8px',
    },
    reviewContent: {
      fontSize: '0.95rem',
      color: '#d1d5db',
      lineHeight: 1.7,
      marginBottom: '12px',
      fontStyle: 'italic',
    },
    reviewFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '12px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    },
    reviewDate: {
      fontSize: '12px',
      color: '#4b5563',
    },
    reviewActions: {
      display: 'flex',
      gap: '12px',
    },
    actionBtn: {
      background: 'none',
      border: 'none',
      color: '#4b5563',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '16px',
    },
  };

  const mobileStyles = `
    @media (max-width: 768px) {
      .reviews-grid {
        grid-template-columns: 1fr !important;
      }
      .reviews-stats {
        grid-template-columns: repeat(3, 1fr) !important;
      }
    }
    @media (max-width: 480px) {
      .reviews-stats {
        grid-template-columns: 1fr !important;
      }
    }
  `;

  return (
    <section id="reviews" style={styles.section}>
      <div style={styles.bgGlow} />

      <div style={styles.container}>
        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={styles.header}
        >
          <div style={styles.badge}>Client Reviews</div>
          <h2 style={styles.title}>
            Trusted by <span style={styles.titleGradient}>Clients Worldwide</span>
          </h2>
          <p style={styles.subtitle}>
            Real feedback from real clients — 108+ five-star reviews and counting
          </p>
        </motion.div>

        {/* ===== STATS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={styles.statsRow}
          className="reviews-stats"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -5,
                background: 'rgba(16,185,129,0.03)',
                borderColor: 'rgba(16,185,129,0.1)'
              }}
              style={styles.statCard}
            >
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== REVIEWS GRID ===== */}
        <div style={styles.reviewsGrid} className="reviews-grid">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              ref={sectionRef}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              style={styles.reviewCard}
              whileHover={{ 
                y: -8,
                borderColor: 'rgba(16,185,129,0.15)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              }}
            >
              {/* Header */}
              <div style={styles.reviewHeader}>
                <div style={styles.avatar(review.color)}>
                  {review.avatar}
                </div>
                <div style={styles.reviewInfo}>
                  <div style={styles.reviewName}>{review.name}</div>
                  <div style={styles.reviewRole}>{review.role}</div>
                  <div style={styles.reviewCountry}>{review.country}</div>
                </div>
              </div>

              {/* Rating */}
              <div style={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} style={styles.star(i < review.rating)} />
                ))}
              </div>

              {/* Quote */}
              <FaQuoteLeft style={styles.quoteIcon} />

              {/* Content */}
              <p style={styles.reviewContent}>"{review.content}"</p>

              {/* Footer */}
              <div style={styles.reviewFooter}>
                <span style={styles.reviewDate}>
                  <FiCalendar style={{ display: 'inline', marginRight: '4px' }} />
                  {review.date}
                </span>
                <div style={styles.reviewActions}>
                  <motion.button
                    whileHover={{ color: '#10b981' }}
                    style={styles.actionBtn}
                  >
                    <FiHeart />
                  </motion.button>
                  <motion.button
                    whileHover={{ color: '#10b981' }}
                    style={styles.actionBtn}
                  >
                    <FiShare2 />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{mobileStyles}</style>
    </section>
  );
};

export default Reviews;