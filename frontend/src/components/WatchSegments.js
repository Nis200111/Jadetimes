'use client';

import React from 'react';
import { Play } from 'lucide-react';

const sideItems = [
  {
    id: 301,
    title: "Global Movement for Climate Justice: A Fight for Equity and...",
    category: "Asia",
    image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 302,
    title: "Cannes Film Festival 2024, Top Ten Looks",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 303,
    title: "Discover who Beats Jeff Bezos | Top 10 Most Richest...",
    category: "Business",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 304,
    title: "Met Gala 2024: Celebrities, Red Carpet, Theme, &...",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=150&auto=format&fit=crop&q=80"
  }
];

const bottomItems = [
  {
    id: 401,
    title: "Spider Man Brand New Day...",
    source: "Jadetimes",
    image: "https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: 402,
    title: "Global Markets Euro Zone, US...",
    source: "Jadetimes",
    image: "https://images.unsplash.com/photo-1618042164219-62c820f10723?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: 403,
    title: "WTO Says Hormuz Disruption...",
    source: "Jadetimes",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: 404,
    title: "Spider Man Brand New Day...",
    source: "Jadetimes",
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80"
  }
];

const politicalItems = [
  "The New Silk Road: Re-engineering Global Trade Routes",
  "The Invisible Invasion: How Microplastics Are Getting Into Our Bodies",
  "Who Owns You After You Die? The Messy Law of Digital Inheritance",
  "Trial by Combat: The Medieval Legal Loophole Nobody Ever Quite Closed",
  "FLO Released Their New Song - Remedied",
  "Before ChatGPT: The Journey That Changed Artificial Intelligence Forever"
];

export default function WatchSegments({ mainVideo, sideVideos, bottomVideos }) {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Section Header */}
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>
            <span style={{ fontWeight: '800' }}>Must Watch </span>
            <span style={{ fontWeight: '300' }}>Top Segments</span>
          </h2>
        </div>

        {/* 1. Top Split Area */}
        <div style={styles.topSplit}>
          {/* Left: Large Video Player Card */}
          <div style={styles.mainPlayerCard}>
            <div
              style={{
                ...styles.videoThumbnail,
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.75)), url(https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&auto=format&fit=crop&q=80)`
              }}
            >
              {/* Centered Video Info and Play Button */}
              <div style={styles.centerOverlay}>
                <h3 style={styles.centerVideoTitle}>
                  Spider Man Brand New Day Opens Strong with ₹80 85 on 30 July 2026 | Jadetimes
                </h3>
                <p style={styles.centerVideoSubtitle}>Jadetimes</p>
                <button style={styles.centerPlayBtn}>
                  <Play size={13} fill="#ffffff" color="#ffffff" style={{ marginRight: '6px' }} />
                  Play Video
                </button>
              </div>
            </div>
          </div>

          {/* Right: Stacked side list matching Screenshot 1 */}
          <div style={styles.sideStack}>
            {sideItems.map((item) => (
              <div key={item.id} style={styles.sideCard}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={styles.sideThumb}
                />
                <div style={styles.sideInfo}>
                  <h4 style={styles.sideTitle}>{item.title}</h4>
                  <span style={styles.sideCategory}>{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Bottom Row with Political Updates List */}
        <div style={styles.bottomRow}>
          {/* 4 Small News Cards */}
          <div style={{ flex: '1 1 75%', display: 'flex', flexDirection: 'column' }}>
            <div style={styles.bottomGrid}>
              {bottomItems.map((item) => (
                <div key={item.id} style={styles.bottomCard}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={styles.bottomThumb}
                  />
                  <h4 style={styles.bottomCardTitle}>{item.title}</h4>
                  <span style={styles.bottomCardSource}>{item.source}</span>
                </div>
              ))}
            </div>

            {/* Next Link aligned bottom right under cards */}
            <div style={styles.nextLinkContainer}>
              <span style={styles.nextLink}>Next &rarr;</span>
            </div>
          </div>

          {/* Political Updates Text Link List */}
          <div style={styles.politicalBlock}>
            <h3 style={styles.politicalHeader}>
              <span style={{ fontWeight: '800' }}>Political </span>
              <span style={{ fontWeight: '300' }}>Updates</span>
            </h3>

            <div style={styles.politicalList}>
              {politicalItems.map((title, idx) => (
                <div key={idx} style={styles.politicalItem}>
                  {title}
                </div>
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
    padding: '40px 5%',
    background: '#ffffff',
    color: '#1f2937',
    width: '100%'
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
    marginBottom: '20px'
  },
  sectionTitle: {
    fontFamily: 'var(--font-primary), sans-serif',
    fontSize: '24px',
    color: '#1f2937',
    margin: 0,
    textTransform: 'none'
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
    height: '500px'
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
  centerOverlay: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 40px',
    height: '100%',
    width: '100%'
  },
  centerVideoTitle: {
    fontFamily: "var(--font-primary)",
    fontSize: '20px',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0 0 8px 0',
    lineHeight: '1.45',
    textShadow: '0 2px 4px rgba(0,0,0,0.85)',
    maxWidth: '650px'
  },
  centerVideoSubtitle: {
    fontFamily: "var(--font-primary)",
    fontSize: '13px',
    color: '#d4d4d8',
    margin: '0 0 20px 0',
    fontWeight: '500'
  },
  centerPlayBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#ef4444',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 24px',
    fontSize: '13px',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(239, 68, 68, 0.4)',
    transition: 'transform 0.2s, background-color 0.2s',
    outline: 'none',
    ':hover': {
      background: '#dc2626',
      transform: 'scale(1.02)'
    }
  },
  sideStack: {
    flex: '1 1 30%',
    minWidth: '280px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  sideCard: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start'
  },
  sideThumb: {
    width: '90px',
    height: '90px',
    objectFit: 'cover',
    borderRadius: '0px',
    flexShrink: 0
  },
  sideInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  sideTitle: {
    fontSize: '14.5px',
    fontWeight: '400',
    color: '#1f2937',
    lineHeight: '1.4',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    maxWidth: '200px'
  },
  sideCategory: {
    fontSize: '13px',
    color: '#71717a',
    fontWeight: '400'
  },
  bottomRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    flexWrap: 'wrap',
    marginTop: '10px'
  },
  bottomGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '20px',
    width: '100%'
  },
  bottomCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  bottomThumb: {
    width: '100%',
    height: '130px',
    objectFit: 'cover',
    borderRadius: '0px'
  },
  bottomCardTitle: {
    fontSize: '12px',
    fontWeight: '700',
    lineHeight: '1.4',
    color: '#1f2937',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  bottomCardSource: {
    fontSize: '11px',
    color: '#71717a',
    fontWeight: '400'
  },
  nextLinkContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '15px'
  },
  nextLink: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#1f2937',
    cursor: 'pointer',
    borderBottom: '1px solid transparent',
    transition: 'border-color 0.2s',
    ':hover': {
      borderBottom: '1px solid #1f2937'
    }
  },
  politicalBlock: {
    flex: '1 1 22%',
    minWidth: '220px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  politicalHeader: {
    fontFamily: 'var(--font-primary), sans-serif',
    fontSize: '20px',
    color: '#1f2937',
    margin: 0,
    textTransform: 'none',
    paddingBottom: '8px',
    borderBottom: '1px solid #e4e4e7'
  },
  politicalList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  politicalItem: {
    fontSize: '11.5px',
    fontWeight: '400',
    color: '#3f3f46',
    lineHeight: '1.4',
    cursor: 'pointer',
    transition: 'color 0.2s',
    ':hover': {
      color: '#ef4444'
    }
  }
};
