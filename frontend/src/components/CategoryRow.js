'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';

export default function CategoryRow({ title, articles }) {
  if (!articles || articles.length === 0) return null;

  return (
    <section style={styles.section}>
      <div className="section-header-red">
        <h2>More From {title}</h2>
      </div>

      <div style={styles.grid}>
        {articles.map((article) => (
          <Link href={`/article/${article.id}`} key={article.id} style={styles.card}>
            <div style={styles.imageContainer} className="zoom-image-container">
              <Image 
                src={article.image} 
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={styles.cardContent}>
              <span style={styles.date}>{article.date}</span>
              <h3 style={styles.title}>{article.title}</h3>
              <span style={styles.readTime}>
                <Clock size={12} style={{ marginRight: '4px' }} /> {article.readTime}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    margin: '40px 0',
    width: '100%'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '24px'
  },
  card: {
    background: '#ffffff',
    border: '1px solid #e4e4e7',
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
    ':hover': {
      boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
      transform: 'translateY(-2px)'
    }
  },
  imageContainer: {
    position: 'relative',
    height: '160px',
    width: '100%',
    background: '#f4f4f5'
  },
  cardContent: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flexGrow: 1
  },
  date: {
    fontSize: '11px',
    color: '#be123c',
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  title: {
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '1.4',
    color: '#09090b',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  readTime: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '11px',
    color: '#71717a',
    marginTop: 'auto',
    fontWeight: '500'
  }
};
