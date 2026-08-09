'use client';

import React from 'react';

export default function CategoryPageTitle({ title }) {
  return (
    <div className="category-page-title-wrap">
      <h1 className="category-page-title">{title}</h1>
      <div className="category-page-title-rule" />
    </div>
  );
}
