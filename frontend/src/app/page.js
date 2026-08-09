'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

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
import TravelUpdates from '../components/TravelUpdates';
import YoutubeUpdatesHero from '../components/YoutubeUpdatesHero';
import Footer from '../components/Footer';

const youtubeFeatureData = {
  id: 39,
  title: "Why Did Trump Delay Strikes on Iran Again",
  description: "President Donald Trump has once again delayed a major escalation in the Iran war, extending a deadline to strike Iran's energy infrastructure until April 8. The move signals a possible window for diplomacy, even as fighting intensifies between Iran and Israel.",
  channel: "Jadetimes",
  image: "/images/soldier_sunset.png",
  playerImage: "/images/yt_thumbnail.png",
  videoId: "dQw4w9WgXcQ"
};

const bottomVideosData = [
  {
    id: 801,
    title: "PEREZ HILTON FACES LONG RECOVERY AFTER LIVESTREAM INCIDENT |..",
    excerpt: "PEREZ HILTON FACES LONG RECOVERY AFTER LIVESTREAM INCIDENT -- US blogger Perez..",
    duration: "00:37",
    image: "https://picsum.photos/seed/perezhilton/800/600"
  },
  {
    id: 802,
    title: "AUSTRALIA FACES EXTINCTION CRISIS AS NUMBAT OFFERS HOPE | Jadetimes",
    excerpt: "AUSTRALIA FACES EXTINCTION CRISIS AS NUMBAT OFFERS HOPE -- Australia is facing a..",
    duration: "00:37",
    image: "https://picsum.photos/seed/numbat/800/600"
  },
  {
    id: 803,
    title: "Madonna Honors \"Genius\" Producer William Orbit in Emotional Tribute |...",
    excerpt: "Madonna Honors \"Genius\" Producer William Orbit in Emotional Tribute -- Madonna has..",
    duration: "00:50",
    image: "https://picsum.photos/seed/madonna/800/600"
  },
  {
    id: 804,
    title: "Fernandez Claims Dominant Victory at British MotoGP in Silverstone |...",
    excerpt: "Fernandez Claims Dominant Victory at British MotoGP in Silverstone -- Raul Fernandez..",
    duration: "00:48",
    image: "https://picsum.photos/seed/motogp/800/600"
  },
  {
    id: 805,
    title: "Trump Pushes to Fire Fed Governor Lisa Cook After Court Ruling |...",
    excerpt: "Trump Pushes to Fire Fed Governor Lisa Cook After Court Ruling -- President Donald Trump..",
    duration: "00:38",
    image: "/images/video_trump.png"
  },
  {
    id: 806,
    title: "Vollering Storms Back Into Yellow With Stage 8 Victory! | Jadetimes",
    excerpt: "Vollering Storms Back Into Yellow With Stage 8 Victory! -- Demi Vollering has stormed back..",
    duration: "00:34",
    image: "/images/video_vollering.png"
  },
  {
    id: 807,
    title: "Surging Energy Prices and Shipping Threats Middle East War Could Hurt...",
    excerpt: "Surging Energy Prices and Shipping Threats: How the Middle East War Could Hurt the Glob..",
    duration: "00:31",
    image: "https://picsum.photos/seed/harborport/800/600"
  },
  {
    id: 808,
    title: "How the War in the Middle East Is Affecting Energy, Trade, and Financ...",
    excerpt: "How the War in the Middle East Is Affecting Energy, Trade, and Finance -- The war in the..",
    duration: "00:27",
    image: "https://picsum.photos/seed/refinerynight/800/600"
  },
  {
    id: 809,
    title: "GREEN BOOTS' BODY MAY RECOVERED FROM MOU...",
    excerpt: "GREEN BOOTS' BODY MAY FIN.. RECOVERED FROM MOUNT EV...",
    duration: "00:35",
    image: "https://picsum.photos/seed/mounteverest/800/600"
  },
  {
    id: 810,
    title: "How Autonomous Drones are Reshaping Agriculture Logistics",
    excerpt: "How Autonomous Drones are Reshaping Agriculture Logistics -- Drones are transforming the way..",
    duration: "00:42",
    image: "https://picsum.photos/seed/drones/800/600"
  }
];

import { 
  fetchNews, 
  fetchTrending, 
  fetchLatestUpdates, 
  fetchCategoryBreakdown,
  fetchVideos,
  fetchPodcasts 
} from '../services/api';

const threeColumnData = [
  {
    type: 'list',
    featured: {
      title: "Social Media's Growing Influence on Elections Raises Global Concerns",
      image: "/images/0b3a43_9877c19093db4888be12f3638f7d0cd0~mv2.avif",
      id: 32
    },
    items: [
      {
        title: "The Future of Tech Careers",
        image: "/images/0b3a43_75181dff76a6414fb5436647c5676229~mv2.avif",
        id: 321
      },
      {
        title: "The New Silk Road: Re-engineering Global Trade Routes",
        image: "/images/0b3a43_aba6efc6c06b43c7945d5cec79a09981~mv2.avif",
        id: 322
      },
      {
        title: "Rogue Agents or Marketing Stunt? The Unsettling Truth...",
        image: "/images/e9a65f_3ce2b6fa19d24b2da5901097af01891f~mv2.avif",
        id: 323
      }
    ]
  },
  {
    type: 'single',
    featured: {
      title: "Can Australia Challenge China's Rare Earth Dominance? A Deep Dive into Anthony Albanese's Strategic Minerals Plan",
      description: "Can Australia Challenge China's Rare Earth Dominance? A Deep Dive into Anthony Albanese's Strategic Minerals Plan",
      image: "/images/Special Stocks.avif",
      id: 33
    }
  },
  {
    type: 'list',
    featured: {
      title: "Authorities Requested Motive in Mass Shooting at the Fast Food Restaurant in Idaho",
      image: "/images/6271b2_0f57dfb91c344deab0872a3a4875df3f~mv2.avif",
      id: 34
    },
    items: [
      {
        title: "The Invisible Enemy: Why Is Dengue Spreading So Rapidly...",
        image: "/images/0b3a43_9158337bd05f4449809ef7618c616e00~mv2.avif",
        id: 341
      },
      {
        title: "Authorities Requested Motive in Mass Shooting at the Fast...",
        image: "/images/6271b2_0f57dfb91c344deab0872a3a4875df3f~mv2.avif",
        id: 342
      },
      {
        title: "Who Owns You After You Die? The Messy Law of Digital...",
        image: "/images/image4.avif",
        id: 343
      }
    ]
  }
];

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const handlePrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -sliderRef.current.clientWidth * 0.8, behavior: 'smooth' });
    }
  };

  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: sliderRef.current.clientWidth * 0.8, behavior: 'smooth' });
    }
  };
  
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

        // 6. More News Feed (10 items: starting from index 8)
        setMoreNewsGrid(newsData.slice(8, 18));

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

          {/* Section 6: More News Feed (10 cards in 2x5 layout) */}
          <section style={styles.newsFeedSection}>
            <div style={styles.moreNewsHeader}>
              <h2 style={styles.moreNewsTitle}>More News</h2>
            </div>
            <div style={styles.moreNewsGridContainer}>
              {moreNewsGrid.map((art) => (
                <NewsCard key={art.id} article={art} variant="clean" />
              ))}
            </div>
          </section>

          {/* Section 7: Magazine Promo Full Width Banner */}
          <FullWidthAd 
            title="JadeTimes Weekly Premium Magazine"
            description="Unlock structural investigative analyses, climate logs, and live conference updates. Bundles start at $4.99/mo."
            image="/images/0801ba_1b9737a2f498470c9abad2e6d85b543f~mv2.avif"
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
            image="/images/Special Stocks.avif"
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
            <div style={styles.sportsHeader}>
              <h2 style={styles.sportsTitle}>
                News Updates <span style={{ fontWeight: '400', color: '#71717a' }}>| Sports</span>
              </h2>
            </div>
            <div style={styles.sportsGridContainer}>
              {sportsGrid.slice(0, 5).map((art) => (
                <NewsCard key={art.id} article={art} variant="flat" />
              ))}
            </div>
          </section>

          {/* Section 14: Exclusive Pulse Dark Cover */}
          <PulseSection article={pulseArticle} />

          {/* Section 15: 3-Column Image Card Row */}
          <section style={styles.newsFeedSection}>
            <div style={styles.threeColumnGrid}>
              {threeColumnData.map((col, idx) => {
                if (col.type === 'single') {
                  return (
                    <div key={idx} style={styles.columnWrapper}>
                      <Link href={`/article/${col.featured.id}`} style={{ textDecoration: 'none' }}>
                        <div style={styles.middleImageContainer}>
                          <Image 
                            src={col.featured.image} 
                            alt={col.featured.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <h3 style={styles.middleTitle}>{col.featured.title}</h3>
                        <p style={styles.middleDesc}>{col.featured.description}</p>
                      </Link>
                    </div>
                  );
                }

                return (
                  <div key={idx} style={styles.columnWrapper}>
                    <Link href={`/article/${col.featured.id}`} style={{ textDecoration: 'none' }}>
                      <div style={styles.columnImageContainer}>
                        <Image 
                          src={col.featured.image} 
                          alt={col.featured.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <h3 style={styles.columnTitle}>{col.featured.title}</h3>
                    </Link>

                    <div style={styles.listWrapper}>
                      {col.items.map((item, itemIdx) => (
                        <Link href={`/article/${item.id}`} key={itemIdx} style={styles.listItem}>
                          <img 
                            src={item.image} 
                            alt={item.title}
                            style={styles.listThumbnail}
                          />
                          <h4 style={styles.listTitle}>{item.title}</h4>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 16: Dark Podcast Section */}
          <PodcastSection podcasts={podcasts} />

          {/* Section 17: Travel Updates */}
          <TravelUpdates />

          {/* Section 18: Full-Width Youtube Hero Banner */}
          <YoutubeUpdatesHero feature={youtubeFeatureData} />

          {/* Section 19: Bottom Video Thumbnail Row Slider */}
          <section style={styles.bottomVideoSection}>
            <div style={styles.bottomVideoSliderWrapper}>
              {showLeftArrow && (
                <button 
                  onClick={handlePrevSlide}
                  style={{
                    ...styles.sliderArrow,
                    left: '15px'
                  }}
                  aria-label="Previous videos"
                >
                  <ChevronLeft size={20} color="#000000" />
                </button>
              )}

              <div 
                ref={sliderRef}
                className="no-scrollbar"
                style={styles.bottomVideoTrack}
                onScroll={handleScroll}
              >
                {bottomVideosData.map((video) => (
                  <div key={video.id} style={styles.bottomVideoCard}>
                    <div 
                      style={{
                        ...styles.bottomVideoThumb,
                        backgroundImage: `url(${video.image})`
                      }}
                    >
                      <div style={styles.bottomVideoPlay}>
                        <Play size={12} fill="#ffffff" color="#ffffff" style={{ marginLeft: '1.5px' }} />
                      </div>
                      <div style={styles.bottomVideoDuration}>
                        {video.duration}
                      </div>
                    </div>
                    <h4 style={styles.bottomVideoTitle}>{video.title}</h4>
                    <p style={styles.bottomVideoExcerpt}>{video.excerpt}</p>
                  </div>
                ))}
              </div>

              {showRightArrow && (
                <button 
                  onClick={handleNextSlide}
                  style={{
                    ...styles.sliderArrow,
                    right: '15px'
                  }}
                  aria-label="Next videos"
                >
                  <ChevronRight size={20} color="#000000" />
                </button>
              )}
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
    margin: '50px auto',  /* INCREASED from 30px */
    padding: '0 5%',
    display: 'flex',
    flexDirection: 'column'
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',  /* INCREASED from 8px */
    borderBottom: '3px solid #18181b',  /* INCREASED from 2px */
    paddingBottom: '12px',  /* INCREASED from 8px */
    marginBottom: '28px'  /* INCREASED from 20px */
  },
  sectionIcon: {
    width: '10px',  /* INCREASED from 8px */
    height: '10px',
    background: '#ef4444',
    borderRadius: '2px'
  },
  sectionTitle: {
    fontSize: '16px',  /* INCREASED from 15px */
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.6px',  /* INCREASED from 0.5px */
    color: '#18181b',
    margin: 0
  },
  newsFeedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',  /* INCREASED minmax from 250px */
    gap: '32px'  /* INCREASED from 24px */
  },
  moreNewsHeader: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '2px solid #ef4444',
    paddingBottom: '8px',
    marginBottom: '24px'
  },
  moreNewsTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#18181b',
    margin: 0
  },
  moreNewsGridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '24px'
  },
  threeColumnGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '32px'  /* INCREASED from 24px */
  },
  militarySection: {
    maxWidth: '1350px',
    margin: '60px auto',  /* INCREASED from 40px */
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
    transition: 'all 0.3s ease',
    marginTop: '8px',
    display: 'inline-block',
    boxShadow: '0 4px 12px rgba(239, 68, 68, 0.25)',
    ':hover': {
      background: '#dc2626',
      boxShadow: '0 6px 16px rgba(239, 68, 68, 0.35)',
      transform: 'translateY(-2px)'
    }
  },
  sportsHeader: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '2px solid #ef4444',
    paddingBottom: '8px',
    marginBottom: '24px'
  },
  sportsTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#18181b',
    margin: 0
  },
  columnWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  columnImageContainer: {
    position: 'relative',
    width: '100%',
    height: '180px',
    background: '#f4f4f5',
    overflow: 'hidden'
  },
  columnTitle: {
    fontSize: '14.5px',
    fontWeight: '700',
    color: '#18181b',
    lineHeight: '1.4',
    margin: '12px 0 16px 0',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  middleImageContainer: {
    position: 'relative',
    width: '100%',
    height: '290px',
    background: '#f4f4f5',
    overflow: 'hidden'
  },
  middleTitle: {
    fontSize: '16.5px',
    fontWeight: '700',
    color: '#18181b',
    lineHeight: '1.35',
    margin: '16px 0 8px 0'
  },
  middleDesc: {
    fontSize: '13px',
    color: '#52525b',
    lineHeight: '1.5',
    margin: 0
  },
  listWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: '12px',
    borderTop: '1px solid #e4e4e7',
    padding: '12px 0',
    alignItems: 'center',
    textDecoration: 'none'
  },
  listThumbnail: {
    width: '80px',
    height: '55px',
    objectFit: 'cover',
    borderRadius: '0px',
    flexShrink: 0
  },
  listTitle: {
    fontSize: '12.5px',
    fontWeight: '500',
    color: '#18181b',
    lineHeight: '1.4',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  sportsGridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '20px',
    width: '100%'
  },
  bottomVideoSection: {
    padding: '40px 1% 40px 1%', // Very small padding on sides matching mockup
    width: '100%'
  },
  bottomVideoSliderWrapper: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0' // Removed side padding to align items with page edges
  },
  bottomVideoTrack: {
    display: 'flex',
    gap: '12px', // Reduced gap between cards from 20px to 12px
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    width: '100%',
    padding: '10px 0',
  },
  bottomVideoCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    flexShrink: 0,
    width: 'calc((100% - 48px) / 5)', // Recalculated for 12px gaps (4 gaps * 12px = 48px)
    minWidth: '220px' // Responsive fallback
  },
  bottomVideoThumb: {
    width: '100%',
    height: '130px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '2px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomVideoPlay: {
    border: '1.5px solid #ffffff',
    background: 'rgba(0, 0, 0, 0.25)',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomVideoDuration: {
    position: 'absolute',
    bottom: '8px',
    right: '8px',
    background: 'rgba(0, 0, 0, 0.75)',
    color: '#ffffff',
    fontSize: '11px',
    fontWeight: '600',
    padding: '2px 6px',
    borderRadius: '2px',
    fontFamily: 'monospace'
  },
  bottomVideoTitle: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#18181b',
    lineHeight: '1.4',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    fontFamily: "'Poppins', sans-serif"
  },
  bottomVideoExcerpt: {
    fontSize: '12px',
    color: '#71717a',
    lineHeight: '1.4',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    fontFamily: "'Poppins', sans-serif"
  },
  sliderArrow: {
    position: 'absolute',
    top: '65px', // Perfectly centered on the 130px height thumbnails
    zIndex: 10,
    background: '#ffffff',
    border: '1px solid #e4e4e7',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.2s ease',
  }
};
