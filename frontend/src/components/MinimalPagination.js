'use client';

import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export default function MinimalPagination({ totalPages = 5, currentPage = 1, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const goTo = (page) => {
    const next = Math.min(Math.max(page, 1), totalPages);
    if (next !== currentPage && onPageChange) onPageChange(next);
  };

  return (
    <nav className="mini-pagination" aria-label="Pagination">
      <button
        className="mini-page-arrow"
        onClick={() => goTo(1)}
        disabled={currentPage === 1}
        aria-label="First page"
      >
        <ChevronsLeft size={16} />
      </button>
      <button
        className="mini-page-arrow"
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`mini-page-num${page === currentPage ? ' is-active' : ''}`}
          onClick={() => goTo(page)}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}

      <button
        className="mini-page-arrow"
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>
      <button
        className="mini-page-arrow"
        onClick={() => goTo(totalPages)}
        disabled={currentPage === totalPages}
        aria-label="Last page"
      >
        <ChevronsRight size={16} />
      </button>
    </nav>
  );
}
