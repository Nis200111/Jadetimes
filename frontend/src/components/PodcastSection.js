'use client';

import React, { useState } from 'react';
import { Headphones, Volume2 } from 'lucide-react';

export default function PodcastSection({ podcasts }) {
  if (!podcasts || podcasts.length === 0) return null;

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <Headphones size={20} style={{ color: '#ef4444' }} />
          <h2 style={styles.headerTitle}>Jadetimes Talk | Podcast</h2>
        </div>
        
        <div style={styles.grid}>
          {podcasts.slice(0, 3).map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PodcastCard({ podcast }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      style={{
        ...styles.card,
        borderColor: hovered ? '#27272a' : '#18181b',
        boxShadow: hovered ? '0 15px 30px rgba(0,0,0,0.3)' : 'none'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.imageContainer}>
        <img src={podcast.image} alt={podcast.title} style={styles.image} />
        {hovered && (
          <div style={styles.listenOverlay}>
            <Volume2 size={24} style={{ color: '#ef4444' }} />
          </div>
        )}
      </div>
      
      <div style={styles.details}>
        <span style={styles.showName}>{podcast.show}</span>
        <h3 style={{
          ...styles.title,
          color: hovered ? '#ef4444' : '#ffffff'
        }}>
          {podcast.title}
        </h3>
        
        <div style={styles.meta}>
          <span style={styles.duration}>{podcast.duration}</span>
          <button style={{
            ...styles.listenBtn,
            background: hovered ? '#ef4444' : '#18181b',
            color: hovered ? '#ffffff' : '#a1a1aa',
            border: hovered ? '1px solid #ef4444' : '1px solid #27272a'
          }}>
            Listen Now
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  section: {
    padding: '40px 5%',
    background: '#09090b', // Rich dark theme
    borderTop: '1px solid #18181b',
    borderBottom: '1px solid #18181b',
    width: '100%'
  },
  container: {
    maxWidth: '1350px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    borderBottom: '2px solid #27272a',
    paddingBottom: '8px',
    marginBottom: '10px'
  },
  headerTitle: {
    fontSize: '15px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: '#ffffff',
    margin: 0
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px'
  },
  card: {
    background: '#141416',
    border: '1px solid #18181b',
    borderRadius: '4px',
    padding: '16px',
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
  },
  imageContainer: {
    position: 'relative',
    width: '80px',
    height: '80px',
    borderRadius: '2px',
    overflow: 'hidden',
    flexShrink: 0
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  listenOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(9, 9, 11, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    flexGrow: 1
  },
  showName: {
    color: '#ef4444',
    fontSize: '10px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  title: {
    fontSize: '13.5px',
    fontWeight: '700',
    lineHeight: '1.4',
    transition: 'color 0.2s',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  meta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '4px'
  },
  duration: {
    fontSize: '11px',
    color: '#71717a',
    fontWeight: '500'
  },
  listenBtn: {
    padding: '4px 12px',
    borderRadius: '2px',
    fontSize: '11px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.2s'
  }
};
