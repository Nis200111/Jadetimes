'use client';

import React from 'react';
import Link from 'next/link';

export default function CategoryTiles({ articles }) {
  // We need exactly 4 articles for the category tiles
  const tiles = articles ? articles.slice(0, 4) : [];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Left Side: 4 Category Card Tiles */}
        <div style={styles.tilesGrid}>
          {tiles.map((item, idx) => (
            <Link key={item.id || idx} href={`/category/${item.category?.toLowerCase()}`} style={styles.tileCard}>
              <div 
                style={{
                  ...styles.tileImageContainer,
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${item.image})`
                }}
              >
                <div style={styles.tileContent}>
                  <span className={`category-tag-badge ${item.category ? `${item.category.toLowerCase()}-tag` : 'political-tag'}`}>{item.category}</span>
                  <h3 style={styles.tileTitle}>{item.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Side: Sidebar Ad Box */}
        <div style={styles.sidebarAd}>
          <div style={styles.adTag}>ADVERTISEMENT</div>
          <div style={styles.adContent}>
            <h4 style={styles.adHeadline}>Upgrade to Premium</h4>
            <p style={styles.adBody}>Get unlimited access to expert editorial insights, premium digests, and live research conferences.</p>
            <Link href="/subscribe" style={styles.adBtn}>
              Subscribe Now
            </Link>
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
    gap: '30px',
    flexWrap: 'wrap'
  },
  tilesGrid: {
    flex: '1 1 70%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    minWidth: '300px'
  },
  tileCard: {
    display: 'block',
    borderRadius: '4px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    height: '240px',
    position: 'relative',
    ':hover': {
      transform: 'translateY(-4px)'
    }
  },
  tileImageContainer: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '16px'
  },
  tileContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  tileTag: {
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
  tileTitle: {
    fontFamily: "var(--font-primary)",
    fontSize: '14px',
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: '1.4',
    margin: 0,
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)'
  },
  sidebarAd: {
    flex: '1 1 24%',
    minWidth: '260px',
    background: '#18181b', // Dark zinc ad background
    borderRadius: '4px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '1px solid #27272a',
    color: '#ffffff',
    height: '240px'
  },
  adTag: {
    fontSize: '9px',
    color: '#71717a',
    fontWeight: '800',
    letterSpacing: '1px',
    textTransform: 'uppercase'
  },
  adContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    margin: 'auto 0'
  },
  adHeadline: {
    fontSize: '18px',
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: '1.2'
  },
  adBody: {
    fontSize: '11.5px',
    color: '#a1a1aa',
    lineHeight: '1.4',
    margin: 0
  },
  adBtn: {
    background: '#ef4444',
    color: '#ffffff',
    fontSize: '11px',
    fontWeight: '800',
    textAlign: 'center',
    padding: '8px 0',
    borderRadius: '2px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginTop: '12px',
    transition: 'background 0.2s',
    ':hover': {
      background: '#dc2626'
    }
  }
};
