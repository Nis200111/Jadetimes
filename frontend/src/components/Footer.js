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
            <h2 className="footer-logo-title">Jadetimes</h2>
            <div className="footer-logo-links">
              <Link href="/advertise">Advertise with us</Link>
              <span className="footer-divider">|</span>
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
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
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
                  <span className="footer-divider">|</span>
                </React.Fragment>
              ))}
              <span className="footer-legal-link">To report security issues email us at info@jadetimes.com</span>
              <span className="footer-divider">|</span>
              <Link href="/shop" className="footer-legal-link">Jadetimes Shop</Link>
              <span className="footer-divider">|</span>
              <Link href="/blogs" className="footer-legal-link">Blogs</Link>
            </div>
            <p className="footer-disclaimer-text">
              The JadeTimes holds no responsibility for the content of external websites. 
              For more information, please review our policy on external linking.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
