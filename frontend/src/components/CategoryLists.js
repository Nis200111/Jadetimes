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
                  <span style={styles.redDot} />
                  <h3 style={styles.colTitle}>{reg.title}</h3>
                </div>
                
                {/* List of articles */}
                <div style={styles.listContainer}>
                  {list.slice(0, 3).map((item) => (
                    <Link key={item.id} href="/" style={styles.itemLink}>
                      <div style={styles.listItem}>
                        <p style={styles.itemTitle}>{item.title}</p>
                        <span style={styles.itemDate}>Read Article →</span>
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
    padding: '30px 5%',
    background: '#ffffff',
    width: '100%',
    borderBottom: '1px solid #e4e4e7'
  },
  container: {
    maxWidth: '1350px',
    margin: '0 auto'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '30px'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  colHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    borderBottom: '2px solid #18181b',
    paddingBottom: '8px',
    marginBottom: '16px'
  },
  redDot: {
    width: '6px',
    height: '6px',
    background: '#ef4444',
    borderRadius: '50%'
  },
  colTitle: {
    fontSize: '14px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: '#18181b',
    margin: 0
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  itemLink: {
    display: 'block',
    padding: '6px 0',
    transition: 'opacity 0.2s'
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  itemTitle: {
    fontSize: '13px',
    fontWeight: '700',
    lineHeight: '1.4',
    color: '#27272a',
    margin: 0,
    cursor: 'pointer',
    ':hover': {
      color: '#ef4444'
    }
  },
  itemDate: {
    fontSize: '9.5px',
    color: '#ef4444',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.4px',
    marginTop: '2px'
  }
};
