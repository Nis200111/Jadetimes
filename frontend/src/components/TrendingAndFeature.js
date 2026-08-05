'use client';

import React from 'react';
import Link from 'next/link';

export default function TrendingAndFeature({ featuredArticle, trendingList }) {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Left: Featured Large Overlay Card */}
        {featuredArticle && (
          <div style={styles.leftCol}>
            <div style={styles.sectionHeader}>
              <span style={styles.sectionIcon} />
              <h2 style={styles.sectionTitle}>Featured Spotlight</h2>
            </div>
            
            <Link href={`/article/${featuredArticle.id}`} style={styles.overlayCard}>
              <div 
                style={{
                  ...styles.overlayImageContainer,
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.85)), url(${featuredArticle.image})`
                }}
              >
                <div style={styles.overlayContent}>
                  <span className={`category-tag-badge ${featuredArticle.category ? `${featuredArticle.category.toLowerCase()}-tag` : 'political-tag'}`}>{featuredArticle.category}</span>
                  <h3 style={styles.overlayTitle}>{featuredArticle.title}</h3>
                  <p style={styles.overlayDesc}>{featuredArticle.description}</p>
                  <div style={styles.overlayMeta}>
                    <span>By {featuredArticle.author || "Staff Writer"}</span>
                    <span>•</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Right: What's Trending List */}
        <div style={styles.rightCol}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionIcon} />
            <h2 style={styles.sectionTitle}>What's Trending</h2>
          </div>

          <div style={styles.trendingContainer}>
            {trendingList && trendingList.slice(0, 5).map((item, idx) => (
              <Link key={item.id} href={`/article/${item.id}`} style={styles.trendingItem}>
                <div style={styles.numContainer}>
                  <span style={styles.numText}>0{idx + 1}</span>
                </div>
                <div style={styles.trendingTextCol}>
                  <span className={`category-tag-badge ${item.category ? `${item.category.toLowerCase()}-tag` : 'political-tag'}`}>{item.category}</span>
                  <h4 style={styles.trendingTitle}>{item.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '30px 5%',
    background: '#ffffff',
    width: '100%'
  },
  container: {
    maxWidth: '1350px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    gap: '40px',
    flexWrap: 'wrap'
  },
  leftCol: {
    flex: '1 1 60%',
    minWidth: '320px',
    display: 'flex',
    flexDirection: 'column'
  },
  rightCol: {
    flex: '1 1 30%',
    minWidth: '280px',
    display: 'flex',
    flexDirection: 'column'
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    borderBottom: '2px solid #1f2937',
    paddingBottom: '8px',
    marginBottom: '20px'
  },
  sectionIcon: {
    width: '8px',
    height: '8px',
    background: '#ef4444'
  },
  sectionTitle: {
    fontSize: '15px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: '#1f2937',
    margin: 0
  },
  overlayCard: {
    display: 'block',
    borderRadius: '4px',
    overflow: 'hidden',
    height: '420px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    ':hover': {
      transform: 'scale(1.01)'
    }
  },
  overlayImageContainer: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '30px'
  },
  overlayContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  overlayTag: {
    background: '#ef4444',
    color: '#ffffff',
    fontSize: '10px',
    fontWeight: '800',
    textTransform: 'uppercase',
    padding: '3px 8px',
    borderRadius: '2px',
    alignSelf: 'flex-start',
    letterSpacing: '0.5px'
  },
  overlayTitle: {
    fontFamily: "var(--font-primary)",
    fontSize: '28px',
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: '1.2',
    margin: 0,
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
  },
  overlayDesc: {
    fontSize: '13.5px',
    color: '#e4e4e7',
    lineHeight: '1.5',
    margin: 0,
    textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  overlayMeta: {
    display: 'flex',
    gap: '8px',
    color: '#a1a1aa',
    fontSize: '11px',
    fontWeight: '700'
  },
  trendingContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  trendingItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    paddingBottom: '16px',
    borderBottom: '1px solid #e4e4e7',
    transition: 'opacity 0.2s',
    ':hover': {
      opacity: '0.85'
    }
  },
  numContainer: {
    minWidth: '36px'
  },
  numText: {
    fontSize: '28px',
    fontWeight: '900',
    color: '#e4e4e7', // Outline gray/silver number
    fontFamily: "var(--font-primary)",
    lineHeight: '1'
  },
  trendingTextCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  trendingTag: {
    fontSize: '9px',
    fontWeight: '800',
    color: '#ef4444',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  trendingTitle: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#18181b',
    lineHeight: '1.4',
    margin: 0
  }
};
