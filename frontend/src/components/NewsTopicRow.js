'use client';

import React from 'react';
import Link from 'next/link';

export default function NewsTopicRow({ topics }) {
  if (!topics || topics.length === 0) return null;

  return (
    <div className="news-topic-row">
      {topics.map((topic, i) => (
        <Link key={i} href={topic.path} className="news-topic-link">
          {topic.name}
        </Link>
      ))}
    </div>
  );
}
