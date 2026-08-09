'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';

export default function Header({ active = "Home" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [todayDate, setTodayDate] = useState('');

  useEffect(() => {
    // Format date: "Monday, August 3, 2026"
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    setTodayDate(new Date().toLocaleDateString('en-US', options));
  }, []);

  const categories = [
    { name: "Home", path: "/" },
    { name: "News", path: "/category/news" },
    { name: "Opinion", path: "/category/opinion" },
    { name: "Business", path: "/category/business" },
    { name: "Sports", path: "/category/sports" },
    { name: "Travel", path: "/category/travel" },
    { name: "Culture", path: "/category/culture" },
    { name: "Entertainment", path: "/category/entertainment" },
    { name: "Innovation", path: "/category/innovation" },
    { name: "Political", path: "/category/political" },
    { name: "Universe", path: "/category/universe" },
    { name: "Fashion", path: "/category/fashion" },
    { name: "Health", path: "/category/health" },
    { name: "Law", path: "/category/law" }
  ];

  return (
    <header style={styles.header}>
      {/* 1. Top Bar (Black Background) */}
      <div style={styles.topBar}>
        {/* Left: Menu, Subscribe, Date */}
        <div style={styles.topLeft}>
          <button 
            style={styles.menuBtn} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="4" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="3.5" />
                <line x1="9" y1="15" x2="26" y2="15" stroke="currentColor" strokeWidth="3.5" />
                <line x1="4" y1="21" x2="21" y2="21" stroke="currentColor" strokeWidth="3.5" />
              </svg>
            )}
          </button>
          
          <Link href="/subscribe" className="header-subscribe-btn">
            Subscribe : 49.99/Year
          </Link>
          
          <span className="header-date-text">{todayDate}</span>
        </div>

        <Link href="/" style={styles.logoContainer}>
          <img src="/images/Logo.avif" alt="Jadetimes Logo" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
        </Link>

        {/* Right: Join Now, Log In, Search */}
        <div style={styles.topRight}>
          <a href="#" style={styles.conferenceLink} className="header-conference-link">
            <span style={{ textDecoration: 'underline', fontWeight: '700', marginRight: '4px' }}>Join Now</span> International Research Conference 2025
          </a>
          
          <Link href="/login" style={styles.loginLink}>
            Log In
          </Link>
          
          <button style={styles.searchBtn} aria-label="Search">
            <Search size={22} />
          </button>
        </div>
      </div>

      {/* 2. Bottom Bar (White Background) */}
      <div style={styles.bottomBar} className="header-bottom-bar">
        <nav style={styles.nav}>
          {categories.map((cat, i) => (
            <Link 
              key={i} 
              href={cat.path} 
              style={{
                ...styles.navLink,
                color: cat.name === active ? '#ef4444' : '#111115'
              }}
            >
              {cat.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div style={styles.mobileDrawer}>
          <nav style={styles.mobileNav}>
            {categories.map((cat, i) => (
              <Link 
                key={i} 
                href={cat.path} 
                style={{
                  ...styles.mobileLink,
                  color: cat.name === active ? '#ef4444' : '#111115'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
            <div style={styles.mobileDivider} />
            <Link href="/subscribe" style={styles.mobileLinkSpecial} onClick={() => setMobileMenuOpen(false)}>
              Subscribe : 49.99/Year
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    width: '100%',
    position: 'sticky', // Restored to sticky so it stays visible at the top when scrolling
    top: 0,
    zIndex: 1000,
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
  },
  topBar: {
    background: '#141416', // Slate black
    height: '64px',
    padding: '0 3%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#ffffff',
    borderBottom: '1px solid #232326'
  },
  topLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flex: '1 1 30%'
  },
  menuBtn: {
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  subscribeBtn: {
    background: '#ff3b30', // Vibrant flat red
    color: '#ffffff',
    fontSize: '11.5px',
    fontWeight: '800',
    padding: '7px 14px',
    borderRadius: '2px',
    textTransform: 'uppercase',
    letterSpacing: '0.4px',
    whiteSpace: 'nowrap',
    transition: 'background 0.2s',
    display: 'none',
    '@media(min-width: 540px)': {
      display: 'inline-block'
    }
  },
  dateText: {
    fontSize: '11px',
    color: '#a1a1aa',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    display: 'none',
    '@media(min-width: 900px)': {
      display: 'inline'
    }
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'center',
    flex: '1 1 40%'
  },
  logoSymbol: {
    border: '1.5px solid #ffffff',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '2px'
  },
  logoSymbolText: {
    fontFamily: "var(--font-primary)",
    fontSize: '20px',
    fontWeight: '900',
    color: '#ffffff',
    lineHeight: '1',
    letterSpacing: '-1px'
  },
  logoText: {
    fontFamily: "var(--font-primary)",
    fontSize: '26px',
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: '0.5px'
  },
  topRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    justifyContent: 'flex-end',
    flex: '1 1 35%',
    paddingRight: '25px'
  },
  conferenceLink: {
    fontSize: '11px',
    fontWeight: '400',
    color: '#e4e4e7',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    marginRight: 'auto',
    display: 'inline-block'
  },
  loginLink: {
    fontSize: '13.5px',
    fontWeight: '700',
    color: '#ffffff',
    transition: 'color 0.2s',
    whiteSpace: 'nowrap',
    ':hover': {
      color: '#ff3b30'
    }
  },
  searchBtn: {
    color: '#ffffff',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center'
  },
  bottomBar: {
    background: '#ffffff',
    height: '46px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'auto',
    scrollbarWidth: 'none', // hide firefox scrollbar
    msOverflowStyle: 'none' // hide IE scrollbar
  },
  nav: {
    display: 'flex',
    gap: '24px',
    padding: '0 20px',
    alignItems: 'center'
  },
  navLink: {
    fontSize: '13.5px',
    fontWeight: '700',
    textTransform: 'capitalize',
    letterSpacing: '0.2px',
    transition: 'color 0.2s',
    whiteSpace: 'nowrap',
    ':hover': {
      color: '#ef4444'
    }
  },
  mobileDrawer: {
    position: 'absolute',
    top: '64px',
    left: 0,
    right: 0,
    background: '#ffffff',
    borderBottom: '2px solid #e4e4e7',
    padding: '20px',
    boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
    maxHeight: '80vh',
    overflowY: 'auto'
  },
  mobileNav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  mobileLink: {
    fontSize: '15px',
    fontWeight: '700',
    padding: '6px 0'
  },
  mobileDivider: {
    height: '1px',
    background: '#e4e4e7',
    margin: '10px 0'
  },
  mobileLinkSpecial: {
    color: '#ff3b30',
    fontSize: '15px',
    fontWeight: '800'
  }
};

// Inject responsive overrides for window sizes in browser environment
if (typeof window !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = `
    @media (max-width: 540px) {
      a[style*="Subscribe : 49.99/Year"] {
        display: none !important;
      }
    }
    @media (max-width: 900px) {
      span[style*="dateText"] {
        display: none !important;
      }
    }
    @media (max-width: 1200px) {
      a[style*="conferenceLink"] {
        display: none !important;
      }
    }
  `;
  document.head.appendChild(styleSheet);
}
