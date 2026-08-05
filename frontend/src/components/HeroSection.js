'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection({ featuredArticle, stackedArticles }) {
  if (!featuredArticle) return null;

  // Helper function to resolve dynamic category badge color class
  const getCategoryClass = (cat) => {
    if (!cat) return 'political-tag';
    return `${cat.toLowerCase()}-tag`;
  };

  return (
    <section style={styles.section} className="hero-section-container">
      {/* Left Side Blue GIF */}
      <img src="/images/hero-bg.gif" alt="Animated" className="hero-gif-left" />

      {/* Right Side GIF */}
      <img src="/images/right-ad.gif" alt="Animated" className="hero-gif-right" />

      <div style={styles.container} className="hero-container-inner">
        <div className="hero-grid">
          
          {/* Left Column: Featured Article Split (Left Image, Right Content) */}
          <div className="hero-featured-split">
            <Link href={`/article/${featuredArticle.id}`} className="hero-featured-image-link">
              <div className="hero-featured-image-container zoom-image-container">
                <Image 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </Link>
            
            <div className="hero-featured-content">
              <div style={styles.metaRow}>
                <span className={`category-tag-badge ${getCategoryClass(featuredArticle.category)}`}>
                  {featuredArticle.category}
                </span>
                <span style={styles.dot}>•</span>
                <span style={styles.dateText}>{featuredArticle.date}</span>
              </div>
              <Link href={`/article/${featuredArticle.id}`}>
                <h1 className="hero-featured-title">{featuredArticle.title}</h1>
              </Link>
              <p className="hero-featured-desc">{featuredArticle.description}</p>
              <div style={styles.readTime}>
                <span>By {featuredArticle.author || "Dr. Sarah Jenkins"}</span>
                <span>•</span>
                <span>{featuredArticle.readTime}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Stacked Minor Articles */}
          <div className="hero-sidebar-stack">
            <h3 className="hero-stack-header">Trending Stories</h3>
            <div className="hero-stack-list">
              {stackedArticles && stackedArticles.slice(0, 3).map((article) => (
                <Link href={`/article/${article.id}`} key={article.id} className="hero-stack-item">
                  <div className="hero-stack-item-content">
                    <h4 className="hero-stack-title">{article.title}</h4>
                    <span className="hero-stack-category">{article.category}</span>
                  </div>
                  <div className="hero-stack-image-container zoom-image-container">
                    <Image 
                      src={article.image} 
                      alt={article.title}
                      fill
                      sizes="80px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '0 0 30px 0',
    width: '100%',
    position: 'relative',
    overflow: 'hidden'
  },
  container: {
    maxWidth: '1350px',
    margin: '0 auto',
    padding: '0 5%'
  },
  metaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '11px',
    color: '#71717a',
    fontWeight: '700'
  },
  dot: {
    color: '#e4e4e7'
  },
  dateText: {
    color: '#71717a'
  },
  readTime: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '11px',
    color: '#71717a',
    fontWeight: '700',
    marginTop: '6px'
  },
  stackReadTime: {
    fontSize: '10.5px',
    color: '#ef4444',
    fontWeight: '700',
    marginTop: '2px'
  }
};
