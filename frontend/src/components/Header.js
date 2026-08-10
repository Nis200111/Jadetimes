'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';

export default function Header({ active = "Home" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNewsSubmenu, setShowNewsSubmenu] = useState(false);
  const [showSportsSubmenu, setShowSportsSubmenu] = useState(false);
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

  const primaryLinks = [
    { name: "News", path: "/category/news" },
    { name: "Opinion", path: "/category/opinion" },
    { name: "Sports", path: "/category/sports" },
    { name: "Travel", path: "/category/travel" },
    { name: "Culture", path: "/category/culture" },
    { name: "Entertainment", path: "/category/entertainment" },
    { name: "Fashion", path: "/category/fashion" },
    { name: "Innovation", path: "/category/innovation" },
    { name: "Business", path: "/category/business" },
    { name: "Political", path: "/category/political" },
    { name: "Universe", path: "/category/universe" },
    { name: "Health", path: "/category/health" },
    { name: "Law", path: "/category/law" }
  ];

  const secondaryLinks = [
    { name: "Jadetimes Magazines", path: "/magazines" },
    { name: "Jadetimes Podcast", path: "/podcast" },
    { name: "Jadetimes Journals", path: "/journals" },
    { name: "Team", path: "/team" },
    { name: "Jadetimes Store", path: "/store" },
    { name: "Advertise With Us", path: "/advertise" },
    { name: "Job Vacancies", path: "/jobs" },
    { name: "Courses", path: "/courses" },
    { name: "World Journalist Rankings", path: "/rankings" },
    { name: "Jadetimes Contributor Program", path: "/contributor" },
    { name: "International Research Conference 2025", path: "/conference" }
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
          <a href="/conference" style={styles.conferenceLink} className="header-conference-link">
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

      {/* Drawer Backdrop Overlay */}
      {mobileMenuOpen && (
        <div style={styles.mobileBackdrop} onClick={() => {
          setMobileMenuOpen(false);
          setShowNewsSubmenu(false);
        }} />
      )}

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div style={{ display: 'flex', position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 10000 }}>
          <div style={styles.mobileDrawer}>
            {/* Top row */}
            <div style={styles.drawerTopRow}>
              <Link 
                href="/subscribe" 
                style={styles.drawerSubscribe} 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowNewsSubmenu(false);
                }}
              >
                Subscribe to newsletters
              </Link>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowNewsSubmenu(false);
                }} 
                style={styles.drawerCloseBtn}
                aria-label="Close menu"
              >
                <X size={20} color="#ffffff" />
              </button>
            </div>

             {/* Primary category list */}
            <nav style={styles.drawerPrimaryNav}>
              {primaryLinks.map((cat, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                  {cat.name === 'News' ? (
                    <button
                      onMouseEnter={() => {
                        setShowNewsSubmenu(true);
                        setShowSportsSubmenu(false);
                      }}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setShowNewsSubmenu(false);
                      }}
                      style={{
                        ...styles.drawerPrimaryLink,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '6px 0',
                        width: '100%',
                        textAlign: 'left',
                        display: 'block',
                        color: (active === 'News' || showNewsSubmenu) ? '#ef4444' : '#ffffff'
                      }}
                      className="drawer-primary-link"
                    >
                      {cat.name}
                    </button>
                  ) : cat.name === 'Sports' ? (
                    <button
                      onMouseEnter={() => {
                        setShowSportsSubmenu(true);
                        setShowNewsSubmenu(false);
                      }}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setShowSportsSubmenu(false);
                      }}
                      style={{
                        ...styles.drawerPrimaryLink,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '6px 0',
                        width: '100%',
                        textAlign: 'left',
                        display: 'block',
                        color: (active === 'Sports' || showSportsSubmenu) ? '#ef4444' : '#ffffff'
                      }}
                      className="drawer-primary-link"
                    >
                      {cat.name}
                    </button>
                  ) : (
                    <Link 
                      href={cat.path} 
                      style={{
                        ...styles.drawerPrimaryLink,
                        color: cat.name === active ? '#ef4444' : '#ffffff'
                      }}
                      onMouseEnter={() => {
                        setShowNewsSubmenu(false);
                        setShowSportsSubmenu(false);
                      }}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setShowNewsSubmenu(false);
                        setShowSportsSubmenu(false);
                      }}
                      className="drawer-primary-link"
                    >
                      {cat.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div style={styles.drawerDivider} />

            {/* Secondary links list */}
            <nav style={styles.drawerSecondaryNav}>
              {secondaryLinks.map((cat, i) => (
                <Link 
                  key={i} 
                  href={cat.path} 
                  style={styles.drawerSecondaryLink}
                  onMouseEnter={() => {
                    setShowNewsSubmenu(false);
                    setShowSportsSubmenu(false);
                  }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowNewsSubmenu(false);
                    setShowSportsSubmenu(false);
                  }}
                  className="drawer-secondary-link"
                >
                  {cat.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Secondary Flyout for News Submenu */}
          {showNewsSubmenu && (
            <div style={styles.drawerSubmenu}>
              <h4 style={styles.submenuHeader}>{todayDate}</h4>
              <nav style={styles.submenuNav}>
                <Link href="/category/news?topic=usa" className="drawer-submenu-link" onClick={() => { setMobileMenuOpen(false); setShowNewsSubmenu(false); }}>USA</Link>
                <Link href="/category/news?topic=israel-gaza" className="drawer-submenu-link" onClick={() => { setMobileMenuOpen(false); setShowNewsSubmenu(false); }}>Israel-Gaza War</Link>
                <Link href="/category/news?topic=australia" className="drawer-submenu-link" onClick={() => { setMobileMenuOpen(false); setShowNewsSubmenu(false); }}>Australia</Link>
                <Link href="/category/news?topic=asia" className="drawer-submenu-link" onClick={() => { setMobileMenuOpen(false); setShowNewsSubmenu(false); }}>Asia</Link>
                <Link href="/category/news?topic=africa" className="drawer-submenu-link" onClick={() => { setMobileMenuOpen(false); setShowNewsSubmenu(false); }}>Africa</Link>
                <Link href="/category/news?topic=europe" className="drawer-submenu-link" onClick={() => { setMobileMenuOpen(false); setShowNewsSubmenu(false); }}>Europe</Link>
                <Link href="/category/news?topic=ukraine-russia" className="drawer-submenu-link" onClick={() => { setMobileMenuOpen(false); setShowNewsSubmenu(false); }}>Ukraine-Russia War</Link>
              </nav>
            </div>
          )}

          {/* Secondary Flyout for Sports Submenu */}
          {showSportsSubmenu && (
            <div style={styles.drawerSubmenu}>
              <h4 style={styles.submenuHeader}>{todayDate}</h4>
              <nav style={styles.submenuNav}>
                <Link href="/category/sports?topic=wwe" className="drawer-submenu-link" onClick={() => { setMobileMenuOpen(false); setShowSportsSubmenu(false); }}>WWE</Link>
                <Link href="/category/sports?topic=cricket" className="drawer-submenu-link" onClick={() => { setMobileMenuOpen(false); setShowSportsSubmenu(false); }}>Cricket</Link>
              </nav>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    width: '100%',
    position: 'fixed', // Updated to fixed position to guarantee it stays at the top of the viewport
    top: 0,
    left: 0,
    zIndex: 1000,
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
    background: '#ffffff'
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
  mobileBackdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.4)',
    zIndex: 9999
  },
  mobileDrawer: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: '280px',
    background: '#111113', // Deep slate black matching the screenshot
    color: '#ffffff',
    zIndex: 10000,
    boxShadow: '5px 0 25px rgba(0,0,0,0.4)',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    padding: '24px',
    fontFamily: 'var(--font-main), sans-serif'
  },
  drawerTopRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '26px'
  },
  drawerSubscribe: {
    color: '#a1a1aa',
    fontSize: '12px',
    fontWeight: '600',
    textDecoration: 'none',
    letterSpacing: '0.5px'
  },
  drawerCloseBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  drawerPrimaryNav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px'
  },
  drawerPrimaryLink: {
    fontSize: '15px',
    fontWeight: '500',
    textDecoration: 'none',
    letterSpacing: '0.4px',
    transition: 'color 0.2s'
  },
  drawerDivider: {
    height: '1px',
    background: '#27272a',
    margin: '20px 0'
  },
  drawerSecondaryNav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  drawerSecondaryLink: {
    fontSize: '13px',
    fontWeight: '400',
    color: '#a1a1aa',
    textDecoration: 'none',
    letterSpacing: '0.4px',
    transition: 'color 0.2s'
  },
  drawerSubmenu: {
    position: 'fixed',
    top: 0,
    left: '280px',
    bottom: 0,
    width: '280px',
    background: '#111113', // matching the black background of the primary menu
    color: '#ffffff',
    zIndex: 10001,
    borderLeft: '1px solid #27272a',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    padding: '24px 0px',
    fontFamily: 'var(--font-main), sans-serif',
    boxShadow: '5px 0 25px rgba(0,0,0,0.3)'
  },
  submenuHeader: {
    fontSize: '12px',
    color: '#a1a1aa',
    fontWeight: '600',
    padding: '0px 24px 26px 24px',
    margin: 0,
    letterSpacing: '0.5px'
  },
  submenuNav: {
    display: 'flex',
    flexDirection: 'column'
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
    .drawer-primary-link {
      color: #ffffff;
      transition: color 0.2s;
    }
    .drawer-primary-link:hover {
      color: #ef4444 !important;
    }
    .drawer-secondary-link {
      color: #a1a1aa;
      transition: color 0.2s;
    }
    .drawer-secondary-link:hover {
      color: #ef4444 !important;
    }
    .drawer-submenu-link {
      color: #ffffff;
      transition: color 0.2s;
      display: block;
      padding: 12px 24px;
      text-decoration: none;
      font-weight: 500;
      border-bottom: 1px solid #27272a;
    }
    .drawer-submenu-link:hover {
      color: #ef4444 !important;
    }
  `;
  document.head.appendChild(styleSheet);
}
