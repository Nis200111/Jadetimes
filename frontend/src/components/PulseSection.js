'use client';

import React from 'react';
import Link from 'next/link';

export default function PulseSection() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Section Header */}
        <div style={styles.pulseHeader}>
          <h2 style={styles.pulseTitle}>
            Exclusive Pulse <span style={{ fontWeight: '400', color: '#a1a1aa' }}>| Jadetimes</span>
          </h2>
        </div>

        {/* Featured Video Card */}
        <div style={styles.cardSplit}>
          {/* Left side: YouTube Embed */}
          <div style={styles.videoCol}>
            <iframe 
              width="100%" 
              height="360" 
              src="https://www.youtube.com/embed/ITPpLCUg0Vo" 
              title="Dark Side of Bollywood | Watch Before You Start Your Acting & Modeling Journey" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              style={{ borderRadius: '0px', border: 'none', display: 'block' }}
            />
          </div>

          {/* Right side: content */}
          <div style={styles.contentCol}>
            <span style={styles.badge}>YouTube Updates</span>
            <h3 style={styles.titleText}>
              Dark Side of Bollywood | Watch Before You Start Your Acting & Modeling Journey
            </h3>
            <p style={styles.descriptionText}>
              Welcome to &ldquo;Exclusive Pulse&rdquo; by JadeTimes Media LLC. In this episode, Nivedithaa charkrapani interviews special guest Prof. Simranjit Singh, a Film director &amp; Assistant Professor to discuss two major topics impacting Dark Side of Bollywood.
            </p>
            
            <Link 
              href="https://www.youtube.com/watch?v=ITPpLCUg0Vo" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.readMore}
            >
              Read More &gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '40px 5%',
    background: '#000000', // Pure black background
    color: '#ffffff',
    width: '100%'
  },
  container: {
    maxWidth: '1350px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  },
  pulseHeader: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '2px solid #ef4444',
    paddingBottom: '8px',
    marginBottom: '20px'
  },
  pulseTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0
  },
  cardSplit: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '40px',
    alignItems: 'center'
  },
  videoCol: {
    flex: '1 1 50%',
    minWidth: '320px'
  },
  contentCol: {
    flex: '1 1 40%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    minWidth: '280px',
    justifyContent: 'center'
  },
  badge: {
    alignSelf: 'flex-start',
    background: '#27272a',
    color: '#ffffff',
    fontSize: '11px',
    fontWeight: '600',
    padding: '4px 10px',
    borderRadius: '2px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  titleText: {
    fontSize: '22px',
    fontWeight: '400',
    color: '#ffffff',
    lineHeight: '1.45',
    margin: 0
  },
  descriptionText: {
    fontSize: '14px',
    color: '#a1a1aa',
    lineHeight: '1.6',
    margin: 0
  },
  readMore: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    marginTop: '8px',
    display: 'inline-block'
  }
};
