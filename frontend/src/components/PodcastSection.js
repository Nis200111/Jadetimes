'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, ListMusic } from 'lucide-react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const staticTracks = [
  {
    id: 1,
    title: "Story of Deepseek AI Model | Jadetimes Talks | Business Episode 01",
    playerTitle: "Story of Deepseek AI Model | Jadetimes T...",
    show: "Jadetimes Talks",
    duration: "14:28",
    durationSec: 868,
    image: "/images/podcast_cover.png",
    description: "In this episode of Jadetimes Talks, we dive into the story of Deepseek AI, a groundbreaking AI model shaping the future of technology and business. Join our hosts, Jessy and David, as they explore how Deepseek AI is revolutionizing industries, enhancing automation, and driving innovation. From its inception to real-world applications, we uncover the vision behind Deepseek AI and its impact on businesses worldwide. Don't miss this insightful conversation on the future of artificial intelligence!"
  },
  {
    id: 2,
    title: "Story of Kandy Temple | Jadetimes Talk | Episode 01",
    playerTitle: "Story of Kandy Temple | Jadetimes Talk |...",
    show: "Jadetimes Talk",
    duration: "08:27",
    durationSec: 507,
    image: "/images/podcast_cover.png",
    description: "In this episode, we journey to the sacred city of Kandy, Sri Lanka, to explore the rich history and spiritual significance of the Temple of the Sacred Tooth Relic. Discover the architectural marvels, the ancient rituals, and the cultural legacy of this UNESCO World Heritage site that has stood as a symbol of sovereignty and devotion for centuries."
  },
  {
    id: 3,
    title: "Story of Taj Mahal | Jadetimes Talks | Episode 03",
    playerTitle: "Story of Taj Mahal | Jadetimes Talks | E...",
    show: "Jadetimes Talks",
    duration: "21:43",
    durationSec: 1303,
    image: "/images/podcast_cover.png",
    description: "Join us as we uncover the eternal love story behind the creation of the Taj Mahal, one of the Seven Wonders of the World. From Shah Jahan's vision to the incredible engineering and artistic craftsmanship of the Mughal empire, this episode explores the history, myths, and enduring beauty of India's most iconic monument."
  }
];

export default function PodcastSection() {
  const isMobile = useMediaQuery('(max-width: 968px)');
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const [link1Hovered, setLink1Hovered] = useState(false);
  const [link2Hovered, setLink2Hovered] = useState(false);
  
  const timerRef = useRef(null);

  const currentTrack = staticTracks[activeTrackIndex];

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= currentTrack.durationSec) {
            handleNext();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isPlaying, activeTrackIndex]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setActiveTrackIndex((prev) => (prev + 1) % staticTracks.length);
    setCurrentTime(0);
  };

  const handlePrev = () => {
    setActiveTrackIndex((prev) => (prev - 1 + staticTracks.length) % staticTracks.length);
    setCurrentTime(0);
  };

  const handleTrackSelect = (index) => {
    setActiveTrackIndex(index);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handleProgressChange = (e) => {
    setCurrentTime(parseInt(e.target.value));
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Header Section */}
        <div style={styles.headerContainer}>
          <div style={styles.headerUnderlineWrapper}>
            <h2 style={styles.headerTitle}>Jadetimes Talk | Podcast</h2>
          </div>
        </div>

        {/* Content Layout */}
        <div style={{
          ...styles.contentGrid,
          gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr',
          gap: isMobile ? '24px' : '40px'
        }}>
          
          {/* Left Column: Player & Track List */}
          <div style={styles.leftColumn}>
            
            {/* Audio Player Card */}
            <div style={styles.playerCard}>
              <div style={styles.albumArtContainer}>
                <img src={currentTrack.image} alt="Album Art" style={styles.albumArt} />
              </div>

              <div style={styles.playerInfoAndControls}>
                <div style={styles.playerTopRow}>
                  <span style={styles.mediaLabel}>Jadetimes Media</span>
                  <button 
                    onMouseEnter={() => setBtnHovered(true)}
                    onMouseLeave={() => setBtnHovered(false)}
                    style={{
                      ...styles.getAlbumBtn,
                      backgroundColor: btnHovered ? '#ffffff' : 'transparent',
                      color: btnHovered ? '#000000' : '#ffffff'
                    }}
                  >
                    Get Album
                  </button>
                </div>

                <h3 style={styles.trackTitle}>{currentTrack.playerTitle}</h3>
                <span style={styles.trackShow}>{currentTrack.show}</span>

                {/* Control bar */}
                <div style={styles.controlsRow}>
                  <div style={styles.controlButtons}>
                    <button onClick={handlePlayPause} style={styles.playBtn}>
                      {isPlaying ? (
                        <Pause size={18} fill="#ffffff" color="#ffffff" />
                      ) : (
                        <Play size={18} fill="#ffffff" color="#ffffff" style={{ marginLeft: '2px' }} />
                      )}
                    </button>
                    <button onClick={handlePrev} style={styles.skipBtn}>
                      <SkipBack size={14} fill="#ffffff" color="#ffffff" />
                    </button>
                    <button onClick={handleNext} style={styles.skipBtn}>
                      <SkipForward size={14} fill="#ffffff" color="#ffffff" />
                    </button>
                  </div>

                  <span style={styles.timeLabel}>
                    {formatTime(currentTime)} / {currentTrack.duration}
                  </span>

                  <div style={styles.rightControls}>
                    <button onClick={() => setIsMuted(!isMuted)} style={styles.iconBtn}>
                      {isMuted ? <VolumeX size={16} color="#a1a1aa" /> : <Volume2 size={16} color="#a1a1aa" />}
                    </button>
                    <button style={styles.iconBtn}>
                      <ListMusic size={16} color="#a1a1aa" />
                    </button>
                  </div>
                </div>

                {/* Progress bar */}
                <div style={styles.progressBarContainer}>
                  <input
                    type="range"
                    min="0"
                    max={currentTrack.durationSec}
                    value={currentTime}
                    onChange={handleProgressChange}
                    style={{
                      ...styles.progressBar,
                      background: `linear-gradient(to right, #ffffff 0%, #ffffff ${(currentTime / currentTrack.durationSec) * 100}%, #3f3f46 ${(currentTime / currentTrack.durationSec) * 100}%, #3f3f46 100%)`
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Track Playlist */}
            <div style={styles.trackList}>
              {staticTracks.map((track, index) => {
                const isActive = index === activeTrackIndex;
                return (
                  <div
                    key={track.id}
                    onClick={() => handleTrackSelect(index)}
                    style={{
                      ...styles.trackRow,
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.04)' : 'transparent'
                    }}
                  >
                    <span style={{
                      ...styles.trackNumber,
                      color: isActive ? '#ef4444' : '#ffffff'
                    }}>
                      {index + 1}
                    </span>
                    <span style={{
                      ...styles.trackRowTitle,
                      fontWeight: isActive ? '700' : '400',
                      color: isActive ? '#ef4444' : '#ffffff'
                    }}>
                      {track.title}
                    </span>
                    <span style={styles.trackRowDuration}>
                      {track.duration}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Spotify Updates / Meta */}
          <div style={styles.rightColumn}>
            <div style={styles.spotifyUpdatesBadge}>
              SPOTIFY UPDATES
            </div>

            <h2 style={styles.updatesTitle}>
              {currentTrack.title}
            </h2>

            <p style={styles.updatesDescription}>
              {currentTrack.description}
            </p>

            <div style={styles.linksRow}>
              <a 
                href="#" 
                onMouseEnter={() => setLink1Hovered(true)}
                onMouseLeave={() => setLink1Hovered(false)}
                style={{
                  ...styles.link,
                  color: link1Hovered ? '#e2be76' : '#cca353'
                }}
              >
                Visit Our Podcast &gt;
              </a>
              <a 
                href="#" 
                onMouseEnter={() => setLink2Hovered(true)}
                onMouseLeave={() => setLink2Hovered(false)}
                style={{
                  ...styles.link,
                  color: link2Hovered ? '#e2be76' : '#cca353'
                }}
              >
                Listen on Amazon Music &gt;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: '#000000',
    padding: '40px 5%',
    width: '100%',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
  },
  container: {
    maxWidth: '1350px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  headerContainer: {
    borderBottom: '1px solid #ef4444',
    width: '100%',
    display: 'flex'
  },
  headerUnderlineWrapper: {
    borderBottom: '3px solid #ef4444',
    paddingBottom: '8px',
    marginBottom: '-2px'
  },
  headerTitle: {
    fontSize: '18px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: '#ffffff',
    margin: 0
  },
  contentGrid: {
    display: 'grid',
    alignItems: 'start'
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  playerCard: {
    display: 'flex',
    gap: '20px',
    background: '#0c0c0e',
    border: '1px solid #27272a',
    padding: '20px',
    alignItems: 'center'
  },
  albumArtContainer: {
    width: '110px',
    height: '110px',
    flexShrink: 0,
    overflow: 'hidden',
    border: '1px solid #27272a'
  },
  albumArt: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  playerInfoAndControls: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  playerTopRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  mediaLabel: {
    color: '#a1a1aa',
    fontSize: '11px',
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: '0.5px'
  },
  getAlbumBtn: {
    background: 'transparent',
    border: '1px solid #ffffff',
    fontSize: '11px',
    fontWeight: '600',
    padding: '4px 12px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    outline: 'none'
  },
  trackTitle: {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '700',
    margin: '4px 0 0 0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  trackShow: {
    color: '#71717a',
    fontSize: '12px',
    margin: '0 0 8px 0'
  },
  controlsRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginTop: '4px'
  },
  controlButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  playBtn: {
    background: 'transparent',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px'
  },
  skipBtn: {
    background: 'transparent',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px'
  },
  timeLabel: {
    color: '#a1a1aa',
    fontSize: '11px',
    fontFamily: 'monospace'
  },
  rightControls: {
    marginLeft: 'auto',
    display: 'flex',
    gap: '10px'
  },
  iconBtn: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0
  },
  progressBarContainer: {
    marginTop: '10px',
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  progressBar: {
    width: '100%',
    height: '3px',
    WebkitAppearance: 'none',
    appearance: 'none',
    borderRadius: '2px',
    outline: 'none',
    cursor: 'pointer'
  },
  trackList: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px'
  },
  trackRow: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 8px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  trackNumber: {
    width: '24px',
    fontSize: '14px',
    fontWeight: '700',
    flexShrink: 0
  },
  trackRowTitle: {
    fontSize: '13px',
    flexGrow: 1,
    paddingRight: '16px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  trackRowDuration: {
    color: '#a1a1aa',
    fontSize: '13px',
    flexShrink: 0
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    color: '#ffffff'
  },
  spotifyUpdatesBadge: {
    alignSelf: 'flex-start',
    background: '#27272a',
    color: '#ffffff',
    fontSize: '9px',
    fontWeight: '700',
    padding: '4px 10px',
    letterSpacing: '0.8px',
    borderRadius: '2px'
  },
  updatesTitle: {
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '1.3',
    margin: 0
  },
  updatesDescription: {
    fontSize: '12.5px',
    color: '#d1d1d6',
    lineHeight: '1.6',
    margin: 0
  },
  linksRow: {
    display: 'flex',
    gap: '24px',
    marginTop: '6px'
  },
  link: {
    fontSize: '12.5px',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'color 0.2s'
  }
};

