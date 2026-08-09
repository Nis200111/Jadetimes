'use client';

import React from 'react';
import Link from 'next/link';

export default function CategoryLists({ breakdown }) {
  if (!breakdown) return null;

  const regions = [
    { title: "Asia", key: "asia" },
    { title: "USA", key: "usa" },
    { title: "Australia", key: "australia" },
    { title: "Europe", key: "europe" }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {regions.map((reg) => {
            const list = breakdown[reg.key] || [];
            return (
              <div key={reg.key} style={styles.column}>
                {/* Column Header */}
                <div style={styles.colHeader}>
                  <h3 style={styles.colTitle}>{reg.title}</h3>
                </div>
                
                {/* List of articles */}
                <div style={styles.listContainer}>
                  {list.slice(0, 3).map((item) => (
                    <Link key={item.id} href="/" style={styles.itemLink}>
                      <div style={styles.listItem}>
                        <p style={styles.itemTitle}>{item.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '40px 5%',
    background: '#ffffff',
    width: '100%'
  },
  container: {
    maxWidth: '1350px',
    margin: '0 auto'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '40px'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  colHeader: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #18181b',
    paddingBottom: '8px',
    marginBottom: '20px'
  },
  colTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#18181b',
    margin: 0
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  itemLink: {
    display: 'block',
    textDecoration: 'none',
    transition: 'opacity 0.2s'
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column'
  },
  itemTitle: {
    fontSize: '14.5px',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#18181b',
    margin: 0,
    cursor: 'pointer',
    ':hover': {
      color: '#ef4444'
    }
  }
};
