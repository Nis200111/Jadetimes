'use client';

import React from 'react';
import Link from 'next/link';

export default function FullWidthAd({ title = "Exclusive Weekly Magazine", description = "Subscribe to unlock deep investigative reporting, digital archives, and daily global briefings.", buttonText = "Unlock Premium Now" }) {
  return (
    <section style={styles.section}>
      <div style={styles.adBanner}>
        <div style={styles.accentBar} />
        <div style={styles.content}>
          <span style={styles.badge}>SPECIAL PROMOTION</span>
          <h3 style={styles.adTitle}>{title}</h3>
          <p style={styles.adDesc}>{description}</p>
        </div>
        <Link href="/subscribe" style={styles.adBtn}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '20px 5%',
    background: '#ffffff',
    width: '100%'
  },
  adBanner: {
    maxWidth: '1350px',
    margin: '0 auto',
    background: '#141416', // Dark background for contrast
    borderRadius: '4px',
    padding: '30px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '24px',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid #232326'
  },
  accentBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '5px',
    background: '#ef4444'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: '1 1 60%',
    minWidth: '280px'
  },
  badge: {
    fontSize: '9px',
    color: '#ef4444',
    fontWeight: '800',
    letterSpacing: '1px'
  },
  adTitle: {
    fontFamily: "var(--font-primary)",
    fontSize: '22px',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0
  },
  adDesc: {
    fontSize: '13px',
    color: '#a1a1aa',
    lineHeight: '1.5',
    margin: 0
  },
  adBtn: {
    background: '#ef4444',
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: '800',
    padding: '12px 24px',
    borderRadius: '2px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    whiteSpace: 'nowrap',
    transition: 'background 0.2s',
    alignSelf: 'center',
    ':hover': {
      background: '#dc2626'
    }
  }
};
