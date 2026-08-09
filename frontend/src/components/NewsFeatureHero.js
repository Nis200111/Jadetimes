'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsFeatureHero({ featured, sidebar }) {
  if (!featured) return null;

  return (
    <section className="news-hero-grid">
      {/* Left: bordered feature card with image + copy */}
      <article className="news-hero-feature">
        <Link href={`/article/${featured.id}`} className="news-hero-feature-image">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </Link>

        <div className="news-hero-feature-body">
          <span className="news-hero-author">{featured.author}</span>
          <span className="news-hero-time">{featured.timeAgo}</span>
          <Link href={`/article/${featured.id}`} className="news-hero-title-link">
            <h2 className="news-hero-title">{featured.title}</h2>
          </Link>
          <p className="news-hero-desc">{featured.description}</p>
        </div>
      </article>

      {/* Right: stacked bordered mini cards */}
      <aside className="news-hero-side">
        {sidebar && sidebar.map((item) => (
          <Link href={`/article/${item.id}`} key={item.id} className="news-side-card">
            <div className="news-side-card-body">
              <h3 className="news-side-title">{item.title}</h3>
              <span className="news-side-category">{item.category}</span>
            </div>
            <div className="news-side-thumb">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="60px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Link>
        ))}
      </aside>
    </section>
  );
}
