'use client';

import React from 'react';
import Link from 'next/link';

export default function PulseSection({ article }) {
  if (!article) return null;

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Section Header */}
        <div style={styles.sectionHeader}>
          <span style={styles.sectionIcon} />
          <h2 style={styles.sectionTitle}>Exclusive Pulse</h2>
        </div>

        {/* Featured Dark Cover Card */}
        <Link href={`/article/${article.id}`} style={styles.darkCard}>
          <div style={styles.cardSplit}>
            {/* Left side: content */}
            <div style={styles.contentCol}>
              <span className="category-tag-badge exclusive-tag">EXCLUSIVE ANALYSIS</span>
              <h3 style={styles.titleText}>{article.title}</h3>
              <p style={styles.descriptionText}>{article.description}</p>
              
              <div style={styles.metaRow}>
                <span>By JadeTimes Investigative Unit</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
            
            {/* Right side: image */}
            <div 
              style={{
                ...styles.imageCol,
                backgroundImage: `url(${article.image})`
              }}
            />
          </div>
        </Link>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '40px 5%',
    background: '#09090b', // Rich dark theme
    color: '#ffffff',
    width: '100%',
    borderTop: '1px solid #18181b',
    borderBottom: '1px solid #18181b'
  },
  container: {
    maxWidth: '1350px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    borderBottom: '2px solid #27272a',
    paddingBottom: '8px',
    marginBottom: '10px'
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
    color: '#ffffff',
    margin: 0
  },
  darkCard: {
    display: 'block',
    background: '#18181b', // Dark zinc card fill
    borderRadius: '4px',
    overflow: 'hidden',
    border: '1px solid #27272a',
    transition: 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    ':hover': {
      transform: 'translateY(-2px)'
    }
  },
  cardSplit: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    minHeight: '300px'
  },
  contentCol: {
    flex: '1 1 50%',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '16px',
    minWidth: '280px'
  },
  exclusiveBadge: {
    color: '#ef4444',
    fontSize: '10px',
    fontWeight: '900',
    letterSpacing: '1px',
    textTransform: 'uppercase'
  },
  titleText: {
    fontFamily: "var(--font-primary)",
    fontSize: '28px',
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: '1.2',
    margin: 0
  },
  descriptionText: {
    fontSize: '13.5px',
    color: '#a1a1aa',
    lineHeight: '1.6',
    margin: 0
  },
  metaRow: {
    display: 'flex',
    gap: '10px',
    color: '#71717a',
    fontSize: '11px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginTop: '10px'
  },
  imageCol: {
    flex: '1 1 50%',
    minWidth: '280px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '260px'
  }
};
