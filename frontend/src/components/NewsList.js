'use client';

import React from 'react';
import NewsCard from './NewsCard';

export default function NewsList({ articles }) {
  if (!articles || articles.length === 0) {
    return <div style={styles.empty}>No articles available.</div>;
  }

  return (
    <div style={styles.grid}>
      {articles.map((article) => (
        <div key={article.id} style={styles.gridItem}>
          <NewsCard article={article} />
        </div>
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '30px',
    width: '100%'
  },
  gridItem: {
    display: 'flex'
  },
  empty: {
    padding: '40px',
    textAlign: 'center',
    color: '#6b7280',
    fontSize: '15px'
  }
};
