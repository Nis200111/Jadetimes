'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Transparent pixel base64 for image blur placeholder fallback
const blurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

export default function NewsCard({ article }) {
  if (!article) return null;

  const getCategoryClass = (cat) => {
    if (!cat) return 'political-tag';
    return `${cat.toLowerCase()}-tag`;
  };

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
    transition: 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    cursor: 'pointer',
    ':hover': {
      transform: 'translateY(-4px)'
    }
  },
  imageContainer: {
    position: 'relative',
    height: '180px',
    width: '100%',
    background: '#f4f4f5',
    overflow: 'hidden'
  },
  content: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
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
    fontSize: '14.5px',
    fontWeight: '700',
    color: '#18181b',
    lineHeight: '1.4',
    margin: 0
  },
  desc: {
    fontSize: '12.5px',
    color: '#71717a',
    lineHeight: '1.5',
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
    paddingTop: '10px',
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
  }
};
