'use client';

import React from 'react';
import { Flame } from 'lucide-react';

export default function BreakingNewsTagRow() {
  const topics = [
    "Voyager 1 Signal",
    "Sweden Smart Cities",
    "Ocean Temperature Crisis",
    "Plastic-Eating Enzyme",
    "Atacama Solar Grid",
    "Quantum Encryption"
  ];

  return (
    <div style={styles.container}>
      <div style={styles.tagWrapper}>
        <span style={styles.tag}>
          <Flame size={12} style={{ marginRight: '4px', fill: 'currentColor' }} />
          Breaking
        </span>
      </div>
      <div style={styles.scrollWrapper}>
        <div style={styles.scrollContent}>
          {topics.map((topic, i) => (
            <span key={i} style={styles.topicItem}>
              <span style={styles.dot}>#</span>
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1440px',
    margin: '0 auto 20px auto',
    padding: '0 5%',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    height: '40px',
    borderBottom: '1px solid #e4e4e7'
  },
  tagWrapper: {
    flexShrink: 0
  },
  tag: {
    background: '#be123c', // breaking news red
    color: '#fff',
    padding: '4px 10px',
    borderRadius: '3px',
    fontSize: '11px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    display: 'inline-flex',
    alignItems: 'center'
  },
  scrollWrapper: {
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  scrollContent: {
    display: 'flex',
    gap: '24px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#4b5563',
    whiteSpace: 'nowrap'
  },
  topicItem: {
    cursor: 'pointer',
    transition: 'color 0.2s',
    ':hover': {
      color: '#be123c'
    }
  },
  dot: {
    color: '#be123c',
    marginRight: '4px',
    fontWeight: '800'
  }
};
