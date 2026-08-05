'use client';

import React from 'react';
import { Play } from 'lucide-react';

export default function WatchSegments({ mainVideo, sideVideos, bottomVideos }) {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Section Header */}
        <div style={styles.sectionHeader}>
          <span style={styles.sectionIcon} />
          <h2 style={styles.sectionTitle}>Must Watch Top Segments</h2>
        </div>

        {/* 1. Top Split Area */}
        <div style={styles.topSplit}>
          {/* Left: Large Video Player Card */}
          {mainVideo && (
            <div style={styles.mainPlayerCard}>
              <div 
                style={{
                  ...styles.videoThumbnail,
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url(${mainVideo.image})`
                }}
              >
                {/* Play Button Overlay */}
                <button style={styles.playBtnLarge} aria-label="Play video">
                  <Play size={28} fill="#ffffff" color="#ffffff" style={styles.playIcon} />
                </button>
                
                {/* Video Info Overlay */}
                <div style={styles.videoMetaOverlay}>
                  <span style={styles.durationBadge}>{mainVideo.duration}</span>
                  <h3 style={styles.videoTitle}>{mainVideo.title}</h3>
                </div>
              </div>
            </div>
          )}

          {/* Right: Stacked side videos list */}
          <div style={styles.sideStack}>
            {sideVideos && sideVideos.slice(0, 4).map((video) => (
              <div key={video.id} style={styles.sideCard}>
                <div 
                  style={{
                    ...styles.sideThumb,
                    backgroundImage: `url(${video.image})`
                  }}
                >
                  <div style={styles.playBadgeMini}>
                    <Play size={10} fill="#ffffff" color="#ffffff" />
                  </div>
                </div>
                <div style={styles.sideInfo}>
                  <span style={styles.sideDuration}>{video.duration}</span>
                  <h4 style={styles.sideTitle}>{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Bottom Row with Side Label */}
        <div style={styles.bottomRow}>
          {/* 4 Small Video Cards */}
          <div style={styles.bottomGrid}>
            {bottomVideos && bottomVideos.slice(0, 4).map((video) => (
              <div key={video.id} style={styles.bottomCard}>
                <div 
                  style={{
                    ...styles.bottomThumb,
                    backgroundImage: `url(${video.image})`
                  }}
                >
                  <div style={styles.playBadgeMini}>
                    <Play size={10} fill="#ffffff" color="#ffffff" />
                  </div>
                  <span style={styles.bottomDuration}>{video.duration}</span>
                </div>
                <h4 style={styles.bottomCardTitle}>{video.title}</h4>
              </div>
            ))}
          </div>

          {/* Red Political Updates Callout Bar */}
          <div style={styles.sideAdBlock}>
            <span style={styles.sideAdText}>Political Updates</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '40px 5%',
    background: '#09090b', // Dark zinc theme for multimedia
    color: '#ffffff',
    width: '100%',
    borderTop: '1px solid #18181b',
    borderBottom: '1px solid #18181b'
  },
  container: {
    maxWidth: '1350px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    borderBottom: '2px solid #27272a',
    paddingBottom: '8px',
    marginBottom: '10px'
  },
  sectionIcon: {
    width: '8px',
    height: '8px',
    background: '#ef4444'
  },
  sectionTitle: {
    fontSize: '15px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: '#ffffff',
    margin: 0
  },
  topSplit: {
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    flexWrap: 'wrap'
  },
  mainPlayerCard: {
    flex: '2 1 60%',
    minWidth: '320px',
    height: '400px'
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '4px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  playBtnLarge: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: '#ef4444', // Red button
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 20px rgba(239, 68, 68, 0.4)',
    transition: 'transform 0.2s, background-color 0.2s',
    outline: 'none',
    ':hover': {
      transform: 'scale(1.05)',
      background: '#dc2626'
    }
  },
  playIcon: {
    marginLeft: '3px'
  },
  videoMetaOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  durationBadge: {
    background: 'rgba(0,0,0,0.7)',
    fontSize: '10px',
    fontWeight: '700',
    padding: '3px 8px',
    borderRadius: '2px',
    alignSelf: 'flex-start'
  },
  videoTitle: {
    fontFamily: "var(--font-primary)",
    fontSize: '24px',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0,
    textShadow: '0 2px 4px rgba(0,0,0,0.6)'
  },
  sideStack: {
    flex: '1 1 30%',
    minWidth: '280px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  sideCard: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    paddingBottom: '12px',
    borderBottom: '1px solid #18181b'
  },
  sideThumb: {
    width: '90px',
    height: '65px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '2px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  playBadgeMini: {
    background: 'rgba(239, 68, 68, 0.9)',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sideInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  sideDuration: {
    fontSize: '9.5px',
    color: '#ef4444',
    fontWeight: '700'
  },
  sideTitle: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#e4e4e7',
    lineHeight: '1.4',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  bottomRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    flexWrap: 'wrap',
    marginTop: '10px'
  },
  bottomGrid: {
    flex: '1 1 75%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
    minWidth: '300px'
  },
  bottomCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  bottomThumb: {
    width: '100%',
    height: '110px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '2px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomDuration: {
    position: 'absolute',
    bottom: '8px',
    right: '8px',
    background: 'rgba(0,0,0,0.8)',
    fontSize: '9px',
    padding: '2px 5px',
    borderRadius: '2px',
    fontWeight: '700'
  },
  bottomCardTitle: {
    fontSize: '11.5px',
    fontWeight: '700',
    lineHeight: '1.4',
    color: '#e4e4e7',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  sideAdBlock: {
    flex: '1 1 18%',
    minWidth: '160px',
    background: '#ef4444', // Solid Red
    borderRadius: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    height: '110px',
    textAlign: 'center'
  },
  sideAdText: {
    fontFamily: "var(--font-primary)",
    fontSize: '16px',
    fontWeight: '900',
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }
};
