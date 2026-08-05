'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const categories = [
    'News', 'Business', 'Sports', 'Travel', 'Culture', 
    'Entertainment', 'Innovation', 'Technology', 'Politicle', 
    'Universe', 'Fashion', 'WarIn Ukraine', 'Israel-Gaza War', 
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
      {/* Row 1 - Newsletter Section */}
      <div className="footer-newsletter-wrap">
        <div className="footer-newsletter-content">
          <h3 className="footer-newsletter-label">
            SIGN UP FOR OUR NEWSLETTER
          </h3>
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

      {/* Row 2 - Category Links */}
      <div className="footer-categories-wrap">
        <div className="footer-categories-content">
          {categories.map((cat, index) => (
            <React.Fragment key={index}>
              <Link 
                href={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`} 
                className="footer-category-link"
              >
                {cat}
              </Link>
              {index < categories.length - 1 && (
                <span className="footer-divider">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Row 3 - Footer Bottom */}
      <div className="footer-bottom-wrap">
        <div className="footer-bottom-content">
          {/* Copyright */}
          <div className="footer-copyright">
            © 2024 Jadetimes Media LLC. All Rights Reserved
          </div>

          {/* Center Links */}
          <div className="footer-center-links">
            {footerLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Link 
                  href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="footer-legal-link"
                >
                  {link}
                </Link>
                {index < footerLinks.length - 1 && (
                  <span className="footer-divider">|</span>
                )}
              </React.Fragment>
            ))}
            <span className="footer-divider">|</span>
            <span className="footer-legal-link">To report security issues email us at info@jadetimescom</span>
          </div>

          {/* Right Links & Disclaimer */}
          <div className="footer-right-text">
            <Link href="/shop" className="footer-legal-link">
              Jadetimes Shop
            </Link>
            <span className="footer-divider"> | </span>
            <Link href="/blogs" className="footer-legal-link">
              Blogs
            </Link>
            <span className="footer-divider"> | </span>
            <span>
              The JadeTimes holds no responsibility for the content of external websites. 
              For more information, please review our policy on external linking.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
