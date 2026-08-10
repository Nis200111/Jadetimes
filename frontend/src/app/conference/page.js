'use client';

import React, { useState, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ConferencePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    country: '',
    phone: '',
    presenterMode: 'Online',
    role: 'Presenter'
  });
  const [registered, setRegistered] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setRegistered(true);
    }
  };

  const conferenceVideos = [
    {
      title: "Jadetimes International Research Conference 2025 | Dr. Manvendra Singh",
      duration: "03:42",
      thumbnail: "/images/0b3a43_aba6efc6c06b43c7945d5cec79a09981~mv2.avif",
      details: "Starts on June 1st, 2025 | Online & Hybrid Mode",
      desc: "Join global professionals, scholars, and academics...",
      videoId: "dQw4w9WgXcQ"
    },
    {
      title: "Jadetimes International Research Conference 2025 | Avneet Gulati",
      duration: "02:32",
      thumbnail: "/images/0b3a43_75181dff76a6414fb5436647c5676229~mv2.avif",
      details: "Starts on June 1st onwards, 2025 | Online & Hybrid Mode",
      desc: "Join global professionals, scholars, and...",
      videoId: "dQw4w9WgXcQ"
    },
    {
      title: "Jadetimes International Research Conference 2025 | Dr. Sumit Kumar Pandey",
      duration: "01:13",
      thumbnail: "/images/0b3a43_9158337bd05f4449809ef7618c616e00~mv2.avif",
      details: "Starts on June 1st, 2025 | Online & Hybrid Mode",
      desc: "Join global professionals, scholars, and academics...",
      videoId: "dQw4w9WgXcQ"
    },
    {
      title: "Jadetimes International Research Conference 2025 | Prof. Ceasar Dubor",
      duration: "01:05",
      thumbnail: "/images/0b3a43_9877c19093db4888be12f3638f7d0cd0~mv2.avif",
      details: "Starts on June 1st, 2025 | Online & Hybrid Mode",
      desc: "Join global professionals, scholars, and academics...",
      videoId: "dQw4w9WgXcQ"
    }
  ];

  const committeeMembers = [
    { name: "Geeth Raman", org: "Co-Conference Chair, India", img: "/images/Geeth" },
    { name: "Prof. Simranjit Singh", org: "Co-Conference Chair, India", img: "/images/Prof. Simranjit Singh.avif" },
    { name: "Dr. Tornike Shurgulaia", org: "Co-Conference Chair, USA", img: "/images/Dr. Tornike Shurgulaia.avif" },
    { name: "Prof. Rabbi Victor Gross", org: "Co-Conference Chair, USA", img: "/images/Prof. Rabbi Victor Gross.avif" },
    { name: "Prof. Ceasar Dubor", org: "Co-Conference Chair, Nigeria", img: "/images/Prof. Ceasar Dubor.avif" },
    { name: "Prof. Kirandeep Singh", org: "Co-Conference Chair, India", img: "/images/Prof. Kirandeep Singh.avif" },
    { name: "Prof. (Dr.) Manvendra Singh", org: "Co-Conference Chair, India", img: "/images/Prof. (Dr.) Manvendra Singh.avif" },
    { name: "Kingzang Thinley", org: "Bhutan Conference Coordinator", img: "/images/Kingzang Thinley.avif" },
    { name: "Fedra Ferro", org: "USA Conference Coordinator", img: "/images/Fedra Ferro.avif" },
    { name: "A. F. Syeda", org: "UK Conference Coordinator", img: "/images/A. F. Syeda.avif" },
    { name: "Chamitha Ranneththi", org: "Australian Conference Coordinator", img: "/images/Chamitha Ranneththi.avif" },
    { name: "Mehul Bansal", org: "India Conference Coordinator", img: "/images/Mehul Bansal.avif" },
    { name: "Thiloththama Jayasinghe", org: "Sri Lankan Conference Coordinator", img: "/images/Thiloththama Jayasinghe.avif" }
  ];

  const advisoryBoard = [
    { name: "Dr. Jaime Clarosma Valle", org: "President & Senior Researcher, USA", img: "https://picsum.photos/seed/adv1/300/300" },
    { name: "Dr. Obi Idom", org: "Senior Researcher, Nigeria", img: "https://picsum.photos/seed/adv2/300/300" },
    { name: "Dr. Antony Muthu", org: "Senior Researcher, Kenya", img: "https://picsum.photos/seed/adv3/300/300" },
    { name: "Dr. Keith Nestor A. Lovin", org: "Senior Researcher, Philippines", img: "https://picsum.photos/seed/adv4/300/300" },
    { name: "Dr. Francois Phepito", org: "Senior Researcher, South Africa", img: "https://picsum.photos/seed/adv5/300/300" },
    { name: "Dr. Rachel Welford", org: "Senior Researcher, USA", img: "https://picsum.photos/seed/adv6/300/300" },
    { name: "Dr. Roderick Mann", org: "Assistant Professor, USA", img: "https://picsum.photos/seed/adv7/300/300" },
    { name: "Dr. Akash Deep Muni", org: "Dean & Assistant Professor, India", img: "https://picsum.photos/seed/adv8/300/300" },
    { name: "Dr. Sumit Kumar Pandey", org: "Assistant Professor, India", img: "https://picsum.photos/seed/adv9/300/300" },
    { name: "Dr. Amresh Kumar Gouda", org: "Assistant Professor, India", img: "https://picsum.photos/seed/adv10/300/300" },
    { name: "Dr. Anand Joshi", org: "Professor, India", img: "https://picsum.photos/seed/adv11/300/300" },
    { name: "Dr. Rekha", org: "HOD & Professor, India", img: "https://picsum.photos/seed/adv12/300/300" },
    { name: "Dr. Rajan Miglani", org: "Dean & Professor, India", img: "https://picsum.photos/seed/adv13/300/300" },
    { name: "Dr. Sugandha Shekhar", org: "Assistant Professor, India", img: "https://picsum.photos/seed/adv14/300/300" }
  ];

  return (
    <div style={styles.appContainer}>
      <Header />

      <main style={styles.mainContent}>
        {/* 1. Crystal Hero Banner */}
        <div style={styles.heroBanner}></div>

        <div style={styles.pageContentWrapper}>
          {/* Title Row */}
          <div style={styles.sectionHeader}>
            <h1 style={styles.mainTitle}>INTERNATIONAL RESEARCH</h1>
            <h2 style={styles.mainSubtitle}>CONFERENCE 2025</h2>
            <p style={styles.hostedByText}>Hosted By Jadetimes Media LLC, United States</p>
            <p style={styles.locationsText}>held across India, New Mexico, London, Spain, Australia, and Sri Lanka | Call Us : +1 (505) 308-0715</p>
          </div>

          {/* 2. Registration Split Container */}
          <div style={styles.registrationSplit}>
            {/* Left: Poster Display Card */}
            <div style={styles.posterColumn}>
              <img 
                src="/images/Poster 5.avif" 
                alt="Conference Poster" 
                style={styles.posterImage} 
              />
            </div>

            {/* Right: Interactive Underlined Form */}
            <div style={styles.formColumn}>
              <h3 style={styles.formTitleText}>Submit Your Paper Today for upcoming International Research Conference 2025</h3>
              {registered ? (
                <div style={styles.successBox}>
                  <h4 style={styles.successTitle}>Registration Received!</h4>
                  <p style={styles.successText}>Thank you for registering for the Jadetimes 1st International Research Conference 2025. A confirmation email with event access links has been sent to <strong>{formData.email}</strong>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={styles.formContainer}>
                  {/* Row 1: Name and Country */}
                  <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Your Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        style={styles.underlineInput}
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Country *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                        style={styles.underlineInput}
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone and Email */}
                  <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Phone *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="📞 +"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        style={styles.underlineInput}
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Email *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        style={styles.underlineInput}
                      />
                    </div>
                  </div>

                  {/* Row 3: Presenter Mode and University Name */}
                  <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Presenter Modes *</label>
                      <div style={styles.radioGroup}>
                        <label style={styles.radioLabel}>
                          <input 
                            type="radio" 
                            name="presenterMode" 
                            value="Online" 
                            checked={formData.presenterMode === 'Online'}
                            onChange={() => setFormData({...formData, presenterMode: 'Online'})}
                            style={styles.radioButton}
                          />
                          Online Mode
                        </label>
                        <label style={styles.radioLabel}>
                          <input 
                            type="radio" 
                            name="presenterMode" 
                            value="Hybrid" 
                            checked={formData.presenterMode === 'Hybrid'}
                            onChange={() => setFormData({...formData, presenterMode: 'Hybrid'})}
                            style={styles.radioButton}
                          />
                          Hybrid Mode
                        </label>
                      </div>
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>University Name</label>
                      <input 
                        type="text" 
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        style={styles.underlineInput}
                      />
                    </div>
                  </div>

                  {/* Row 4: Entry Type and File Upload */}
                  <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Entry Type *</label>
                      <select 
                        value={formData.role}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                        style={styles.underlineSelect}
                      >
                        <option value="Presenter">Presenter</option>
                        <option value="Listener">Listener</option>
                        <option value="Author">Author</option>
                      </select>
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Submit Your Paper</label>
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileChange} 
                        style={{ display: 'none' }} 
                        accept=".pdf,.doc,.docx"
                      />
                      <button 
                        type="button" 
                        onClick={handleUploadClick} 
                        style={{
                          ...styles.uploadBtn,
                          borderColor: selectedFile ? '#22c55e' : '#d4d4d8',
                          color: selectedFile ? '#15803d' : '#171717'
                        }}
                      >
                        <span>{selectedFile ? `📄 ${selectedFile.name.substring(0, 15)}...` : '+ Upload'}</span>
                      </button>
                    </div>
                  </div>

                  <button type="submit" style={styles.submitBtnRect}>
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* 3. Centered YouTube Video Facade matching Screenshot 1 */}
          <div style={styles.videoContainer}>
            {videoPlaying ? (
              <iframe
                style={styles.iframe}
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                title="Jadetimes International Research Conference 2025"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div 
                style={styles.videoFacade}
                onClick={() => setVideoPlaying(true)}
              >
                {/* Top Info Bar */}
                <div style={styles.facadeTopBar}>
                  <div style={styles.facadeAvatar}>JT</div>
                  <div style={styles.facadeTitles}>
                    <span style={styles.facadeTitleText}>Jadetimes International Research Conference 2025</span>
                    <span style={styles.facadeChannelText}>Jadetimes</span>
                  </div>
                </div>

                {/* Play Button */}
                <div style={styles.playButton}>
                  <svg viewBox="0 0 68 48" width="68" height="48">
                    <path
                      d="M66.52 7.74a8 8 0 0 0-5.63-5.66C55.79 1 34 1 34 1s-21.8 0-26.89 1.08a8 8 0 0 0-5.63 5.66A83 83 0 0 0 .5 24a83 83 0 0 0 .98 16.26 8 8 0 0 0 5.63 5.66C12.2 47 34 47 34 47s21.79 0 26.89-1.08a8 8 0 0 0 5.63-5.66A83 83 0 0 0 67.5 24a83 83 0 0 0-.98-16.26z"
                      fill="#ff0000"
                    />
                    <path d="M27 34l18-10-18-10z" fill="#ffffff" />
                  </svg>
                </div>

                {/* Bottom Left Controls */}
                <div style={styles.facadeBottomLeft}>
                  {/* Share Arrow SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }}>
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                  {/* Watch Later Clock SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer', marginLeft: '16px' }}>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>

                {/* Watch on YouTube button */}
                <span style={styles.watchOnYt}>
                  Watch on <span style={{ fontWeight: 'bold' }}>YouTube</span>
                </span>
              </div>
            )}
          </div>

          {/* 4. Jadetimes Conference Videos Slider */}
          <div style={styles.sectionMargin}>
            <div style={styles.sliderHeader}>
              <span style={styles.sliderDots}>⋮</span>
              <h3 style={styles.sliderTitle}>Jadetimes Conference</h3>
            </div>
            
            <div style={styles.sliderContainer}>
              <div style={styles.videoRow}>
                {conferenceVideos.map((video, i) => (
                  <div key={i} style={styles.videoCard}>
                    <div style={styles.cardPlayerContainer}>
                      {activeVideoIndex === i ? (
                        <iframe
                          style={styles.cardIframe}
                          src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <div 
                          style={{
                            ...styles.cardFacade,
                            backgroundImage: `url('${video.thumbnail}')`
                          }}
                          onClick={() => setActiveVideoIndex(i)}
                        >
                          {/* Circle Play icon */}
                          <div style={styles.cardPlayBtn}>
                            <svg viewBox="0 0 24 24" width="36" height="36">
                              <circle cx="12" cy="12" r="10" fill="rgba(0,0,0,0.5)" stroke="#ffffff" strokeWidth="1.5" />
                              <path d="M10 8l6 4-6 4V8z" fill="#ffffff" />
                            </svg>
                          </div>
                          {/* Duration */}
                          <span style={styles.cardDuration}>{video.duration}</span>
                        </div>
                      )}
                    </div>
                    <div style={styles.cardMeta}>
                      <h4 style={styles.cardTitle}>{video.title}</h4>
                      <p style={styles.cardDetails}>{video.details}</p>
                      <p style={styles.cardDesc}>{video.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button style={styles.nextBtn} aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* 5. Detailed Text Blocks - Replaced with Announcements and Welcome texts */}
          <div style={styles.announcementsContainer}>
            {/* Announcement 1 */}
            <div style={styles.announcementBlock}>
              <h4 style={styles.announcementHeader}>Special Announcements</h4>
              <p style={styles.announcementText}>Dear Researchers, Scholars, and Academics,</p>
              <p style={styles.announcementText}>
                We are pleased to announce that due to the overwhelming response and high volume of quality paper submissions, our upcoming International Research Conference 2026 - Sri Lanka will now be held on <strong>Oct 14th 2026 at 11:00 AM (Sri Lankan Time)</strong>.
              </p>
              <p style={styles.announcementText}>
                We deeply appreciate your enthusiasm and engagement. Further updates and the finalized schedule will be shared shortly.
              </p>
              <div style={styles.signatureBlock}>
                Warm regards,<br />
                Organizing Committee<br />
                <em>Jadetimes International Research Conference</em><br />
                Date: 10/10/2025
              </div>
            </div>

            <hr style={styles.announcementDivider} />

            {/* Announcement 2: India World */}
            <div style={styles.announcementBlock}>
              <h4 style={styles.announcementHeader}>India World</h4>
              <h5 style={styles.announcementSubHeader}>Jadetimes International Research Conference India 2025 – Successfully Concluded</h5>
              <div style={styles.announcementDate}>12 July 2025 – India</div>
              <p style={styles.announcementText}>
                Jadetimes Media is pleased to announce that the Jadetimes International Research Conference India 2025 officially concluded on 12th July 2025. The conference brought together researchers, practitioners, and thought leaders from around the world to share cutting-edge research, foster interdisciplinary collaboration, and spark new ideas.
              </p>
              <p style={styles.announcementText}>
                We extend our heartfelt thanks to all keynote speakers, presenters, session chairs, sponsors, volunteers, and delegates whose energy and expertise made this event a success. Selected conference papers will be considered for publication in the Jadetimes Journal of Universal Studies and other partner journals. Conference recordings, highlights, and proceedings will be shared soon via Jadetimes Media channels. For updates, publication opportunities, and media inquiries, please follow our official channels or reach out to the Jadetimes team.
              </p>
              <div style={styles.signatureBlock}>
                Warm regards,<br />
                Organizing Committee<br />
                <em>Jadetimes International Research Conference</em><br />
                Date: 08/13/2025
              </div>
            </div>

            <hr style={styles.announcementDivider} />

            {/* Announcement 3 */}
            <div style={styles.announcementBlock}>
              <p style={styles.announcementText}>Dear Researchers, Scholars, and Academics,</p>
              <p style={styles.announcementText}>
                We are pleased to announce that due to the overwhelming response and high volume of quality paper submissions, our upcoming International Research Conference 2025 - India will now be held on <strong>July 12th 2025 at 9.00 AM (Indian Time)</strong>.
              </p>
              <p style={styles.announcementText}>
                We deeply appreciate your enthusiasm and engagement, and we look forward to welcoming you in July for a more enriched, diverse, and impactful conference experience.
              </p>
              <p style={styles.announcementText}>
                Further updates and the finalized schedule will be shared shortly.
              </p>
              <div style={styles.signatureBlock}>
                Warm regards,<br />
                Organizing Committee<br />
                <em>Jadetimes International Research Conference</em><br />
                Date: 07/02/2025
              </div>
            </div>

            <hr style={styles.announcementDivider} />

            {/* Announcement 4: Welcome Message */}
            <div style={styles.announcementBlock}>
              <p style={styles.announcementText}>
                It is with great pleasure that we welcome you to the International Research Conference 2025, proudly hosted by Jadetimes Media LLC, United States.
              </p>
              <p style={styles.announcementText}>
                In a time where knowledge knows no borders, we are honored to bring together a diverse community of scholars, professionals, and students from around the world. This conference is not only a platform to share groundbreaking research, but also a space to inspire collaboration, spark innovation, and foster meaningful academic connections.
              </p>
              <p style={styles.announcementText}>
                Whether you're joining us through our online platform or participating in hybrid mode from one of our designated locations, we are excited to provide an inclusive, engaging, and professional environment for your voice to be heard. We look forward to your valuable contributions and to witnessing the remarkable work you bring to this global stage.
              </p>
              <div style={styles.signatureBlock}>
                Warm regards,<br />
                Organizing Committee<br />
                Jadetimes Media LLC<br />
                Date: 03/27/2025
              </div>
              <div>
                <a href="#" style={styles.downloadLink}>Click here to download the conference booklet</a>
              </div>
            </div>

            <hr style={styles.announcementDivider} />

            {/* Section: 1st Place Award */}
            <div style={styles.announcementBlock}>
              <h4 style={styles.announcementHeader}>1st PLACE - BEST RESEARCH PAPER AWARD</h4>
              <p style={styles.announcementText}>The winner of the 1st Place – Best Research Paper Award will receive:</p>
              <ul style={styles.announcementList}>
                <li style={styles.announcementListItem}>$2000 USD Cash Prize</li>
                <li style={styles.announcementListItem}>Official Conference Trophy</li>
                <li style={styles.announcementListItem}>Digital Certificate of Excellence</li>
                <li style={styles.announcementListItem}>Feature Articles in 50+ Online Global Media</li>
                <li style={styles.announcementListItem}>Special Recognition in the Journal of Universal Studies & Free Paper Publications</li>
                <li style={styles.announcementListItem}>Exclusive Interview Feature</li>
                <li style={styles.announcementListItem}>Global Research Promotion</li>
                <li style={styles.announcementListItem}>Invitation to Future Jadetimes Events</li>
              </ul>
            </div>

            <hr style={styles.announcementDivider} />

            {/* Section: 2nd Place Award */}
            <div style={styles.announcementBlock}>
              <h4 style={styles.announcementHeader}>2nd PLACE - BEST RESEARCH PAPER AWARD</h4>
              <p style={styles.announcementText}>The winner of the 2nd Place – Best Research Paper Award will receive:</p>
              <ul style={styles.announcementList}>
                <li style={styles.announcementListItem}>$500 USD Cash Prize</li>
                <li style={styles.announcementListItem}>Official Conference Trophy</li>
                <li style={styles.announcementListItem}>Digital Certificate of Excellence</li>
                <li style={styles.announcementListItem}>Feature Articles in 30+ Online Global Media</li>
                <li style={styles.announcementListItem}>Special Recognition in the Journal of Universal Studies & Free Paper Publications</li>
                <li style={styles.announcementListItem}>Exclusive Interview Feature</li>
                <li style={styles.announcementListItem}>Global Research Promotion</li>
                <li style={styles.announcementListItem}>Invitation to Future Jadetimes Events</li>
              </ul>
            </div>

            <hr style={styles.announcementDivider} />

            {/* Section: 3rd Place Award */}
            <div style={styles.announcementBlock}>
              <h4 style={styles.announcementHeader}>3rd PLACE - BEST RESEARCH PAPER AWARD</h4>
              <p style={styles.announcementText}>The winner of the 3rd Place – Best Research Paper Award will receive:</p>
              <ul style={styles.announcementList}>
                <li style={styles.announcementListItem}>$250 USD Cash Prize</li>
                <li style={styles.announcementListItem}>Official Conference Trophy</li>
                <li style={styles.announcementListItem}>Digital Certificate of Excellence</li>
                <li style={styles.announcementListItem}>Feature Articles in 10+ Online Global Media</li>
                <li style={styles.announcementListItem}>Special Recognition in the Journal of Universal Studies & Free Paper Publications</li>
                <li style={styles.announcementListItem}>Exclusive Interview Feature</li>
                <li style={styles.announcementListItem}>Global Research Promotion</li>
                <li style={styles.announcementListItem}>Invitation to Future Jadetimes Events</li>
              </ul>
            </div>

            <hr style={styles.announcementDivider} />

            {/* Section: Present & Participation Award */}
            <div style={styles.announcementBlock}>
              <h4 style={styles.announcementHeader}>Conference Paper Present & Participation Award</h4>
              <p style={styles.announcementText}>
                All researchers and presenters who actively participate in the International Research Conference hosted by Jadetimes Media LLC will receive a Conference Participation Award. This award acknowledges the valuable contribution of each participant to the global exchange of knowledge and ideas.
              </p>
              <ul style={styles.announcementList}>
                <li style={styles.announcementListItem}>Official Conference Trophy</li>
                <li style={styles.announcementListItem}>Digital Certificate of Excellence</li>
                <li style={styles.announcementListItem}>Special Recognition in the Journal of Universal Studies & Free Paper Publications</li>
                <li style={styles.announcementListItem}>Exclusive Interview Feature</li>
                <li style={styles.announcementListItem}>Global Research Promotion</li>
                <li style={styles.announcementListItem}>Invitation to Future Jadetimes Events</li>
              </ul>
            </div>

            <hr style={styles.announcementDivider} />

            {/* Section: Who we are */}
            <div style={styles.announcementBlock}>
              <h4 style={styles.announcementHeader}>Who we are?</h4>
              <p style={styles.announcementText}>
                Jadetimes Media LLC is a global media and publishing company dedicated to empowering voices, sharing knowledge, and shaping conversations across borders. With a strong commitment to excellence in journalism, academic publishing, and business storytelling, Jadetimes has built a diverse portfolio that spans over 30+ News content categories distributed worldwide.
              </p>
              <p style={styles.announcementText}>
                We are proud to have recently launched our international peer-reviewed journal, the Journal of Universal Studies, which serves as a platform for groundbreaking research across multidisciplinary fields. In addition, Jadetimes publishes two flagship business magazines, offering in-depth insights into global markets, entrepreneurship, innovation, and industry leadership.
              </p>
              <p style={styles.announcementText}>
                At our core, we are driven by the mission to connect thinkers, creators, and changemakers through powerful content and impactful media.
              </p>
            </div>

            <hr style={styles.announcementDivider} />

            {/* Section: Key Topic Areas */}
            <div style={styles.announcementBlock}>
              <h4 style={styles.announcementHeader}>Key Topic Areas</h4>
              <p style={styles.announcementText}>
                The International Research Conference 2025 hosted by Jadetimes Media LLC invites submissions from a wide range of disciplines. Our aim is to foster interdisciplinary dialogue and spotlight research that drives progress and inspires change. We welcome papers that explore the following key areas:
              </p>
              <ul style={styles.announcementList}>
                <li style={styles.announcementListItem}>Science & Technology</li>
                <li style={styles.announcementListItem}>Engineering & Innovation</li>
                <li style={styles.announcementListItem}>Artificial Intelligence & Machine Learning</li>
                <li style={styles.announcementListItem}>Climate Change & Environmental Research</li>
                <li style={styles.announcementListItem}>Arts, Culture & Humanities</li>
                <li style={styles.announcementListItem}>Media, Communication & Journalism</li>
                <li style={styles.announcementListItem}>Social Sciences & Psychology</li>
                <li style={styles.announcementListItem}>Business, Management & Economics</li>
                <li style={styles.announcementListItem}>Education & Online Learning</li>
                <li style={styles.announcementListItem}>Public Health & Medical Research</li>
                <li style={styles.announcementListItem}>Sports Science & Physical Education</li>
                <li style={styles.announcementListItem}>Library & Information Science</li>
                <li style={styles.announcementListItem}>Disaster Management & Crisis Response</li>
                <li style={styles.announcementListItem}>Law & International Relations</li>
                <li style={styles.announcementListItem}>Agriculture & Food Sciences</li>
                <li style={styles.announcementListItem}>Information Technology & Cybersecurity</li>
                <li style={styles.announcementListItem}>Data Science & Big Data Analytics</li>
                <li style={styles.announcementListItem}>Architecture & Urban Planning</li>
                <li style={styles.announcementListItem}>Philosophy & Ethics</li>
                <li style={styles.announcementListItem}>Entrepreneurship & Start-up Innovation</li>
                <li style={styles.announcementListItem}>Tourism, Hospitality & Event Management</li>
                <li style={styles.announcementListItem}>Energy & Renewable Resources</li>
                <li style={styles.announcementListItem}>Linguistics & Language Studies</li>
                <li style={styles.announcementListItem}>Gender Studies & Social Justice</li>
                <li style={styles.announcementListItem}>Cognitive Science & Neuroscience</li>
              </ul>
              <p style={styles.announcementText}>
                Researchers, academics, professionals, and students from around the world are encouraged to contribute original work that aligns with these themes. Multidisciplinary and cross-sectoral studies are highly appreciated.
              </p>
            </div>

            <hr style={styles.announcementDivider} />

            {/* Section: Paper Submission Guidelines */}
            <div style={styles.announcementBlock}>
              <h4 style={styles.announcementHeader}>Paper Submission Guidelines</h4>
              <p style={styles.announcementText}>
                All researchers are invited to submit their work for presentation at the International Research Conference 2025 organized by Jadetimes Media LLC. Submissions must adhere to the following guidelines to ensure a smooth review and presentation process:
              </p>
              <ul style={styles.announcementList}>
                <li style={styles.announcementListItem}>Abstract Submission Deadline: 25th June 2025</li>
                <li style={styles.announcementListItem}>Full Paper Submission Deadline: 28th June 2025</li>
                <li style={styles.announcementListItem}>Presentation Duration: 12 minutes for presentation, followed by 5 minutes for Q&A</li>
                <li style={styles.announcementListItem}>Language: All submissions and presentations must be in English</li>
                <li style={styles.announcementListItem}>Paper Submission Method: Through Jadetimes Journal Website or scan below QR Code to submit your paper through Jadetimes portal.</li>
              </ul>
            </div>

            <hr style={styles.announcementDivider} />

            {/* Section: Paper Quality Standards */}
            <div style={styles.announcementBlock}>
              <h4 style={styles.announcementHeader}>Paper Quality Standards</h4>
              <p style={styles.announcementText}>
                At Jadetimes Media LLC, we are committed to maintaining the highest standards of academic and research excellence. All submitted papers will undergo a rigorous peer-review process to ensure originality, relevance, and academic integrity. Authors are expected to present well-structured arguments, supported by credible sources, clear methodology, and innovative insights.
              </p>
            </div>

            <hr style={styles.announcementDivider} />

            {/* Section: Manuscript Structure */}
            <div style={styles.announcementBlock}>
              <h4 style={styles.announcementHeader}>Manuscript Structure (mandatory sections)</h4>
              <ul style={styles.announcementList}>
                <li style={styles.announcementListItem}>Title: Clear, concise, and relevant to the research.</li>
                <li style={styles.announcementListItem}>Author(s) Information: Full name, designation, affiliation, and email.</li>
                <li style={styles.announcementListItem}>Abstract: Maximum 150 words, summarizing objectives, methods, findings, and significance.</li>
                <li style={styles.announcementListItem}>Keywords: Maximum 5, directly related to the research.</li>
                <li style={styles.announcementListItem}>Introduction: Background, research problem, objectives, and significance.</li>
                <li style={styles.announcementListItem}>Literature Review: Overview of previous research, theoretical framework, and gaps.</li>
                <li style={styles.announcementListItem}>Methodology: Explanation of data collection and data analysis methods.</li>
                <li style={styles.announcementListItem}>Results & Discussion: Presentation of findings with interpretation.</li>
                <li style={styles.announcementListItem}>Conclusion: Summary of key points, implications, and recommendations.</li>
                <li style={styles.announcementListItem}>References: APA format (Latest edition).</li>
              </ul>
            </div>

            <hr style={styles.announcementDivider} />

            {/* Section: Presentation Modes */}
            <div style={styles.announcementBlock}>
              <h4 style={styles.announcementHeader}>Presentation Modes</h4>
              <p style={styles.announcementText}>
                Jadetimes Media LLC offers two flexible modes for research paper presentations to accommodate global participants:
              </p>
              <h5 style={styles.announcementSubHeader}>1. ONLINE MODE</h5>
              <ul style={styles.announcementList}>
                <li style={styles.announcementListItem}>Present remotely from your own location</li>
                <li style={styles.announcementListItem}>Join via zoom or Google meet</li>
                <li style={styles.announcementListItem}>Suitable for all International participants</li>
                <li style={styles.announcementListItem}>Live or pre-recorded presentations accepted</li>
              </ul>
              <h5 style={styles.announcementSubHeader}>2. HYBRID MODE (For Select Locations)</h5>
              <ul style={styles.announcementList}>
                <li style={styles.announcementListItem}>Present your paper in person at a designated Jadetimes Media partner venue</li>
                <li style={styles.announcementListItem}>Locations: India, New Mexico, London, Spain, Australia & Sri Lanka</li>
              </ul>
            </div>

            <hr style={styles.announcementDivider} />

            {/* Section: Online Mode Fee Structure */}
            <div style={styles.announcementBlock}>
              <h4 style={styles.announcementHeader}>Online Mode Fee Structure</h4>
              <p style={styles.announcementText}>
                Participation in the international online Research conference hosted by Jadetimes Media LLC is available in online mode. Please find the detailed fee structure below:
              </p>
              <ul style={styles.announcementList}>
                <li style={styles.announcementListItem}>Individual Presenter (Single Paper): $100 USD</li>
                <li style={styles.announcementListItem}>PhD Scholar Presenter: $200 USD</li>
                <li style={styles.announcementListItem}>Co-author Presentation (Two Authors Presenting): $250 USD</li>
                <li style={styles.announcementListItem}>Student Presenter (with valid ID): $150 USD</li>
                <li style={styles.announcementListItem}>Additional Paper Submission: $80 USD per paper</li>
              </ul>
              <p style={styles.announcementText}>
                All participants will receive official certificates, access to all sessions, conference materials, and presentation recordings. PhD Scholars must provide valid university ID at registration. Group discounts (20%) are available for institutions registering 5 or more participants.
              </p>
            </div>

            <hr style={styles.announcementDivider} />

            {/* Section: Hybrid Mode Fee Structure */}
            <div style={styles.announcementBlock}>
              <h4 style={styles.announcementHeader}>Hybrid Mode Fee Structure</h4>
              <p style={styles.announcementText}>
                Participation in the International Research Conference 2025 hosted by Jadetimes Media LLC is available in Hybrid (Physical Location). Please find the detailed fee structure below:
              </p>
              <ul style={styles.announcementList}>
                <li style={styles.announcementListItem}>Individual Presenter (Single Paper): $100 USD</li>
                <li style={styles.announcementListItem}>PhD Scholar Presenter: $300 USD</li>
                <li style={styles.announcementListItem}>Co-Author Presentation (Two Authors Presenting): $350 USD</li>
                <li style={styles.announcementListItem}>Student Presenter (With Valid ID): $250 USD</li>
                <li style={styles.announcementListItem}>Additional Paper Submission: $100 USD per paper</li>
              </ul>
              <p style={styles.announcementText}>
                All participants will receive official certificates, access to all sessions, conference materials, and presentation recordings. PhD Scholars must provide valid university ID at registration. Group discounts (20%) are available for institutions registering 5 or more participants.
              </p>
            </div>
          </div>

          {/* 6. Executive & Technical Committees */}
          <div style={styles.sectionMargin}>
            <h3 style={styles.subSectionTitle}>Organizing Committee Members</h3>
            <div style={styles.redRuleLeft} />
            <div style={styles.committeeGrid}>
              {committeeMembers.map((member, i) => (
                <div key={i} style={styles.memberCard}>
                  <img src={member.img} alt={member.name} style={styles.memberImg} />
                  <h5 style={styles.memberName}>{member.name}</h5>
                  <p style={styles.memberOrg}>{member.org}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Advisory Board Committee */}
          <div style={styles.sectionMargin}>
            <h3 style={styles.subSectionTitle}>Jadetimes Advisory Board Who Leads the International Research Conference 2026</h3>
            <div style={styles.redRuleLeft} />
            <div style={styles.committeeGrid}>
              {advisoryBoard.map((member, i) => (
                <div key={i} style={styles.memberCard}>
                  <img src={member.img} alt={member.name} style={styles.memberImg} />
                  <h5 style={styles.memberName}>{member.name}</h5>
                  <p style={styles.memberOrg}>{member.org}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 8. Contact Segment */}
          <div style={styles.contactSegment}>
            <h4 style={styles.contactHeading}>Have Questions or Need Assistance?</h4>
            <p style={styles.contactText}>Our support team is here to help with your submissions, registrations, or travel inquiries.</p>
            <div style={styles.contactMeta}>
              <span>📧 conference@jadetimes.com</span>
              <span>📞 +94 11 234 5678</span>
              <span>📍 Jadetimes Conference Desk, Colombo, Sri Lanka</span>
            </div>
          </div>

        </div>
      </main>

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
  heroBanner: {
    width: '100%',
    height: '740px',
    backgroundImage: `url('/images/6271b2_6f004dba92b7445882afaa8fe5fa7a23~mv2.avif')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    marginTop: '-110px'
  },
  pageContentWrapper: {
    maxWidth: '1350px',
    margin: '0 auto',
    padding: '40px 5% 80px 5%'
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '40px'
  },
  mainTitle: {
    fontFamily: "var(--font-main), sans-serif",
    fontSize: '38px',
    fontWeight: '400',
    color: '#171717',
    margin: '0 0 6px 0',
    letterSpacing: '1.2px'
  },
  mainSubtitle: {
    fontFamily: "var(--font-main), sans-serif",
    fontSize: '34px',
    fontWeight: '400',
    color: '#171717',
    margin: '0 0 12px 0',
    letterSpacing: '0.8px'
  },
  hostedByText: {
    fontFamily: "var(--font-main), sans-serif",
    fontSize: '22px',
    fontWeight: '400',
    color: '#171717',
    margin: '0 0 8px 0'
  },
  locationsText: {
    fontFamily: "var(--font-main), sans-serif",
    fontSize: '13px',
    color: '#52525b',
    margin: 0
  },
  registrationSplit: {
    display: 'flex',
    gap: '40px',
    marginBottom: '60px',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  posterColumn: {
    flex: 1,
    minWidth: '320px'
  },
  posterImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '2px',
    display: 'block'
  },
  formColumn: {
    flex: 1.3,
    minWidth: '340px',
    background: '#ffffff',
    padding: '10px 0px'
  },
  formTitleText: {
    fontSize: '15px',
    fontWeight: '500',
    lineHeight: '1.5',
    color: '#171717',
    marginBottom: '30px'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  formRow: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap'
  },
  formGroup: {
    flex: 1,
    minWidth: '200px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  formLabel: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#171717'
  },
  underlineInput: {
    border: 'none',
    borderBottom: '1px solid #71717a',
    borderRadius: 0,
    outline: 'none',
    padding: '8px 0',
    width: '100%',
    fontFamily: 'inherit',
    fontSize: '14px',
    color: '#171717',
    background: 'transparent',
    transition: 'border-color 0.2s'
  },
  underlineSelect: {
    border: 'none',
    borderBottom: '1px solid #71717a',
    borderRadius: 0,
    outline: 'none',
    padding: '8px 0',
    width: '100%',
    fontFamily: 'inherit',
    fontSize: '14px',
    color: '#171717',
    background: 'transparent',
    cursor: 'pointer'
  },
  radioGroup: {
    display: 'flex',
    gap: '20px',
    padding: '8px 0'
  },
  radioLabel: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#171717',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer'
  },
  radioButton: {
    width: '16px',
    height: '16px',
    cursor: 'pointer',
    accentColor: '#171717'
  },
  uploadBtn: {
    border: '1px solid #d4d4d8',
    padding: '8px 16px',
    borderRadius: '4px',
    background: '#ffffff',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '13px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    alignSelf: 'flex-start',
    marginTop: '4px'
  },
  submitBtnRect: {
    width: '100%',
    padding: '14px 20px',
    background: '#000000',
    color: '#ffffff',
    border: 'none',
    borderRadius: '0px',
    fontSize: '14px',
    fontWeight: '700',
    cursor: 'pointer',
    letterSpacing: '1px',
    textAlign: 'center',
    marginTop: '10px',
    textTransform: 'capitalize'
  },
  successBox: {
    textAlign: 'center',
    padding: '40px 20px',
    background: 'rgba(34, 197, 94, 0.05)',
    border: '1px dashed rgba(34, 197, 94, 0.3)',
    borderRadius: '6px'
  },
  successTitle: {
    color: '#15803d',
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '10px'
  },
  successText: {
    fontSize: '13px',
    color: '#4b5563',
    lineHeight: '1.6'
  },
  videoContainer: {
    width: '100%',
    height: '520px',
    background: '#000000',
    borderRadius: '4px',
    overflow: 'hidden',
    position: 'relative',
    marginBottom: '60px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.06)'
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none'
  },
  videoFacade: {
    width: '100%',
    height: '100%',
    backgroundImage: `url('/images/6271b2_0f57dfb91c344deab0872a3a4875df3f~mv2.avif')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  facadeTopBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: '20px',
    background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    zIndex: 2
  },
  facadeAvatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: '#111113',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '12px',
    border: '1px solid rgba(255,255,255,0.2)'
  },
  facadeTitles: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1px'
  },
  facadeTitleText: {
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: '600',
    textShadow: '0 1px 3px rgba(0,0,0,0.8)'
  },
  facadeChannelText: {
    color: '#a1a1aa',
    fontSize: '11px',
    fontWeight: '500'
  },
  playButton: {
    zIndex: 2,
    transition: 'transform 0.2s'
  },
  facadeBottomLeft: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    display: 'flex',
    alignItems: 'center',
    zIndex: 2
  },
  watchOnYt: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    padding: '6px 12px',
    background: 'rgba(0, 0, 0, 0.7)',
    color: '#ffffff',
    borderRadius: '2px',
    fontSize: '12px',
    fontWeight: '500',
    textDecoration: 'none',
    zIndex: 2
  },
  sliderHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '20px',
    marginLeft: '-7.5%'
  },
  sliderDots: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#71717a',
    lineHeight: '1'
  },
  sliderTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#171717',
    margin: 0,
    fontFamily: "var(--font-main), sans-serif"
  },
  sliderContainer: {
    position: 'relative',
    width: 'calc(100% + 15%)',
    marginLeft: '-7.5%',
    marginRight: '-7.5%',
    paddingLeft: '0',
    paddingRight: '2%',
    boxSizing: 'border-box'
  },
  videoRow: {
    display: 'flex',
    gap: '20px',
    overflowX: 'auto',
    paddingBottom: '10px',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none'
  },
  videoCard: {
    flex: '0 0 310px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  cardPlayerContainer: {
    width: '100%',
    height: '175px',
    borderRadius: '4px',
    overflow: 'hidden',
    position: 'relative',
    background: '#000000'
  },
  cardIframe: {
    width: '100%',
    height: '100%',
    border: 'none'
  },
  cardFacade: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardPlayBtn: {
    width: '44px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    transition: 'transform 0.2s',
    cursor: 'pointer'
  },
  cardDuration: {
    position: 'absolute',
    bottom: '8px',
    right: '8px',
    background: 'rgba(0,0,0,0.8)',
    color: '#ffffff',
    fontSize: '11px',
    fontWeight: '600',
    padding: '2px 6px',
    borderRadius: '2px'
  },
  cardMeta: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  cardTitle: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#171717',
    lineHeight: '1.4',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  cardDetails: {
    fontSize: '11px',
    color: '#71717a',
    margin: 0
  },
  cardDesc: {
    fontSize: '11px',
    color: '#a1a1aa',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  nextBtn: {
    position: 'absolute',
    right: '1%',
    top: '70px',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: '#ffffff',
    border: '1px solid #e4e4e7',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 5
  },
  announcementsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    marginBottom: '60px',
    fontFamily: "var(--font-main), sans-serif"
  },
  announcementBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  announcementHeader: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#171717',
    marginBottom: '8px'
  },
  announcementSubHeader: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#171717',
    marginBottom: '4px'
  },
  announcementDate: {
    fontSize: '13px',
    color: '#71717a',
    fontWeight: '500',
    marginBottom: '8px'
  },
  announcementText: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#171717',
    margin: 0
  },
  signatureBlock: {
    marginTop: '10px',
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#171717'
  },
  announcementDivider: {
    border: 'none',
    borderTop: '1px solid #e4e4e7',
    margin: '20px 0'
  },
  downloadLink: {
    color: '#ef4444',
    textDecoration: 'underline',
    fontWeight: '600',
    fontSize: '14px',
    marginTop: '10px',
    display: 'inline-block',
    cursor: 'pointer'
  },
  announcementList: {
    margin: '10px 0 20px 20px',
    padding: 0,
    listStyleType: 'disc',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  announcementListItem: {
    fontSize: '14px',
    color: '#171717',
    lineHeight: '1.6'
  },
  list: {
    fontSize: '13px',
    lineHeight: '1.6',
    color: '#52525b',
    paddingLeft: '20px',
    margin: '10px 0 0 0'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '12px',
    marginTop: '10px'
  },
  thRow: {
    borderBottom: '2px solid #e4e4e7'
  },
  th: {
    textAlign: 'left',
    padding: '8px 0',
    fontWeight: '700',
    color: '#171717'
  },
  tr: {
    borderBottom: '1px solid #f4f4f5'
  },
  td: {
    padding: '10px 0',
    color: '#52525b'
  },
  committeeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '20px'
  },
  memberCard: {
    background: '#ffffff',
    border: '1px solid #e4e4e7',
    borderRadius: '6px',
    padding: '16px',
    textAlign: 'center'
  },
  memberImg: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '12px'
  },
  memberName: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#171717',
    margin: '0 0 4px 0'
  },
  memberOrg: {
    fontSize: '11px',
    color: '#71717a',
    margin: 0
  },
  pricingContainer: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap'
  },
  priceCard: {
    flex: '1 1 280px',
    background: '#ffffff',
    border: '1px solid #e4e4e7',
    borderRadius: '8px',
    padding: '30px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 25px rgba(0,0,0,0.02)'
  },
  bestBadge: {
    position: 'absolute',
    top: '-12px',
    right: '20px',
    background: '#ef4444',
    color: '#ffffff',
    fontSize: '9px',
    fontWeight: '800',
    padding: '4px 10px',
    borderRadius: '12px',
    letterSpacing: '0.5px'
  },
  priceTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#171717',
    margin: '0 0 8px 0'
  },
  priceValue: {
    fontSize: '36px',
    fontWeight: '900',
    color: '#171717',
    marginBottom: '4px'
  },
  priceSubtitle: {
    fontSize: '11px',
    color: '#ef4444',
    fontWeight: '600',
    letterSpacing: '0.5px',
    marginBottom: '20px'
  },
  priceList: {
    paddingLeft: '18px',
    margin: 0,
    fontSize: '12px',
    lineHeight: '1.8',
    color: '#52525b'
  },
  contactSegment: {
    background: '#f8f9fa',
    border: '1px solid #e4e4e7',
    borderRadius: '8px',
    padding: '40px',
    textAlign: 'center',
    marginTop: '20px'
  },
  contactHeading: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#171717',
    marginBottom: '10px'
  },
  contactText: {
    fontSize: '13px',
    color: '#71717a',
    marginBottom: '24px'
  },
  contactMeta: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    fontSize: '13px',
    fontWeight: '600',
    color: '#52525b'
  },
  sectionMargin: {
    marginBottom: '60px'
  },
  subSectionTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#171717',
    marginBottom: '8px'
  },
  redRuleLeft: {
    width: '50px',
    height: '3px',
    background: '#ef4444',
    marginBottom: '30px'
  }
};
