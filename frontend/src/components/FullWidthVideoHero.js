'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Volume2, ShieldAlert } from 'lucide-react';

export default function FullWidthVideoHero({ article }) {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  if (!article) return null;

  return (
    <section style={styles.section}>
      <div style={styles.sectionHeader}>
        <span style={styles.headerDot}></span>
        <h2 style={styles.headerTitle}>JADETIMES TV</h2>
      </div>

      <div 
        style={styles.playerContainer}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setPlaying(!playing)}
      >
        {/* Background Image using next/image */}
        <div style={styles.imageWrapper}>
          <Image 
            src={article.image}
            alt={article.title}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
              transform: hovered && !playing ? 'scale(1.02)' : 'scale(1)',
              transition: 'transform 0.8s ease'
            }}
            priority
          />
        </div>

        {/* Dark Screen Overlay */}
        <div style={{
          ...styles.darkOverlay,
          background: playing ? 'rgba(0,0,0,0.1)' : 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 100%)'
        }} />

        {/* Play Button Interface */}
        {!playing ? (
          <div style={{
            ...styles.playButtonWrapper,
            transform: hovered ? 'translate(-50%, -50%) scale(1.08)' : 'translate(-50%, -50%) scale(1)',
            background: hovered ? '#e11d48' : '#be123c'
          }}>
            <Play size={32} style={{ fill: '#fff', color: '#fff', marginLeft: '4px' }} />
          </div>
        ) : (
          <div style={styles.playingIndicator}>
            <Volume2 size={18} style={{ color: '#00e676', marginRight: '6px' }} />
            <span>Streaming Live Report</span>
          </div>
        )}

        {/* Video Overlay Text */}
        {!playing && (
          <div style={styles.textOverlay}>
            <span style={styles.badge}>Exclusive Broadcast</span>
            <h1 style={styles.title}>{article.title}</h1>
            <p style={styles.desc}>{article.description}</p>
            <div style={styles.meta}>Report duration: 12 mins • Published {article.date}</div>
          </div>
        )}
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: '#09090b',
    padding: '50px 5%',
    width: '100vw',
    marginLeft: 'calc(-50vw + 50%)',
    marginRight: 'calc(-50vw + 50%)',
    borderTop: '1px solid #1f1f23',
    borderBottom: '1px solid #1f1f23',
    marginBottom: '40px',
    boxSizing: 'border-box'
  },
  sectionHeader: {
    maxWidth: '1350px',
    margin: '0 auto 24px auto',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  headerDot: {
    width: '10px',
    height: '10px',
    background: '#e11d48',
    borderRadius: '50%',
    boxShadow: '0 0 10px #e11d48'
  },
  headerTitle: {
    fontSize: '20px',
    fontWeight: '900',
    color: '#fff',
    letterSpacing: '1px'
  },
  playerContainer: {
    maxWidth: '1350px',
    margin: '0 auto',
    height: '60vh',
    minHeight: '450px',
    borderRadius: '12px',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
  },
  imageWrapper: {
    position: 'absolute',
    inset: 0,
    zIndex: 1
  },
  darkOverlay: {
    position: 'absolute',
    inset: 0,
    zIndex: 2,
    transition: 'background 0.3s ease'
  },
  playButtonWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255,255,255,0.2)'
  },
  playingIndicator: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    background: 'rgba(0,0,0,0.8)',
    border: '1px solid #27272a',
    borderRadius: '20px',
    padding: '6px 16px',
    fontSize: '12px',
    color: '#fff',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    zIndex: 3
  },
  textOverlay: {
    position: 'absolute',
    bottom: '40px',
    left: '40px',
    right: '40px',
    zIndex: 3,
    maxWidth: '800px',
    color: '#fff'
  },
  badge: {
    background: '#e11d48',
    color: '#fff',
    fontSize: '11px',
    fontWeight: '800',
    padding: '4px 10px',
    borderRadius: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    display: 'inline-block',
    marginBottom: '15px'
  },
  title: {
    fontSize: 'clamp(22px, 3.5vw, 36px)',
    fontWeight: '800',
    color: '#fff',
    marginBottom: '10px',
    lineHeight: '1.2',
    textShadow: '0 2px 10px rgba(0,0,0,0.8)'
  },
  desc: {
    fontSize: 'clamp(14px, 1.5vw, 17px)',
    color: '#cbd5e1',
    lineHeight: '1.5',
    marginBottom: '20px',
    textShadow: '0 1px 5px rgba(0,0,0,0.5)'
  },
  meta: {
    fontSize: '13px',
    color: '#94a3b8',
    fontWeight: '500'
  }
};
