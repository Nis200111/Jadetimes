'use client';

import React from 'react';

export default function CategoryPageTitle({ title }) {
  if (title && title.includes('|')) {
    const parts = title.split('|');
    return (
      <div className="category-page-title-wrap">
        <h1 className="category-page-title">
          <span style={{ fontWeight: 400, color: '#71717a' }}>{parts[0].trim()}</span>
          <span style={{ fontWeight: 400, color: '#71717a', margin: '0 8px' }}>|</span>
          <span style={{ fontWeight: 700, color: '#171717' }}>{parts[1].trim()}</span>
        </h1>
        <div className="category-page-title-rule" />
      </div>
    );
  }

  return (
    <div className="category-page-title-wrap">
      <h1 className="category-page-title">{title}</h1>
      <div className="category-page-title-rule" />
    </div>
  );
}
