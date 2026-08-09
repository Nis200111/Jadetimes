'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const categories = [
    'News', 'Business', 'Sports', 'Travel', 'Culture', 
    'Entertainment', 'Innovation', 'Technology', 'Politicle', 
    'Universe', 'Fashion', 'War In Ukraine', 'Israel-Gaza War', 
    'USA', 'Europe', 'Australia', 'Africa', 'Asia', 'WWE'
  ];

  const footerLinks = [
    'Terms & Conditions', 'About Jadetimes', 'Privacy Policy',
    'Join Jadetimes Media', 'Cookies', 'Get Published Online Articles',
    'Jadetimes Journals', 'FAQ'
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Subscription successful!');
  };

  return (
    <footer className="footer-container">
      {/* Row 1 - Logo and Newsletter Section */}
      <div className="footer-newsletter-wrap">
        <div className="footer-newsletter-content">
          <div className="footer-logo-area">
            <img 
              src="/images/sds_edited.avif" 
              alt="Jadetimes Logo" 
              style={{ height: '40px', width: 'auto', objectFit: 'contain', marginBottom: '10px', display: 'block' }} 
            />
            <div className="footer-logo-links">
              <Link href="/advertise">Advertise with us</Link>
              <span className="footer-divider"> &nbsp;|&nbsp; </span>
              <Link href="/talk-to-us">Talk to us</Link>
            </div>
          </div>
          <div className="footer-newsletter-form-container">
            <span className="footer-newsletter-label">SIGN UP FOR OUR NEWSLETTER</span>
            <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="e.g., email@example.com"
                className="footer-newsletter-input"
                required
              />
              <button type="submit" className="footer-newsletter-btn">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Row 2 - Category Links and Social Media Icons */}
      <div className="footer-categories-wrap">
        <div className="footer-categories-content">
          <div className="footer-categories-list">
            {categories.map((cat, index) => (
              <Link 
                key={index}
                href={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`} 
                className="footer-category-link"
              >
                {cat}
              </Link>
            ))}
          </div>
          <div className="footer-social-icons">
            <a href="https://wa.me/#" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.465L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.023 14.07 1 11.998 1 6.558 1 2.135 5.371 2.131 10.8c-.002 1.74.457 3.442 1.332 4.957l-.982 3.58 3.696-.983zM17.15 13.94c-.283-.141-1.674-.827-1.933-.921-.259-.096-.449-.141-.637.142-.188.282-.729.921-.894 1.107-.165.185-.329.209-.612.068-.283-.141-1.196-.441-2.278-1.408-.842-.751-1.41-1.68-1.575-1.962-.165-.282-.018-.434.123-.574.127-.127.283-.329.424-.494.141-.165.188-.282.283-.47.094-.188.047-.353-.024-.494-.071-.141-.637-1.531-.873-2.1-.23-.554-.462-.48-.637-.489-.165-.006-.353-.007-.542-.007-.188 0-.494.071-.753.353-.259.282-.99 1.011-.99 2.47 0 1.459 1.059 2.87 1.201 3.059.141.188 2.083 3.182 5.048 4.461.705.305 1.256.487 1.684.623.709.226 1.353.194 1.863.118.568-.085 1.674-.682 1.909-1.341.236-.66.236-1.223.165-1.341-.071-.118-.259-.188-.542-.329z"/></svg>
            </a>
            <a href="https://tiktok.com/#" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="TikTok">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
            <a href="https://twitter.com/#" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
            </a>
            <a href="https://facebook.com/#" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://youtube.com/#" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96C5.12 19 12 19 12 19s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.12 29 29 0 0 0-.46-5.12z"/><polygon points="9.75 15.02 15.5 11.54 9.75 8.06 9.75 15.02"/></svg>
            </a>
            <a href="https://instagram.com/#" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://linkedin.com/#" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Row 3 - Footer Bottom in Columns */}
      <div className="footer-bottom-wrap">
        <div className="footer-bottom-content">
          <div className="footer-bottom-left">
            <span>© 2024 Jadetimes Media LLC.</span>
            <span>All Rights Reserved</span>
          </div>

          <div className="footer-bottom-right">
            <div className="footer-legal-links-row">
              {footerLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <Link 
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="footer-legal-link"
                  >
                    {link}
                  </Link>
                  <span className="footer-divider"> &nbsp;|&nbsp; </span>
                </React.Fragment>
              ))}
              <span className="footer-legal-link">To report security issues email us at info@jadetimes.com</span>
              <span className="footer-divider"> &nbsp;|&nbsp; </span>
              <Link href="/shop" className="footer-legal-link">Jadetimes Shop</Link>
              <span className="footer-divider"> &nbsp;|&nbsp; </span>
              <Link href="/blogs" className="footer-legal-link">Blogs</Link>
              <span className="footer-divider"> &nbsp;|&nbsp; </span>
              <span className="footer-disclaimer-text">
                The JadeTimes holds no responsibility for the content of external websites. 
                For more information, please review our policy on external linking.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
