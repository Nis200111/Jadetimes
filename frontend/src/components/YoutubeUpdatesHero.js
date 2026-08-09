'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function YoutubeUpdatesHero({ feature }) {
  const [playing, setPlaying] = useState(false);

  if (!feature) return null;

  return (
    <section className="yt-hero">
      {/* Full-bleed still frame behind everything */}
      <div className="yt-hero-bg">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="yt-hero-tint" />

      <div className="yt-hero-content">
        {/* Left: YouTube player (facade until clicked, then the real embed) */}
        <div className="yt-hero-player">
          {playing && feature.videoId ? (
            <iframe
              className="yt-hero-iframe"
              src={`https://www.youtube-nocookie.com/embed/${feature.videoId}?autoplay=1&rel=0`}
              title={feature.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className="yt-hero-facade"
              onClick={() => feature.videoId && setPlaying(true)}
              disabled={!feature.videoId}
              aria-label={`Play video: ${feature.title}`}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                style={{ objectFit: 'cover' }}
              />
              <span className="yt-facade-topbar">
                <span className="yt-facade-mark">JT</span>
                <span className="yt-facade-titles">
                  <span className="yt-facade-title">{feature.title}</span>
                  <span className="yt-facade-channel">{feature.channel}</span>
                </span>
              </span>
              <span className="yt-facade-play">
                <svg viewBox="0 0 68 48" width="58" height="41" aria-hidden="true">
                  <path
                    d="M66.52 7.74a8 8 0 0 0-5.63-5.66C55.79 1 34 1 34 1s-21.8 0-26.89 1.08a8 8 0 0 0-5.63 5.66A83 83 0 0 0 .5 24a83 83 0 0 0 .98 16.26 8 8 0 0 0 5.63 5.66C12.2 47 34 47 34 47s21.79 0 26.89-1.08a8 8 0 0 0 5.63-5.66A83 83 0 0 0 67.5 24a83 83 0 0 0-.98-16.26z"
                    fill="#ff0000"
                  />
                  <path d="M27 34l18-10-18-10z" fill="#ffffff" />
                </svg>
              </span>
              <span className="yt-facade-watch">Watch on YouTube</span>
            </button>
          )}
        </div>

        {/* Right: editorial copy */}
        <div className="yt-hero-copy">
          <span className="yt-hero-badge">YOUTUBE UPDATES</span>
          <h2 className="yt-hero-title">{feature.title}</h2>
          <p className="yt-hero-desc">{feature.description}</p>
          <Link href={`/article/${feature.id}`} className="yt-hero-more">
            Read More <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
