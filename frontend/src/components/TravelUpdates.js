'use client';

import React from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const featuredArticle = {
  title: "The Mermaid Parade 2025: Coney Island’s Crown Jewel of Creativity, Culture, and Community",
  excerpt: "The Mermaid Parade 2025: Coney Island’s Crown Jewel of Creativity, Culture, and Community",
  image: "/images/travel_mermaid.png"
};

const topCards = [
  {
    title: "When the Rain Turns Extreme",
    image: "/images/travel_rain.png"
  },
  {
    title: "Tyla Revealed the Tracklist of A*POP",
    image: "/images/travel_tyla.png"
  }
];

const bottomListItems = [
  {
    title: "Massive Undersea Internet Cable Project Announced Across..",
    image: "/images/travel_cable.png"
  },
  {
    title: "Welcome to the A*Pop World",
    image: "/images/travel_apop.png"
  },
  {
    title: "Dr. Ohmini Krishnamurthy Rajendran: Advancing..",
    image: "/images/travel_dr.png"
  },
  {
    title: "Two Trespassers Climb the Empire State Building Spire",
    image: "/images/travel_spire.png"
  }
];

export default function TravelUpdates() {
  const isMobile = useMediaQuery('(max-width: 968px)');
  const isSmallMobile = useMediaQuery('(max-width: 576px)');

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* Header Section with thin red underline */}
        <div style={styles.headerContainer}>
          <div style={styles.headerUnderlineWrapper}>
            <h2 style={styles.headerTitle}>Travel Updates</h2>
          </div>
        </div>

        {/* Content Layout */}
        <div style={{
          ...styles.contentGrid,
          gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr',
          gap: isMobile ? '24px' : '32px'
        }}>
          
          {/* Left Column: Large Featured Article */}
          <div style={styles.featuredColumn}>
            <div style={styles.featuredImageWrapper}>
              <img 
                src={featuredArticle.image} 
                alt={featuredArticle.title} 
                style={styles.featuredImage} 
              />
            </div>
            <h3 style={styles.featuredTitle}>{featuredArticle.title}</h3>
            <p style={styles.featuredExcerpt}>{featuredArticle.excerpt}</p>
          </div>

          {/* Right Column: 2x2 Layout with Top Cards & Bottom Lists */}
          <div style={styles.rightColumn}>
            
            {/* Top Row: Two side-by-side cards */}
            <div style={{
              ...styles.topCardsGrid,
              gridTemplateColumns: isSmallMobile ? '1fr' : '1fr 1fr'
            }}>
              {topCards.map((card, idx) => (
                <div key={idx} style={styles.cardItem}>
                  <div style={styles.cardImageWrapper}>
                    <img src={card.image} alt={card.title} style={styles.cardImage} />
                  </div>
                  <h4 style={styles.cardTitle}>{card.title}</h4>
                </div>
              ))}
            </div>

            {/* Bottom Row: 2x2 grid of horizontal list items */}
            <div style={{
              ...styles.bottomListGrid,
              gridTemplateColumns: isSmallMobile ? '1fr' : '1fr 1fr',
              marginTop: isMobile ? '20px' : '75px' // Slightly reduced margin to pull bottom items up
            }}>
              {bottomListItems.map((item, idx) => (
                <div key={idx} style={styles.listItem}>
                  <div style={styles.listThumbnailWrapper}>
                    <img src={item.image} alt={item.title} style={styles.listThumbnail} />
                  </div>
                  <h5 style={styles.listTitle}>{item.title}</h5>
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
    width: '100%',
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif"
  },
  container: {
    maxWidth: '1350px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  headerContainer: {
    borderBottom: '1px solid #ef4444',
    width: '100%',
    display: 'flex',
    marginBottom: '8px'
  },
  headerUnderlineWrapper: {
    borderBottom: '3px solid #ef4444',
    paddingBottom: '8px',
    marginBottom: '-2px'
  },
  headerTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#000000',
    margin: 0,
    fontFamily: "'Poppins', sans-serif"
  },
  contentGrid: {
    display: 'grid',
    alignItems: 'start'
  },
  featuredColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  featuredImageWrapper: {
    width: '100%',
    aspectRatio: '1.6',
    overflow: 'hidden',
    background: '#f4f4f5'
  },
  featuredImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  featuredTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#18181b',
    lineHeight: '1.35',
    margin: 0,
    fontFamily: "'Poppins', sans-serif"
  },
  featuredExcerpt: {
    fontSize: '13.5px',
    color: '#71717a',
    lineHeight: '1.5',
    margin: 0,
    fontFamily: "'Poppins', sans-serif"
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  topCardsGrid: {
    display: 'grid',
    gap: '20px'
  },
  cardItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  cardImageWrapper: {
    width: '100%',
    aspectRatio: '1.7',
    overflow: 'hidden',
    background: '#f4f4f5'
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  cardTitle: {
    fontSize: '13.5px',
    fontWeight: '600',
    color: '#18181b',
    lineHeight: '1.4',
    margin: 0,
    fontFamily: "'Poppins', sans-serif"
  },
  bottomListGrid: {
    display: 'grid',
    gap: '20px 24px',
    marginTop: '40px' // Pushed further down as requested
  },
  listItem: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  },
  listThumbnailWrapper: {
    width: '90px', // Increased from 76px
    height: '62px', // Increased from 52px
    flexShrink: 0,
    overflow: 'hidden',
    background: '#f4f4f5'
  },
  listThumbnail: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  listTitle: {
    fontSize: '14px', // Increased from 12.5px
    fontWeight: '600',
    color: '#18181b',
    lineHeight: '1.4',
    margin: 0,
    fontFamily: "'Poppins', sans-serif",
    display: '-webkit-box',
    WebkitLineClamp: '3', // Allow up to 3 lines of text wrapping
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    maxWidth: '180px' // Increased from 160px to match larger font size
  }
};
