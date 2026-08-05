'use client';

import React, { useState } from 'react';
import { Play, Tv } from 'lucide-react';

export default function VideoSection({ videos }) {
  if (!videos || videos.length === 0) return null;

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <Tv size={20} style={{ color: '#00e676' }} />
        <h2 style={styles.headerTitle}>JadeTimes TV</h2>
      </div>
      
      <div style={styles.grid}>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}

function VideoCard({ video }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      style={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.thumbnailContainer}>
        <img 
          src={video.image} 
          alt={video.title} 
          style={{
            ...styles.image,
            transform: hovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        {/* Dark overlay for contrast */}
        <div style={styles.overlay} />
        
        {/* Play Button */}
        <div style={{
          ...styles.playBtn,
          transform: hovered ? 'scale(1.1) translate(-50%, -50%)' : 'scale(1) translate(-50%, -50%)',
          background: hovered ? '#00e676' : 'rgba(0,0,0,0.6)',
          color: hovered ? '#0a0a0c' : '#fff'
        }}>
          <Play size={20} style={{ fill: 'currentColor', marginLeft: '2px' }} />
        </div>
        
        <span style={styles.duration}>{video.duration}</span>
      </div>
      
      <h3 style={{
        ...styles.title,
        color: hovered ? '#00e676' : '#f8fafc'
      }}>
        {video.title}
      </h3>
    </div>
  );
}

const styles = {
  section: {
    padding: '40px 0',
    borderTop: '1px solid #14141a',
    marginTop: '20px'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '25px'
  },
  headerTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.02em'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px'
  },
  card: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  thumbnailContainer: {
    position: 'relative',
    height: '180px',
    borderRadius: '10px',
    overflow: 'hidden',
    background: '#070709',
    border: '1px solid #1c1c24'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease'
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.25)',
    zIndex: 1
  },
  playBtn: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transformOrigin: '0 0',
    zIndex: 2,
    width: '46px',
    height: '46px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255,255,255,0.2)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
  },
  duration: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    background: 'rgba(10, 10, 12, 0.8)',
    color: '#fff',
    fontSize: '11px',
    fontWeight: '600',
    padding: '2px 6px',
    borderRadius: '4px',
    zIndex: 2
  },
  title: {
    fontSize: '15px',
    fontWeight: '600',
    lineHeight: '1.4',
    transition: 'color 0.2s'
  }
};
