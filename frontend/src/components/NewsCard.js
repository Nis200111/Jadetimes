'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Transparent pixel base64 for image blur placeholder fallback
const blurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

export default function NewsCard({ article, variant = 'standard' }) {
  if (!article) return null;

  const getCategoryClass = (cat) => {
    if (!cat) return 'political-tag';
    return `${cat.toLowerCase()}-tag`;
  };

  if (variant === 'clean') {
    return (
      <Link href={`/article/${article.id}`} style={styles.cleanCard}>
        <div style={styles.cleanImageContainer} className="zoom-image-container">
          <Image 
            src={article.image} 
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 20vw"
            placeholder="blur"
            blurDataURL={blurDataURL}
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        <div style={styles.cleanContent}>
          <h3 style={styles.cleanTitle}>{article.title}</h3>
        </div>
      </Link>
    );
  }

  if (variant === 'flat') {
    return (
      <Link href={`/article/${article.id}`} style={styles.flatCard}>
        <div style={styles.flatImageContainer} className="zoom-image-container">
          <Image 
            src={article.image} 
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 20vw"
            placeholder="blur"
            blurDataURL={blurDataURL}
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        <div style={styles.flatContent}>
          <h3 style={styles.flatTitle}>{article.title}</h3>
          {article.description && <p style={styles.flatDesc}>{article.description}</p>}
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/article/${article.id}`} style={styles.card}>
      <div style={styles.imageContainer} className="zoom-image-container">
        <Image 
          src={article.image} 
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <div style={styles.content}>
        <span className={`category-tag-badge ${getCategoryClass(article.category)}`}>
          {article.category}
        </span>
        <h3 style={styles.title}>{article.title}</h3>
        {article.description && <p style={styles.desc}>{article.description}</p>}
        <div style={styles.cardFooter}>
          <span style={styles.date}>{article.date}</span>
          <span style={styles.readTime}>{article.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

const styles = {
  card: {
    background: '#ffffff',
    border: '1px solid #e4e4e7',
    borderRadius: '4px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
    ':hover': {
      transform: 'translateY(-6px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
    }
  },
  imageContainer: {
    position: 'relative',
    height: '210px',  /* INCREASED from 180px */
    width: '100%',
    background: '#f4f4f5',
    overflow: 'hidden'
  },
  content: {
    padding: '20px',  /* INCREASED from 16px */
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',  /* INCREASED from 8px */
    flexGrow: 1
  },
  categoryTag: {
    color: '#ef4444',
    fontSize: '9.5px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  title: {
    fontSize: '15px',  /* INCREASED from 14.5px */
    fontWeight: '700',
    color: '#18181b',
    lineHeight: '1.45',  /* INCREASED from 1.4 */
    margin: 0
  },
  desc: {
    fontSize: '13px',  /* INCREASED from 12.5px */
    color: '#71717a',
    lineHeight: '1.55',  /* INCREASED from 1.5 */
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: '12px',  /* INCREASED from 10px */
    borderTop: '1px solid #f4f4f5',
    fontSize: '11px',
    color: '#71717a',
    fontWeight: '500'
  },
  date: {
    whiteSpace: 'nowrap'
  },
  readTime: {
    color: '#ef4444',
    fontWeight: '700'
  },
  
  // Clean card styling (used in More News section)
  cleanCard: {
    background: '#ffffff',
    border: '1px solid #e4e4e7',
    borderRadius: '4px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    height: '250px',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    cursor: 'pointer',
    textDecoration: 'none',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
    ':hover': {
      transform: 'translateY(-6px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
    }
  },
  cleanImageContainer: {
    position: 'relative',
    height: '140px',
    width: '100%',
    background: '#f4f4f5',
    overflow: 'hidden'
  },
  cleanContent: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'flex-start'
  },
  cleanTitle: {
    fontSize: '13.5px',
    fontWeight: '600',
    color: '#18181b',
    lineHeight: '1.4',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },

  // Flat card styling for 5-column sports layout
  flatCard: {
    background: '#ffffff',
    border: '1px solid #e4e4e7',
    borderRadius: '0px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    textDecoration: 'none',
    transition: 'opacity 0.2s',
    cursor: 'pointer'
  },
  flatImageContainer: {
    position: 'relative',
    height: '130px',
    width: '100%',
    background: '#f4f4f5',
    overflow: 'hidden'
  },
  flatContent: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    flexGrow: 1
  },
  flatTitle: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#18181b',
    lineHeight: '1.45',
    margin: 0
  },
  flatDesc: {
    fontSize: '12px',
    color: '#52525b',
    lineHeight: '1.5',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  }
};
