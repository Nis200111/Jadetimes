'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import useMediaQuery from '../hooks/useMediaQuery';

// Preset featured articles matching screenshot 1, 2, and 3
const featuredArticles = [
  {
    id: 17,
    title: "Japan Launches World's Fastest Commercial Quantum Computing Network",
    category: "Innovation",
    description: "Japan announced today the launch of a new commercial quantum computing network that researchers describe as one of the fastest and most advanced.",
    image: "https://picsum.photos/seed/quantum/800/600",
    author: "Niveditaa chakrapani",
    date: "Jul 16"
  },
  {
    id: 18,
    title: "Political Uncertainty Grows in Britain Following Surprise Election Result",
    category: "Political",
    description: "British politics experienced a dramatic shift today following a significant by-election result that has intensified debate about the future direction of the country.",
    image: "https://picsum.photos/seed/politics/800/600",
    author: "Niveditaa chakrapani",
    date: "Jul 08"
  },
  {
    id: 19,
    title: "Paris Restricts Traffic in Historic Center to Boost Pedestrian Safety",
    category: "Travel",
    description: "City officials announced new regulations limiting vehicle access around the Seine and major landmarks, aiming to reduce carbon emissions and create pedestrian zones.",
    image: "https://picsum.photos/seed/paris/800/600",
    author: "Niveditaa chakrapani",
    date: "Jul 12"
  }
];

// Preset trending articles matching screenshot 1 (8 cards with exact titles, categories, and matching Unsplash images)
const trendingArticles = [
  {
    id: 201,
    title: "Rolls-Royce Tests New Technology to Protect Jet Engines...",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 202,
    title: "Worcester Mexican Restaurant Celebrated Cinco...",
    category: "USA",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 203,
    title: "AI Regulation Gains Momentum as EU Sets Global...",
    category: "Europe",
    image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 204,
    title: "New Study Shows Massachusetts at The Top Rank of Th...",
    category: "USA",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 205,
    title: "The Influence of TikTok on Modern Dance Trends",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 206,
    title: "Former Holy Cross Star Terrence Spence is Thrilled f...",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 207,
    title: "Gucci's silk square receives an artistic makeover.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 208,
    title: "North Korea Backs Russia's War in Ukraine—Shocking...",
    category: "Ukraine-Russia War",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=150&auto=format&fit=crop&q=80"
  }
];

export default function TrendingAndFeature() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const currentArticle = featuredArticles[activeIndex];

  const handleNext = () => {
    if (activeIndex < featuredArticles.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <section style={styles.section}>
      <div style={{
        ...styles.container,
        flexDirection: isMobile ? 'column' : 'row'
      }}>
        {/* Left Column: Featured Spotlight Carousel */}
        <div style={{
          ...styles.leftCol,
          paddingRight: isMobile ? '0' : '24px'
        }}>
          <div style={styles.carouselContainer}>
            {/* Image Slider Box */}
            <div style={styles.imageWrapper}>
              <div style={{
                ...styles.imageTrack,
                transform: `translateX(-${activeIndex * 100}%)`
              }}>
                {featuredArticles.map((art) => (
                  <img 
                    key={art.id}
                    src={art.image} 
                    alt={art.title} 
                    style={styles.carouselImage} 
                  />
                ))}
              </div>
              
              {/* Left Side Arrow Button (Shown when not on first slide) */}
              {activeIndex > 0 && (
                <button 
                  onClick={handlePrev} 
                  style={styles.arrowBtnLeft}
                  aria-label="Previous featured article"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
              )}

              {/* Right Side Arrow Button (Shown when not on last slide) */}
              {activeIndex < featuredArticles.length - 1 && (
                <button 
                  onClick={handleNext} 
                  style={styles.arrowBtnRight}
                  aria-label="Next featured article"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              )}
            </div>

            {/* Description Text Box */}
            <div style={styles.textContent}>
              <div style={styles.metaRow}>
                <span style={styles.author}>{currentArticle.author}</span>
                <span style={styles.date}>{currentArticle.date}</span>
              </div>
              <span style={styles.category}>{currentArticle.category}</span>
              <h3 style={styles.title}>{currentArticle.title}</h3>
              <p style={styles.description}>{currentArticle.description}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Whats Trending */}
        <div style={styles.rightCol}>
          {/* Wrapper to control the left border height so it ends exactly where the cards end */}
          <div style={{
            ...styles.trendingWrapper,
            borderLeft: isMobile ? 'none' : '1px solid #18181b',
            paddingLeft: isMobile ? '0' : '30px'
          }}>
            {/* Header row with Title and Subscribe button */}
            <div style={styles.trendingHeader}>
              <h2 style={styles.trendingTitle}>
                <span style={{ fontWeight: '800' }}>Whats </span>
                <span style={{ fontWeight: '300' }}>Trending</span>
              </h2>
              <button style={styles.subscribeBtn}>
                Subscribe : 49.99/Year
              </button>
            </div>

            {/* 4x2 Grid of cards */}
            <div style={{
              ...styles.trendingGrid,
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr'
            }}>
              {trendingArticles.map((item) => (
                <div key={item.id} style={styles.card}>
                  <div style={styles.cardLeft}>
                    <h4 style={styles.cardTitle}>{item.title}</h4>
                    <span style={styles.cardCategory}>{item.category}</span>
                  </div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={styles.cardThumb} 
                  />
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
    width: '100%'
  },
  container: {
    maxWidth: '1350px',
    margin: '0 auto',
    display: 'flex',
    gap: '30px'
  },
  leftCol: {
    flex: '1 1 50%',
    display: 'flex',
    flexDirection: 'column'
  },
  rightCol: {
    flex: '1 1 50%',
    display: 'flex',
    flexDirection: 'column'
  },
  trendingWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  carouselContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #e4e4e7',
    borderRadius: '4px',
    overflow: 'hidden',
    background: '#ffffff',
    boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    aspectRatio: '16/10',
    background: '#f4f4f5'
  },
  imageTrack: {
    display: 'flex',
    width: '100%',
    height: '100%',
    transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    flexShrink: 0
  },
  arrowBtnLeft: {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#ffffff',
    border: 'none',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s, background-color 0.2s',
    outline: 'none',
    zIndex: 10
  },
  arrowBtnRight: {
    position: 'absolute',
    right: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#ffffff',
    border: 'none',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s, background-color 0.2s',
    outline: 'none',
    zIndex: 10
  },
  textContent: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column'
  },
  metaRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    marginBottom: '12px'
  },
  author: {
    fontSize: '13px',
    color: '#18181b',
    fontWeight: '600'
  },
  date: {
    fontSize: '12px',
    color: '#71717a'
  },
  category: {
    fontSize: '13px',
    color: '#ea580c',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginTop: '4px'
  },
  title: {
    fontFamily: 'var(--font-primary), Georgia, serif',
    fontSize: '24px',
    fontWeight: '700',
    color: '#18181b',
    marginTop: '8px',
    lineHeight: '1.3'
  },
  description: {
    fontSize: '14px',
    color: '#52525b',
    marginTop: '12px',
    lineHeight: '1.5'
  },
  trendingHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    gap: '12px'
  },
  trendingTitle: {
    fontFamily: 'var(--font-primary), sans-serif',
    fontSize: '24px',
    color: '#18181b',
    margin: 0
  },
  subscribeBtn: {
    background: '#ff0000',
    color: '#ffffff',
    border: 'none',
    borderRadius: '2px',
    padding: '6px 12px',
    fontSize: '11px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    cursor: 'pointer'
  },
  trendingGrid: {
    display: 'grid',
    gap: '14px'
  },
  card: {
    background: '#ffffff',
    border: '1px solid #eaeaea',
    borderRadius: '0px',
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '12px',
    height: '135px'
  },
  cardLeft: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1
  },
  cardTitle: {
    fontSize: '13.5px',
    fontWeight: '400',
    color: '#171717',
    lineHeight: '1.45',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  cardCategory: {
    fontSize: '11.5px',
    color: '#71717a',
    fontWeight: '400',
    marginTop: '4px'
  },
  cardThumb: {
    width: '60px',
    height: '60px',
    borderRadius: '0px',
    objectFit: 'cover',
    flexShrink: 0
  }
};
