'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Pagination() {
  return (
    <div style={styles.container}>
      <button style={{ ...styles.pageBtn, ...styles.activeBtn }}>1</button>
      <button style={styles.pageBtn}>2</button>
      <button style={styles.pageBtn}>3</button>
      <button style={styles.pageBtn}>4</button>
      <span style={styles.dots}>...</span>
      <button style={styles.pageBtn}>12</button>
      <button style={styles.nextBtn}>
        <span>Next</span>
        <ChevronRight size={14} />
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    margin: '50px 0 20px 0',
    width: '100%'
  },
  pageBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '4px',
    border: '1px solid #e4e4e7',
    background: '#fff',
    color: '#09090b',
    fontSize: '14px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
    ':hover': {
      borderColor: '#be123c',
      color: '#be123c'
    }
  },
  activeBtn: {
    background: '#be123c',
    borderColor: '#be123c',
    color: '#fff',
    ':hover': {
      color: '#fff'
    }
  },
  dots: {
    color: '#71717a',
    padding: '0 4px',
    fontWeight: '700'
  },
  nextBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    height: '40px',
    padding: '0 16px',
    borderRadius: '4px',
    border: '1px solid #e4e4e7',
    background: '#fff',
    color: '#09090b',
    fontSize: '14px',
    fontWeight: '700',
    transition: 'all 0.2s',
    ':hover': {
      borderColor: '#be123c',
      color: '#be123c'
    }
  }
};
