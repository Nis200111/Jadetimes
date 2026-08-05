'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SidebarAd({ position = 'left', customSlides = null }) {
  const leftSlides = [
    {
      url: 'https://picsum.photos/seed/adleft1/160/750',
      title: 'Digital Workspace',
      tagline: 'Connect. Plan. Execute.',
      desc: 'Collaborate with top-tier product and design teams globally.',
      btnText: 'Start Free Trial',
      link: '#'
    },
    {
      url: 'https://picsum.photos/seed/adleft2/160/750',
      title: 'SLIIT University',
      tagline: 'Enroll Fall 2026',
      desc: 'Unlock your potential in computing and data engineering.',
      btnText: 'Learn More',
      link: '#'
    }
  ];

  const rightSlides = [
    {
      title: 'Premium Label Printing Services',
      offer: 'Free Worldwide Shipping from China',
      bullets: [
        'High Quality Labels',
        'Low Cost',
        'Global Shipping'
      ],
      brand: 'SpecialPrinters',
      domain: 'www.specialprinters.us',
      link: '#'
    },
    {
      title: 'Next-Gen Cloud Node Hosting',
      offer: 'Deploy in under 3 seconds',
      bullets: [
        'Serverless Architecture',
        '99.99% Guaranteed Uptime',
        'Global CDN Edge Nodes'
      ],
      brand: 'VercelNode',
      domain: 'www.vercelnode.cloud',
      link: '#'
    }
  ];

  const slides = customSlides || (position === 'left' ? leftSlides : rightSlides);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const activeAd = slides[currentIndex];
  if (!activeAd) return null;

  // Left Sidebar: Image-focused Skyscraper layout
  if (position === 'left') {
    return (
      <div className="sidebar-ad-container sidebar-ad-left">
        <div className="sidebar-ad-sticky">
          <a 
            href={activeAd.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              ...styles.leftAdBox,
              opacity: fade ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
          >
            <div style={styles.imageWrapper}>
              <Image
                src={activeAd.url}
                alt={activeAd.title}
                fill
                sizes="160px"
                style={{ objectFit: 'cover' }}
                priority
              />
              <div style={styles.overlay} />
            </div>

            <div style={styles.content}>
              <h4 style={styles.title}>{activeAd.title}</h4>
              <div style={styles.divider} />
              <h5 style={styles.tagline}>{activeAd.tagline}</h5>
              <p style={styles.desc}>{activeAd.desc}</p>
              <span style={styles.btn}>{activeAd.btnText}</span>
            </div>
          </a>
        </div>
      </div>
    );
  }

  // Right Sidebar: Text-focused layout matching screenshot
  return (
    <div className="sidebar-ad-container sidebar-ad-right">
      <div className="sidebar-ad-sticky">
        <a 
          href={activeAd.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{
            ...styles.rightAdBox,
            opacity: fade ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        >
          <div style={styles.rightContent}>
            <h4 style={styles.rightTitle}>{activeAd.title}</h4>
            <div style={styles.rightDivider} />
            <h5 style={styles.rightOffer}>{activeAd.offer}</h5>
            
            <div style={styles.rightBullets}>
              {activeAd.bullets.map((bullet, i) => (
                <div key={i} style={styles.bulletRow}>
                  <span style={styles.bulletText}>{bullet}</span>
                </div>
              ))}
            </div>

            <div style={styles.brandFooter}>
              <div style={styles.brandLogoSymbol}>SP</div>
              <span style={styles.brandName}>{activeAd.brand}</span>
              <span style={styles.domainName}>{activeAd.domain}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

const styles = {
  leftAdBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    background: '#09090b',
    borderRadius: '4px',
    border: '1px solid #27272a',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
    textDecoration: 'none'
  },
  imageWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(rgba(9, 9, 11, 0.4), rgba(9, 9, 11, 0.95))'
  },
  content: {
    position: 'relative',
    zIndex: 2,
    marginTop: 'auto',
    padding: '24px 14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    color: '#ffffff'
  },
  title: {
    fontFamily: "var(--font-primary)",
    fontSize: '18px',
    fontWeight: '900',
    margin: 0,
    lineHeight: '1.2',
    textTransform: 'uppercase',
    letterSpacing: '-0.5px'
  },
  divider: {
    height: '2px',
    width: '30px',
    background: '#ef4444'
  },
  tagline: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#ef4444',
    margin: 0,
    lineHeight: '1.3'
  },
  desc: {
    fontSize: '11px',
    color: '#d4d4d8',
    margin: 0,
    lineHeight: '1.4'
  },
  btn: {
    background: '#ffffff',
    color: '#09090b',
    fontSize: '10px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    padding: '8px 0',
    borderRadius: '2px',
    textAlign: 'center',
    marginTop: '10px'
  },

  // Right Text-Focused ad styles
  rightAdBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    background: '#09090b',
    borderRadius: '4px',
    border: '1px solid #27272a',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
    textDecoration: 'none',
    padding: '24px 16px',
    color: '#ffffff'
  },
  rightContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '16px'
  },
  rightTitle: {
    fontFamily: "var(--font-primary)",
    fontSize: '18px',
    fontWeight: '900',
    margin: 0,
    lineHeight: '1.2',
    textAlign: 'center',
    color: '#ffffff',
    letterSpacing: '-0.2px'
  },
  rightDivider: {
    height: '1.5px',
    width: '100%',
    background: '#27272a',
    margin: '4px 0'
  },
  rightOffer: {
    fontSize: '12.5px',
    fontWeight: '700',
    color: '#d4d4d8',
    margin: 0,
    lineHeight: '1.4',
    textAlign: 'center'
  },
  rightBullets: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    margin: '20px 0'
  },
  bulletRow: {
    borderTop: '1px solid #27272a',
    paddingTop: '8px',
    textAlign: 'center'
  },
  bulletText: {
    fontSize: '11px',
    color: '#a1a1aa',
    fontWeight: '600',
    letterSpacing: '0.2px'
  },
  brandFooter: {
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    borderTop: '1px solid #27272a',
    paddingTop: '16px'
  },
  brandLogoSymbol: {
    width: '32px',
    height: '32px',
    border: '1.5px solid #ffffff',
    borderRadius: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: '900',
    color: '#ffffff'
  },
  brandName: {
    fontSize: '13px',
    fontWeight: '800',
    color: '#ffffff',
    marginTop: '4px'
  },
  domainName: {
    fontSize: '9.5px',
    color: '#71717a',
    fontWeight: '700'
  }
};
