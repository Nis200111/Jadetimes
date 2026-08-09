'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import MinimalPagination from './MinimalPagination';

const PAGE_SIZE = 10;

export default function MoreFromSection({ region, articles }) {
  const [page, setPage] = useState(1);

  if (!articles || articles.length === 0) return null;

  const totalPages = Math.max(Math.ceil(articles.length / PAGE_SIZE), 5);
  const visible = articles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <section className="more-from-section">
      <div className="more-from-header">
        <h2 className="more-from-title">
          More From <span className="more-from-region">{region}</span>
        </h2>
      </div>

      <div className="more-from-grid">
        {visible.map((article) => (
          <Link href={`/article/${article.id}`} key={article.id} className="more-from-card">
            <div className="more-from-card-body">
              <h3 className="more-from-card-title">{article.title}</h3>
              {article.author && (
                <span className="more-from-card-author">{article.author}</span>
              )}
              {(article.timeAgo || article.readTime) && (
                <span className="more-from-card-meta">
                  {[article.timeAgo, article.readTime].filter(Boolean).join('  •  ')}
                </span>
              )}
            </div>
            <div className="more-from-card-thumb">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="72px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Link>
        ))}
      </div>

      <MinimalPagination
        totalPages={totalPages}
        currentPage={page}
        onPageChange={setPage}
      />
    </section>
  );
}
