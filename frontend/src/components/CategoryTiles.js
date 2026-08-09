'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CategoryTiles({ articles }) {
  // We need exactly 4 articles for the category tiles
  const tiles = articles ? articles.slice(0, 4) : [];

  // Fallback descriptions for mock articles to match Screenshot 2 UI layout
  const fallbacks = [
    "The 2026 FIFA World Cup continues to capture global attention as major teams prepare for crucial matches in London Arena.",
    "The Reserve Bank of Australia announced today that it will keep key interest rates unchanged but warns that the inflation battle is not over.",
    "A major international telecommunications consortium announces strategic subsea fiber rings to expand internet connectivity across Asia and Africa.",
    "The rivalry between US and Iran strengthening is further evidence of growing geopolitical challenges to interim peace and global stability."
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Left Side: 4 Category Card Tiles in a row */}
        {tiles.map((item, idx) => (
          <Link key={item.id || idx} href={`/category/${item.category?.toLowerCase()}`} style={styles.tileCard}>
            <div style={styles.tileImageContainer}>
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 20vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={styles.tileContent}>
              <span style={styles.tileCategory}>
                {item.category}
              </span>
              <h3 style={styles.tileTitle}>
                {item.title}
              </h3>
              <p style={styles.tileDesc}>
                {item.description || fallbacks[idx] || "Get the latest updates and editorial analysis on this category from JadeTimes coverage."}
              </p>
            </div>
          </Link>
        ))}

        {/* Right Side: Sidebar Ad Box with Image and Buttons */}
        <div style={styles.sidebarAdContainer}>
          <div style={styles.adImageWrapper}>
            <img 
              src="/images/6271b2_0f57dfb91c344deab0872a3a4875df3f~mv2.avif" 
              alt="Advance Graphic Design Service Advertisement" 
              style={styles.adImage}
            />
          </div>
          <div style={styles.adButtonsRow}>
            <Link href="/latest" style={styles.latestUpdatesBtn}>
              LATEST UPDATES
            </Link>
            <Link href="/read-more" style={styles.readMoreBtn}>
              Read More
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
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '32px',
    alignItems: 'stretch'
  },
  tileCard: {
    display: 'flex',
    flexDirection: 'column',
    background: '#ffffff',
    border: '1px solid #e4e4e7',
    borderRadius: '4px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    height: '350px',
    cursor: 'pointer',
    textDecoration: 'none',
    ':hover': {
      transform: 'translateY(-6px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
    }
  },
  tileImageContainer: {
    position: 'relative',
    width: '100%',
    height: '135px',
    background: '#f4f4f5',
    overflow: 'hidden'
  },
  tileContent: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flexGrow: 1
  },
  tileCategory: {
    fontSize: '13px',
    color: '#71717a',
    fontWeight: '500',
    textTransform: 'capitalize',
    letterSpacing: '0.2px'
  },
  tileTitle: {
    fontFamily: "var(--font-primary)",
    fontSize: '14.5px',
    fontWeight: '700',
    color: '#18181b',
    lineHeight: '1.4',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  tileDesc: {
    fontSize: '11.5px',
    color: '#71717a',
    lineHeight: '1.45',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  sidebarAdContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '350px'
  },
  adImageWrapper: {
    width: '100%',
    flexGrow: 1,
    borderRadius: '4px',
    overflow: 'hidden',
    border: '1px solid #e4e4e7',
    position: 'relative',
    background: '#000000'
  },
  adImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  },
  adButtonsRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginTop: '12px',
    flexShrink: 0
  },
  latestUpdatesBtn: {
    background: '#1c1917',
    color: '#ffffff',
    fontSize: '10px',
    fontWeight: '800',
    padding: '8px 14px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background 0.2s',
    cursor: 'pointer',
    textAlign: 'center'
  },
  readMoreBtn: {
    color: '#18181b',
    fontSize: '11.5px',
    fontWeight: '700',
    textDecoration: 'none',
    transition: 'color 0.2s',
    cursor: 'pointer'
  }
};
