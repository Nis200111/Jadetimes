'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';

import Header from '../components/Header';
import LatestUpdatesBar from '../components/LatestUpdatesBar';

import HeroSection from '../components/HeroSection';
import CategoryTiles from '../components/CategoryTiles';
import NewsCard from '../components/NewsCard';
import FullWidthAd from '../components/FullWidthAd';
import TrendingAndFeature from '../components/TrendingAndFeature';
import WatchSegments from '../components/WatchSegments';
import CategoryLists from '../components/CategoryLists';
import PulseSection from '../components/PulseSection';
import PodcastSection from '../components/PodcastSection';
import Footer from '../components/Footer';

import { 
  fetchNews, 
  fetchTrending, 
  fetchLatestUpdates, 
  fetchCategoryBreakdown,
  fetchVideos,
  fetchPodcasts 
} from '../services/api';

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  
  // Datasets for all 20 sections
  const [latestUpdates, setLatestUpdates] = useState([]);
  const [heroFeatured, setHeroFeatured] = useState(null);
  const [heroStacked, setHeroStacked] = useState([]);
  const [categoryTiles, setCategoryTiles] = useState([]);
  const [moreNewsGrid, setMoreNewsGrid] = useState([]);
  const [spotlightArticle, setSpotlightArticle] = useState(null);
  const [trendingList, setTrendingList] = useState([]);
  const [watchMain, setWatchMain] = useState(null);
  const [watchSide, setWatchSide] = useState([]);
  const [watchBottom, setWatchBottom] = useState([]);
  const [breakdownData, setBreakdownData] = useState(null);
  const [sportsGrid, setSportsGrid] = useState([]);
  const [pulseArticle, setPulseArticle] = useState(null);
  const [threeColumnRow, setThreeColumnRow] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [travelGrid, setTravelGrid] = useState([]);
  const [militaryHero, setMilitaryHero] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const newsData = await fetchNews();
        const trendingData = await fetchTrending();
        const updates = await fetchLatestUpdates();
        const breakdown = await fetchCategoryBreakdown();
        const podcastData = await fetchPodcasts();
        const videoData = await fetchVideos();

        // 3. Latest Updates
        setLatestUpdates(updates);

        // 4. Hero Featured & Stacked
        setHeroFeatured(newsData.find(item => item.id === 1) || newsData[0]);
        setHeroStacked(newsData.filter(item => [2, 3, 4].includes(item.id)));

        // 5. Category Tiles Row
        setCategoryTiles(newsData.filter(item => [5, 6, 7, 8].includes(item.id)));

        // 6. More News Feed (8 items: 9 to 16)
        setMoreNewsGrid(newsData.filter(item => item.id >= 9 && item.id <= 16));

        // 8. Spotlight Article (Japan solid fuel launch)
        setSpotlightArticle(newsData.find(item => item.id === 17) || newsData[0]);
        setTrendingList(trendingData);

        // 10-11. Video Segments
        setWatchMain(videoData[0]);
        setWatchSide(videoData.slice(1, 5));
        setWatchBottom(videoData.slice(1, 5)); // Reuse small video clips for bottom row

        // 12. 4-Column Breakdown
        setBreakdownData(breakdown);

        // 13. Sports Updates
        setSportsGrid(newsData.filter(item => item.category === "Sports"));

        // 14. Pulse Section
        setPulseArticle(newsData.find(item => item.id === 31));

        // 15. 3-Column post row
        setThreeColumnRow(newsData.filter(item => [32, 33, 34].includes(item.id)));

        // 16. Podcast list
        setPodcasts(podcastData);

        // 17. Travel Grid
        setTravelGrid(newsData.filter(item => item.category === "Travel"));

        // 18. Military Hero Banner
        setMilitaryHero(newsData.find(item => item.id === 39));

      } catch (err) {
        console.error("Failed to load page modules:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div style={styles.appContainer}>
      {/* Section 1 & 2: Header (includes Top bar & Bottom Navbar) */}
      <Header />

      {loading ? (
        <div style={styles.loaderContainer}>
          <div style={styles.spinner} />
          <span style={styles.loaderText}>Assembling editorial page...</span>
        </div>
      ) : (
        <main style={styles.mainContent}>
          {/* Section 3: Latest Updates Banner */}
          <LatestUpdatesBar updates={latestUpdates} />

          {/* Section 4: Split Featured Hero Grid */}
          <div className="hero-wrapper-rel">
            <HeroSection 
              featuredArticle={heroFeatured} 
              stackedArticles={heroStacked} 
            />
          </div>

          {/* Section 5: Category Tiles Row */}
          <CategoryTiles articles={categoryTiles} />

          {/* Section 6: More News Feed (8 cards in 2x4 layout) */}
          <section style={styles.newsFeedSection}>
            <div style={styles.sectionHeader}>
              <span style={styles.sectionIcon} />
              <h2 style={styles.sectionTitle}>More News</h2>
            </div>
            <div style={styles.newsFeedGrid}>
              {moreNewsGrid.map((art) => (
                <NewsCard key={art.id} article={art} />
              ))}
            </div>
          </section>

          {/* Section 7: Magazine Promo Full Width Banner */}
          <FullWidthAd 
            title="JadeTimes Weekly Premium Magazine"
            description="Unlock structural investigative analyses, climate logs, and live conference updates. Bundles start at $4.99/mo."
          />

          {/* Section 8: Two-Column rocket spotlight and trending list */}
          <TrendingAndFeature 
            featuredArticle={spotlightArticle} 
            trendingList={trendingList} 
          />

          {/* Section 9: Product Advertisement Banner */}
          <FullWidthAd 
            title="Premium Balanced Nutrition For Active Companions"
            description="Switch to our high-protein natural grain matrices approved by leading veterinary wellness labs."
            buttonText="Buy Exclusive Support"
          />

          {/* Section 10 & 11: Must Watch Top Segments & Small thumbnail row */}
          <WatchSegments 
            mainVideo={watchMain} 
            sideVideos={watchSide} 
            bottomVideos={watchBottom} 
          />

          {/* Section 12: 4-Column Category Breakdown lists */}
          <CategoryLists breakdown={breakdownData} />

          {/* Section 13: News Updates | Sports Row */}
          <section style={styles.newsFeedSection}>
            <div style={styles.sectionHeader}>
              <span style={styles.sectionIcon} />
              <h2 style={styles.sectionTitle}>News Updates | Sports</h2>
            </div>
            <div style={styles.newsFeedGrid}>
              {sportsGrid.slice(0, 4).map((art) => (
                <NewsCard key={art.id} article={art} />
              ))}
            </div>
          </section>

          {/* Section 14: Exclusive Pulse Dark Cover */}
          <PulseSection article={pulseArticle} />

          {/* Section 15: 3-Column Image Card Row */}
          <section style={styles.newsFeedSection}>
            <div style={styles.threeColumnGrid}>
              {threeColumnRow.map((art) => (
                <NewsCard key={art.id} article={art} />
              ))}
            </div>
          </section>

          {/* Section 16: Dark Podcast Section */}
          <PodcastSection podcasts={podcasts} />

          {/* Section 17: Travel Updates Row */}
          <section style={styles.newsFeedSection}>
            <div style={styles.sectionHeader}>
              <span style={styles.sectionIcon} />
              <h2 style={styles.sectionTitle}>Travel Updates</h2>
            </div>
            <div style={styles.newsFeedGrid}>
              {travelGrid.slice(0, 4).map((art) => (
                <NewsCard key={art.id} article={art} />
              ))}
            </div>
          </section>

          {/* Section 18: Full-Width Military Hero Banner */}
          {militaryHero && (
            <section style={styles.militarySection}>
              <div 
                style={{
                  ...styles.militaryBanner,
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.85)), url(${militaryHero.image})`
                }}
              >
                <div style={styles.militaryContent}>
                  <span className={`category-tag-badge ${militaryHero.category ? `${militaryHero.category.toLowerCase().replace(' ', '-')}-tag` : 'political-tag'}`}>{militaryHero.category}</span>
                  <h3 style={styles.militaryTitle}>{militaryHero.title}</h3>
                  <p style={styles.militaryDesc}>{militaryHero.description}</p>
                  <Link href={`/article/${militaryHero.id}`} style={styles.militaryBtn}>
                    Read Coverage
                  </Link>
                </div>
              </div>
            </section>
          )}

          {/* Section 19: Bottom Video Thumbnail Row */}
          <section style={styles.bottomVideoSection}>
            <div style={styles.bottomVideoGrid}>
              {watchBottom.slice(0, 4).map((video) => (
                <div key={video.id} style={styles.bottomVideoCard}>
                  <div 
                    style={{
                      ...styles.bottomVideoThumb,
                      backgroundImage: `url(${video.image})`
                    }}
                  >
                    <div style={styles.bottomVideoPlay}>
                      <Play size={10} fill="#ffffff" color="#ffffff" />
                    </div>
                  </div>
                  <h4 style={styles.bottomVideoTitle}>{video.title}</h4>
                </div>
              ))}
            </div>
          </section>

        </main>
      )}

      {/* Section 20: Footer */}
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
  },
  mainContent: {
    width: '100%',
    flexGrow: 1
  },
  newsFeedSection: {
    maxWidth: '1350px',
    margin: '30px auto',
    padding: '0 5%',
    display: 'flex',
    flexDirection: 'column'
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    borderBottom: '2px solid #18181b',
    paddingBottom: '8px',
    marginBottom: '20px'
  },
  sectionIcon: {
    width: '8px',
    height: '8px',
    background: '#ef4444'
  },
  sectionTitle: {
    fontSize: '15px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: '#18181b',
    margin: 0
  },
  newsFeedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px'
  },
  threeColumnGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px'
  },
  militarySection: {
    maxWidth: '1350px',
    margin: '40px auto',
    padding: '0 5%'
  },
  militaryBanner: {
    width: '100%',
    height: '450px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '40px'
  },
  militaryContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '700px'
  },
  militaryTag: {
    background: '#ef4444',
    color: '#ffffff',
    fontSize: '10px',
    fontWeight: '800',
    textTransform: 'uppercase',
    padding: '3px 8px',
    borderRadius: '2px',
    alignSelf: 'flex-start',
    letterSpacing: '0.5px'
  },
  militaryTitle: {
    fontFamily: "var(--font-primary)",
    fontSize: '32px',
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: '1.2',
    margin: 0,
    textShadow: '0 2px 4px rgba(0,0,0,0.6)'
  },
  militaryDesc: {
    fontSize: '14px',
    color: '#e4e4e7',
    lineHeight: '1.5',
    margin: 0,
    textShadow: '0 1px 3px rgba(0,0,0,0.5)'
  },
  militaryBtn: {
    background: '#ef4444',
    color: '#ffffff',
    fontSize: '11px',
    fontWeight: '800',
    textTransform: 'uppercase',
    padding: '10px 20px',
    borderRadius: '2px',
    alignSelf: 'flex-start',
    letterSpacing: '0.5px',
    transition: 'background 0.2s',
    marginTop: '8px',
    ':hover': {
      background: '#dc2626'
    }
  },
  bottomVideoSection: {
    background: '#09090b', // Dark zinc bar matching multimedia
    padding: '40px 5%',
    width: '100%'
  },
  bottomVideoGrid: {
    maxWidth: '1350px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '24px'
  },
  bottomVideoCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  bottomVideoThumb: {
    width: '100%',
    height: '120px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '2px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomVideoPlay: {
    background: 'rgba(239, 68, 68, 0.9)',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomVideoTitle: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#e4e4e7',
    lineHeight: '1.4',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  }
};
