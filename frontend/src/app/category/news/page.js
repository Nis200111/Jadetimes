'use client';

import React, { useState, useEffect } from 'react';

import Header from '../../../components/Header';
import NewsTopicRow from '../../../components/NewsTopicRow';
import CategoryPageTitle from '../../../components/CategoryPageTitle';
import LatestUpdatesBar from '../../../components/LatestUpdatesBar';
import NewsFeatureHero from '../../../components/NewsFeatureHero';
import NewsCard from '../../../components/NewsCard';
import YoutubeUpdatesHero from '../../../components/YoutubeUpdatesHero';
import MoreFromSection from '../../../components/MoreFromSection';
import Footer from '../../../components/Footer';

import { fetchNewsPage } from '../../../services/api';

export default function NewsCategoryPage() {
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        setPageData(await fetchNewsPage());
      } catch (err) {
        console.error("Failed to load news page:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div style={styles.appContainer}>
      <Header active="News" />

      {loading || !pageData ? (
        <div style={styles.loaderContainer}>
          <div style={styles.spinner} />
          <span style={styles.loaderText}>Loading news desk...</span>
        </div>
      ) : (
        <main style={styles.mainContent}>
          {/* Sub-topic links under the main navigation */}
          <NewsTopicRow topics={pageData.topics} />

          <div style={styles.pageWrapper}>
            {/* Section title with red rule */}
            <CategoryPageTitle title="News" />

            {/* Latest updates strip */}
            <div className="news-page-updates">
              <LatestUpdatesBar updates={pageData.latestUpdates} />
            </div>

            {/* Lead story + right-hand rail */}
            <NewsFeatureHero
              featured={pageData.featured}
              sidebar={pageData.sidebar}
            />

            {/* Bottom 5-across card row */}
            <div className="news-bottom-grid">
              {pageData.bottomGrid.map((article) => (
                <NewsCard key={article.id} article={article} variant="flat" />
              ))}
            </div>
          </div>

          {/* Full-bleed YouTube updates hero */}
          <YoutubeUpdatesHero feature={pageData.youtubeFeature} />

          {/* Paginated regional archive */}
          <MoreFromSection
            region={pageData.moreFrom.region}
            articles={pageData.moreFrom.articles}
          />
        </main>
      )}

      <Footer />
    </div>
  );
}

const styles = {
  appContainer: {
    background: '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  mainContent: {
    width: '100%',
    flexGrow: 1,
    background: '#ffffff'
  },
  pageWrapper: {
    maxWidth: '1350px',
    margin: '0 auto',
    padding: '0 5% 60px 5%'
  },
  loaderContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '120px 20px',
    gap: '20px'
  },
  spinner: {
    width: '36px',
    height: '36px',
    border: '3px solid #e4e4e7',
    borderTopColor: '#ef4444',
    borderRadius: '50%',
    animation: 'pulseGlow 1s infinite ease-in-out'
  },
  loaderText: {
    color: '#71717a',
    fontSize: '13px',
    fontWeight: '700',
    letterSpacing: '0.5px'
  }
};
