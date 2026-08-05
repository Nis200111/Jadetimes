'use client';

import React from 'react';
import Link from 'next/link';

export default function LatestUpdatesBar({ updates }) {
  if (!updates || updates.length === 0) return null;

  return (
    <div className="latest-updates-outer">
      <div className="latest-updates-container">
        {updates.slice(0, 4).map((item, index) => (
          <div key={item.id} className="latest-updates-item">
            {index === 0 && (
              <div className="latest-updates-badge">
                LATEST UPDATES
              </div>
            )}
            <span className="latest-updates-time">{item.timeAgo}</span>
            <Link href="/" className="latest-updates-title">
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
