'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import CategoryPageTitle from '../../../components/CategoryPageTitle';
import LatestUpdatesBar from '../../../components/LatestUpdatesBar';
import NewsFeatureHero from '../../../components/NewsFeatureHero';
import NewsCard from '../../../components/NewsCard';
import YoutubeUpdatesHero from '../../../components/YoutubeUpdatesHero';
import MoreFromSection from '../../../components/MoreFromSection';
import Footer from '../../../components/Footer';
import NewsTopicRow from '../../../components/NewsTopicRow';

import { fetchNews, fetchLatestUpdates, fetchNewsPage } from '../../../services/api';

// Specific data to match Business page screenshot exactly
const businessFeatured = {
  id: 'b-feat',
  title: "Intel CEO Lip-Bu Tan Faces Scrutiny Over Past China Investments Amid U.S....",
  description: "Intel CEO Lip-Bu Tan Faces Scrutiny Over Past China Investments Amid U.S. Political Backlash",
  image: "https://picsum.photos/seed/intelceo/1000/900",
  author: "Rahaman Hasibur",
  timeAgo: "Aug 15, 2025",
  category: "Business"
};

const businessSidebar = [
  {
    id: 'b-side-1',
    title: "Trump's Sudden U-Turn: Canada & Mexico Automakers...",
    category: "Political",
    image: "https://picsum.photos/seed/redtruck/400/300"
  },
  {
    id: 'b-side-2',
    title: "Aston Martin Shares Plummet After Profit Warning Amid...",
    category: "Business",
    image: "https://picsum.photos/seed/astonmartin/400/300"
  },
  {
    id: 'b-side-3',
    title: "Will Return Fees Deter Shoppers From Online Retail? The Growing...",
    category: "Fashion",
    image: "https://picsum.photos/seed/onlineshopping/400/300"
  }
];

const businessBottomGrid = [
  {
    id: 'b-bot-1',
    title: "Australia Holds Interest Rates but Warns Inflation Battle Isn't Over",
    description: "The Reserve Bank of Australia announced today that it will keep...",
    image: "https://picsum.photos/seed/australiarates/800/600"
  },
  {
    id: 'b-bot-2',
    title: "US-Iran Strikes Challenge Interim Peace, Global Stability and the Future of...",
    description: "The rivalry between US-Iran strengthening is further evidence as...",
    image: "https://picsum.photos/seed/usiranstrikes/800/600"
  },
  {
    id: 'b-bot-3',
    title: "Dr. Othmini Krishnamurthy Rajendran: Advancing Precision Oncology Through...",
    description: "Artificial intelligence is rapidly transforming healthcare, and among...",
    image: "https://picsum.photos/seed/oncology/800/600"
  },
  {
    id: 'b-bot-4',
    title: "Chris Brown Reveals The Tracklist of Brown",
    description: "Chris Brown revealed the official tracklist for BROWN, his upcoming...",
    image: "https://picsum.photos/seed/chrisbrown/800/600"
  },
  {
    id: 'b-bot-5',
    title: "Brock Lesnar Retires at WrestleMania 2026: The End of an Era",
    description: "In a moment that will be remembered for generations, Brock Lesnar official...",
    image: "https://picsum.photos/seed/wrestlemania/800/600"
  }
];

const businessYoutube = {
  id: 'b-yt',
  title: "Tesla Investors Approve $56 Billion Pay Package for Musk",
  description: "Tesla shareholders approved a $56 billion pay package for CEO Elon Musk despite a Delaware judge's concerns over fairness. The non-binding vote shows strong investor support, but legal uncertainties remain as experts debate the impact on the court's decision.",
  channel: "Jadetimes",
  image: "https://picsum.photos/seed/teslaforest/1600/900",
  videoId: null
};

const businessMoreFrom = [
  {
    id: 'b-more-1',
    title: "The New Silk Road: Re-engineering Global Trade Routes",
    image: "https://picsum.photos/seed/trademap/400/300"
  },
  {
    id: 'b-more-2',
    title: "Rogue Agents or Marketing Stunt? The Unsettling Truth Behind the OpenAI Hugging...",
    image: "https://picsum.photos/seed/openailogo/400/300"
  },
  {
    id: 'b-more-3',
    title: "Welcome to the A*Pop World",
    author: "Wanjiru Waweru",
    timeAgo: "Aug 1",
    readTime: "1 min read",
    image: "https://picsum.photos/seed/apopworld/400/300"
  },
  {
    id: 'b-more-4',
    title: "The Race for Critical Minerals",
    author: "Ravichandran Harini",
    timeAgo: "Jul 24",
    readTime: "3 min read",
    image: "https://picsum.photos/seed/minerals/400/300"
  },
  {
    id: 'b-more-5',
    title: "The Race to Live Forever",
    author: "Ravichandran Harini",
    timeAgo: "Jul 24",
    readTime: "2 min read",
    image: "https://picsum.photos/seed/liveforever/400/300"
  },
  {
    id: 'b-more-6',
    title: "Dr. Manvendra Singh: Shaping the Future of AI-Driven Governance, Strategic...",
    image: "https://picsum.photos/seed/singh/400/300"
  },
  {
    id: 'b-more-7',
    title: "Tyla Revealed the Tracklist of A*POP",
    author: "Wanjiru Waweru",
    image: "https://picsum.photos/seed/tylatrack/400/300"
  },
  {
    id: 'b-more-8',
    title: "The Rise of AI Agents",
    author: "Ravichandran Harini",
    timeAgo: "Jul 18",
    readTime: "2 min read",
    image: "https://picsum.photos/seed/aiagents/400/300"
  },
  {
    id: 'b-more-9',
    title: "Japan Launches World's Fastest Commercial Quantum Computing Network",
    image: "https://picsum.photos/seed/quantum/400/300"
  },
  {
    id: 'b-more-10',
    title: "Australia Holds Interest Rates but Warns Inflation Battle Isn't Over",
    image: "https://picsum.photos/seed/australiarates/400/300"
  }
];

const businessUpdates = [
  { id: 'u1', timeAgo: 'Jul 22', title: "Tyla Revealed the Tracklist of A*POP" },
  { id: 'u2', timeAgo: 'Dec 20, 2025', title: "U.S. Soybean Deal Timeline Shifts as Growing Season Becomes Ne..." },
  { id: 'u3', timeAgo: 'Dec 15, 2025', title: "The AI Boom Could End Worse Than the Dot-Com Crash" },
  { id: 'u4', timeAgo: 'Dec 15, 2025', title: "ADP Data Show November Private Hiring Slowed with Sharp Drop in..." }
];

// Specific data to match Law page screenshot exactly
const lawFeatured = {
  id: 'l-feat',
  title: "Former President Ranil Wickremesinghe Arrested: A Nation Questions the Price o...",
  description: "Former President Ranil Wickremesinghe Arrested: A Nation Questions the Price of Service",
  image: "https://picsum.photos/seed/ranil/1000/900",
  author: "S. Asiri",
  timeAgo: "Aug 22, 2025",
  category: "Law"
};

const lawSidebar = [
  {
    id: 'l-side-1',
    title: "Miracle Recovery? Pope Francis Set for Hospital Release!",
    category: "Health",
    image: "https://picsum.photos/seed/pope/400/300"
  },
  {
    id: 'l-side-2',
    title: "From Samba Sounds to Multicolored Sights: A Look at Brazil's...",
    category: "Culture",
    image: "https://picsum.photos/seed/samba/400/300"
  },
  {
    id: 'l-side-3',
    title: "Five Ways to Link Sri Lanka's Small Businesses to Global...",
    category: "Asia",
    image: "https://picsum.photos/seed/srilankabiz/400/300"
  }
];

const lawBottomGrid = [
  {
    id: 'l-bot-1',
    title: "Australia Holds Interest Rates but Warns Inflation Battle Isn't Over",
    description: "The Reserve Bank of Australia announced today that it will keep...",
    image: "https://picsum.photos/seed/australiarates/800/600"
  },
  {
    id: 'l-bot-2',
    title: "Massive Undersea Internet Cable Project Announced Across Asia and Africa",
    description: "A major international telecommunications consortium...",
    image: "https://picsum.photos/seed/cableundersea/800/600"
  },
  {
    id: 'l-bot-3',
    title: "US-Iran Strikes Challenge Interim Peace, Global Stability and the Future of...",
    description: "The rivalry between US-Iran strengthening is further evidence as...",
    image: "https://picsum.photos/seed/usiranstrikes/800/600"
  },
  {
    id: 'l-bot-4',
    title: "Dr. Othmini Krishnamurthy Rajendran: Advancing Precision Oncology Through...",
    description: "Artificial intelligence is rapidly transforming healthcare, and among...",
    image: "https://picsum.photos/seed/oncology/800/600"
  },
  {
    id: 'l-bot-5',
    title: "Global Food Security and Climate Change: A Growing Crisis for Humanity",
    description: "Climate change is one of the greatest threats to food security around the...",
    image: "https://picsum.photos/seed/foodsecurity/800/600"
  }
];

const lawYoutube = {
  id: 'l-yt',
  title: "thousands rally for Hostage deal Amid Israel-Gaza Ceasefire Talks",
  description: "Hamas is designated as a terrorist organization by several countries including the United States, Israel, and the European Union due to its history of violence and attacks targeting civilians.",
  channel: "Jadetimes",
  image: "https://picsum.photos/seed/hostagedeal/1600/900",
  videoId: null
};

const lawMoreFrom = [
  {
    id: 'l-more-1',
    title: "Trial by Combat: The Medieval Legal Loophole Nobody Ever Quite Closed",
    image: "https://picsum.photos/seed/medieval/400/300"
  },
  {
    id: 'l-more-2',
    title: "Is India the most unsafe country for women?",
    author: "Niveditaa chakrapani",
    image: "https://picsum.photos/seed/indiawomen/400/300"
  },
  {
    id: 'l-more-3',
    title: "Intellectual Property Rights Explained: Protecting What You Create",
    image: "https://picsum.photos/seed/intellectual/400/300"
  },
  {
    id: 'l-more-4',
    title: "Shadow AI at Work: The Legal Risk of Employees Using Unapproved Tools",
    image: "https://picsum.photos/seed/shadowai/400/300"
  },
  {
    id: 'l-more-5',
    title: "Your Right to Digital Privacy: What the Law Says in the Modern Age",
    image: "https://picsum.photos/seed/digitalprivacy/400/300"
  },
  {
    id: 'l-more-6',
    title: "India's Landmark Digital Personal Data Protection Act",
    author: "Mehal Bansal",
    image: "https://picsum.photos/seed/indiadata/400/300"
  },
  {
    id: 'l-more-7',
    title: "The Global Data Privacy Revolution: What Every Consumer Needs to Know",
    image: "https://picsum.photos/seed/privacyrevolution/400/300"
  },
  {
    id: 'l-more-8',
    title: "Rising Sexual Violence Cases Intensify Safety Concerns Across India",
    image: "https://picsum.photos/seed/sexualviolence/400/300"
  },
  {
    id: 'l-more-9',
    title: "The Silent Epidemic: How Corporations Are Escaping Liability Through Strategic...",
    image: "https://picsum.photos/seed/gavelgavel/400/300"
  },
  {
    id: 'l-more-10',
    title: "Digital Evidence and the Transformation of Legal Filings",
    author: "Amali Subodha",
    image: "https://picsum.photos/seed/digitalfiling/400/300"
  }
];

const lawUpdates = [
  { id: 'lu1', timeAgo: 'May 29', title: "Generative AI: The New Frontier in Legal Technology" },
  { id: 'lu2', timeAgo: 'Jul 3, 2025', title: "Singapore Police Empowered to Freeze Bank Accounts to Stop..." },
  { id: 'lu3', timeAgo: 'Jun 30, 2025', title: "Thailand Tightens Cannabis Laws, Restricting Use to Medical..." },
  { id: 'lu4', timeAgo: 'Jun 22, 2025', title: "Federal Court Blocks Louisiana's Ten Commandments Law,..." }
];

// Specific data to match Health page screenshot exactly
const healthFeatured = {
  id: 'h-feat',
  title: "World's First Ladies: Only Four Have PhD Level, Doctorates",
  description: "World's First Ladies: Only Four Have PhD Level, Doctorates",
  image: "https://picsum.photos/seed/firstladies/1000/900",
  author: "Jatinder Singh",
  timeAgo: "Aug 25, 2025",
  category: "Health"
};

const healthSidebar = [
  {
    id: 'h-side-1',
    title: "Miracle Recovery? Pope Francis Set for Hospital Release!",
    category: "Health",
    image: "https://picsum.photos/seed/pope/400/300"
  },
  {
    id: 'h-side-2',
    title: "East Midlands Public Health Officials Call for Action Against...",
    category: "Europe",
    image: "https://picsum.photos/seed/publichealth/400/300"
  },
  {
    id: 'h-side-3',
    title: "How to stay healthy during the COVID-19 summertime surge",
    category: "Innovation",
    image: "https://picsum.photos/seed/covidsurge/400/300"
  }
];

const healthBottomGrid = [
  {
    id: 'h-bot-1',
    title: "The Invisible Enemy: Why Is Dengue Spreading So Rapidly Across Sri Lanka?",
    description: "The monsoon rain has barely stopped falling on a Negombo rooftop when...",
    image: "https://picsum.photos/seed/denguemosquito/800/600"
  },
  {
    id: 'h-bot-2',
    title: "Dr. Othmini Krishnamurthy Rajendran: Advancing Precision Oncology Through...",
    description: "Artificial intelligence is rapidly transforming healthcare, and among...",
    image: "https://picsum.photos/seed/oncology/800/600"
  },
  {
    id: 'h-bot-3',
    title: "Why Do Sri Lankans Still Trust National Security Under a Government That Failed to...",
    description: "The recent case involving senior Buddhist monk Pellegoma...",
    image: "https://picsum.photos/seed/securitysrilanka/800/600"
  },
  {
    id: 'h-bot-4',
    title: "Ayurveda Offers Hope Against Deadly Dengue and Other Diseases: A Global Message...",
    description: "In recent years, dengue fever has become one of the most common...",
    image: "https://picsum.photos/seed/ayurveda/800/600"
  },
  {
    id: 'h-bot-5',
    title: "Prof. Tamike Shurgulaia: A Vanguard Scholar in Global Security and Intelligence...",
    description: "Prof. Tamike Shurgulaia: A vanguard scholar in global security and...",
    image: "https://picsum.photos/seed/scholar/800/600"
  }
];

const healthYoutube = {
  id: 'h-yt',
  title: "Protecting Your Skin: The Hidden Dangers of Counterfeit Whitening Creams and Cancer Risks",
  description: "In this segment, we dive into the hidden dangers of counterfeit whitening creams with insights from Dr. Indira Kahawita, a leading Consultant Dermatologist specializing in tropical skin diseases and pigmentation disorders.",
  channel: "Jadetimes",
  image: "https://picsum.photos/seed/skinrash/1600/900",
  videoId: null
};

const healthMoreFrom = [
  {
    id: 'h-more-1',
    title: "The Invisible Enemy: Why Is Dengue Spreading So Rapidly Across Sri Lanka?",
    image: "https://picsum.photos/seed/denguemosquito/400/300"
  },
  {
    id: 'h-more-2',
    title: "When the Rain Turns Extreme",
    author: "ravichandran harini",
    timeAgo: "1 day ago",
    readTime: "3 min read",
    image: "https://picsum.photos/seed/rainumbrella/400/300"
  },
  {
    id: 'h-more-3',
    title: "Cristiano Ronaldo: Legacy, Present Era, and Future Horizons",
    image: "https://picsum.photos/seed/ronaldo/400/300"
  },
  {
    id: 'h-more-4',
    title: "The Future of Tech Careers",
    author: "Ravichandran Harini",
    timeAgo: "5 days ago",
    readTime: "2 min read",
    image: "https://picsum.photos/seed/techcareers/400/300"
  },
  {
    id: 'h-more-5',
    title: "When Antibiotics Stop Working",
    author: "Ravichandran Harini",
    image: "https://picsum.photos/seed/antibiotics/400/300"
  },
  {
    id: 'h-more-6',
    title: "Authorities Requested Motive in Mass Shooting at the Fast Food Restaurant in Idaho",
    image: "https://picsum.photos/seed/shooting/400/300"
  },
  {
    id: 'h-more-7',
    title: "The Invisible Invasion: How Microplastics Are Getting Into Our Bodies",
    image: "https://picsum.photos/seed/microplastics/400/300"
  },
  {
    id: 'h-more-8',
    title: "Navigating the Data Silos: The Fragmentation of Global Internet Governance",
    image: "https://picsum.photos/seed/datagovernance/400/300"
  },
  {
    id: 'h-more-9',
    title: "Before ChatGPT: The Journey That Changed Artificial Intelligence Forever",
    image: "https://picsum.photos/seed/beforechatgpt/400/300"
  },
  {
    id: 'h-more-10',
    title: "The Race to Live Forever",
    author: "Ravichandran Harini",
    timeAgo: "Jul 24",
    readTime: "2 min read",
    image: "https://picsum.photos/seed/liveforever/400/300"
  }
];

const healthUpdates = [
  { id: 'hu1', timeAgo: 'Aug 30, 2026', title: "What Is Sleep Paralysis: Why You Might See Demons on the Edge a..." },
  { id: 'hu2', timeAgo: 'Jul 30, 2026', title: "Coca-Cola's Potential Sweetener Switch Sparks Job Fears Among..." },
  { id: 'hu3', timeAgo: 'Jul 8, 2026', title: "Singapore Leads Regional Push to Prevent Future Pandemics with..." },
  { id: 'hu4', timeAgo: 'Jun 28, 2026', title: "Senate GOP Megabill Grants Temporary SNAP Relief for Alaska..." }
];

// Specific data to match Fashion page screenshot exactly
const fashionFeatured = {
  id: 'f-feat',
  title: "World's First Ladies: Only Four Have PhD Level, Doctorates",
  description: "World's First Ladies: Only Four Have PhD Level, Doctorates",
  image: "https://picsum.photos/seed/firstladies/1000/900",
  author: "Jatinder Singh",
  timeAgo: "Aug 25, 2025",
  category: "Fashion"
};

const fashionSidebar = [
  {
    id: 'f-side-1',
    title: "The Emergence of African Fashion Designers: A Global...",
    category: "Fashion",
    image: "https://picsum.photos/seed/africanfashion/400/300"
  },
  {
    id: 'f-side-2',
    title: "Fairness at What Cost? Unmasking South Asia's...",
    category: "Fashion",
    image: "https://picsum.photos/seed/fairness/400/300"
  },
  {
    id: 'f-side-3',
    title: "Will Return Fees Deter Shoppers From Online Retail? The Growing...",
    category: "Fashion",
    image: "https://picsum.photos/seed/onlineshopping/400/300"
  }
];

const fashionBottomGrid = [
  {
    id: 'f-bot-1',
    title: "Raye Would Receive the Songwriters Hall of Fame's New Artist Award",
    description: "The Songwriters Hall of Fame would present British songwriters Raye with...",
    image: "https://picsum.photos/seed/raye/800/600"
  },
  {
    id: 'f-bot-2',
    title: "Minosé: Global Luxury Furniture Sourcing from Italy & China with Personalized...",
    description: "Minose Global Luxury Furniture Sourcing from Italy & China with...",
    image: "https://picsum.photos/seed/minose/800/600"
  },
  {
    id: 'f-bot-3',
    title: "U.S. Retailers Brace for Holiday Uncertainty Amid Shifting Tariffs and Supply Chain...",
    description: "U.S. Retailers Brace for Holiday Uncertainty Amid Shifting Tariffs and...",
    image: "https://picsum.photos/seed/retailersbrace/800/600"
  },
  {
    id: 'f-bot-4',
    title: "Urvashi Rautela Dazzles at Cannes 2025 with Vibrant Gown and Parrot Clutch",
    description: "Bollywood star Urvashi Rautela once again turned heads at the prestigiou...",
    image: "https://picsum.photos/seed/urvashi/800/600"
  },
  {
    id: 'f-bot-5',
    title: "Designer reality: The new reality of Indian real estate.",
    description: "Who doesn't love good jewellery? It is every women's dream to possess a...",
    image: "https://picsum.photos/seed/jewellery/800/600"
  }
];

const fashionYoutube = {
  id: 'f-yt',
  title: "Decoding the 2024 Met Gala: Theme, Dress Code, and A-List Guests",
  description: "The 2024 Met Gala's theme, \"The Garden of Time,\" coincides with the exhibition \"Sleeping Beauties: Reawakening Fashion,\" showcasing 250 historic and contemporary pieces. It's an ethereal shift from last year's black-and-white affair, promising soft whimsy and decay.",
  channel: "Jadetimes",
  image: "https://picsum.photos/seed/metgala/1600/900",
  videoId: null
};

const fashionMoreFrom = [
  {
    id: 'f-more-1',
    title: "Authorities Requested Motive in Mass Shooting at the Fast Food Restaurant in Idaho",
    image: "https://picsum.photos/seed/shooting/400/300"
  },
  {
    id: 'f-more-2',
    title: "Before ChatGPT: The Journey That Changed Artificial Intelligence Forever",
    image: "https://picsum.photos/seed/beforechatgpt/400/300"
  },
  {
    id: 'f-more-3',
    title: "The Rise of AI Agents",
    author: "Ravichandran Harini",
    timeAgo: "Jul 18",
    readTime: "2 min read",
    image: "https://picsum.photos/seed/aiagents/400/300"
  },
  {
    id: 'f-more-4',
    title: "Scientists Discover Promising Treatment for Drug-Resistant Infections",
    image: "https://picsum.photos/seed/antibiotics/400/300"
  },
  {
    id: 'f-more-5',
    title: "Lucky Daye Started His New Journey with Warner Records and Released His New Song...",
    image: "https://picsum.photos/seed/luckydaye/400/300"
  },
  {
    id: 'f-more-6',
    title: "Deadly Heatwave Tightens Grip on Europe as Death Toll Continues to Rise",
    image: "https://picsum.photos/seed/heatwave/400/300"
  },
  {
    id: 'f-more-7',
    title: "Sienna Spiro Released Her Debut Album – Visitor",
    author: "Wanjiru Waweru",
    image: "https://picsum.photos/seed/sienna/400/300"
  },
  {
    id: 'f-more-8',
    title: "India's Landmark Digital Personal Data Protection Act",
    author: "Mehal Bansal",
    image: "https://picsum.photos/seed/indiadata/400/300"
  },
  {
    id: 'f-more-9',
    title: "Ariana Grande Released a New Song – Hate That I Made You Love Me",
    image: "https://picsum.photos/seed/arianasingle/400/300"
  },
  {
    id: 'f-more-10',
    title: "FLO Would Receive the 2026 ASCAP Vanguard Award",
    author: "Wanjiru Waweru",
    image: "https://picsum.photos/seed/flowaward/400/300"
  }
];

const fashionUpdates = [
  { id: 'fa1', timeAgo: 'May 10, 2026', title: "The Evolution of Fashion Weeks Around the World: From Elite..." },
  { id: 'fa2', timeAgo: 'May 8, 2026', title: "K-Pop's Global Influence Expands as Cultural Exports Reshape..." },
  { id: 'fa3', timeAgo: 'Apr 5, 2026', title: "The Nuclear Debate in Southeast Asia: Philippines Leads a Cautiou..." },
  { id: 'fa4', timeAgo: 'Apr 3, 2026', title: "Sydney Sweeney's Ultra-Snug Corset Dress Features a Drop-..." }
];

// Specific data to match Universe page screenshot exactly
const universeFeatured = {
  id: 'u-feat',
  title: "Trump Defends Traditional Vaccines as Florida Pushes to End Mandates",
  description: "Trump Defends traditional vaccines as Florida pushes to End Mandates",
  image: "https://picsum.photos/seed/trumpvaccine/1000/900",
  author: "Bahaman Hasibur",
  timeAgo: "Sep 7, 2025",
  category: "Universe"
};

const universeSidebar = [
  {
    id: 'u-side-1',
    title: "Storm Unleashes Hell Across the U.S. - Tornadoes, Fire, and...",
    category: "USA",
    image: "https://picsum.photos/seed/stormusa/400/300"
  },
  {
    id: 'u-side-2',
    title: "Trump orders review of all Afghan immigrants after...",
    category: "USA",
    image: "https://picsum.photos/seed/trumpafghan/400/300"
  },
  {
    id: 'u-side-3',
    title: "The 2025 Coachella Valley Music Festival",
    category: "USA",
    image: "https://picsum.photos/seed/coachella/400/300"
  }
];

const universeBottomGrid = [
  {
    id: 'u-bot-1',
    title: "Massive Undersea Internet Cable Project Announced Across Asia and Africa",
    description: "A major international telecommunications consortium...",
    image: "https://picsum.photos/seed/cableundersea/800/600"
  },
  {
    id: 'u-bot-2',
    title: "Chris Brown Reveals The Tracklist of Brown",
    description: "Chris Brown revealed the official tracklist for BROWN, his upcoming...",
    image: "https://picsum.photos/seed/chrisbrown/800/600"
  },
  {
    id: 'u-bot-3',
    title: "Geeth Roman Formally Requests UN Observation Into Sri Lanka Monk Abuse...",
    description: "International concern is continuing to grow after Sri Lankan PhD Scholar on...",
    image: "https://picsum.photos/seed/monkabuse/800/600"
  },
  {
    id: 'u-bot-4',
    title: "Global Markets Remain Cautious Despite Easing US-China Tensions",
    description: "Global financial markets showed cautious optimism today after recent...",
    image: "https://picsum.photos/seed/globalmarkets/800/600"
  },
  {
    id: 'u-bot-5',
    title: "Kehlani Revealed the Featured Artists on Her Upcoming Self-Titled Album",
    description: "Kehlani surprised her fans on her upcoming self-titled album by...",
    image: "https://picsum.photos/seed/kehlani/800/600"
  }
];

const universeYoutube = {
  id: 'u-yt',
  title: "Researchers May Have Unlocked the Secret of Egypt's Pyramids",
  description: "A team from the University of North Carolina Wilmington discovered that Egypt's pyramids were likely built along a now-buried ancient Nile branch, using radar imagery and geophysical surveys, revealing a lost waterway crucial for transporting construction materials.",
  channel: "Jadetimes",
  image: "https://picsum.photos/seed/egyptpyramids/1600/900",
  videoId: null
};

const universeMoreFrom = [
  {
    id: 'u-more-1',
    title: "When the Rain Turns Extreme",
    author: "ravichandran harini",
    timeAgo: "1 day ago",
    readTime: "2 min read",
    image: "https://picsum.photos/seed/rainumbrella/400/300"
  },
  {
    id: 'u-more-2',
    title: "Cristiano Ronaldo: Legacy, Present Era, and Future Horizons",
    image: "https://picsum.photos/seed/ronaldo/400/300"
  },
  {
    id: 'u-more-3',
    title: "Authorities Requested Motive in Mass Shooting at the Fast Food Restaurant in Idaho",
    image: "https://picsum.photos/seed/shooting/400/300"
  },
  {
    id: 'u-more-4',
    title: "The New Silk Road: Re-engineering Global Trade Routes",
    image: "https://picsum.photos/seed/trademap/400/300"
  },
  {
    id: 'u-more-5',
    title: "Space Exploration Enters a New Commercial Era",
    author: "Niveditaa chakrapani",
    image: "https://picsum.photos/seed/spaceexploration/400/300"
  },
  {
    id: 'u-more-6',
    title: "Who Owns You After You Die? The Messy Law of Digital Inheritance",
    image: "https://picsum.photos/seed/digitalprivacy/400/300"
  },
  {
    id: 'u-more-7',
    title: "Could Earth Run Out of Sand?",
    author: "Amali Subodha",
    timeAgo: "Aug 1",
    readTime: "2 min read",
    image: "https://picsum.photos/seed/sandsand/400/300"
  },
  {
    id: 'u-more-8',
    title: "Why Are Oceans Becoming Louder?",
    author: "Ravichandran Harini",
    image: "https://picsum.photos/seed/oceanloud/400/300"
  },
  {
    id: 'u-more-9',
    title: "The Race for Critical Minerals",
    author: "Ravichandran Harini",
    timeAgo: "Jul 24",
    readTime: "2 min read",
    image: "https://picsum.photos/seed/minerals/400/300"
  },
  {
    id: 'u-more-10',
    title: "Why Do We Dream?",
    author: "Ravichandran Harini",
    timeAgo: "Jul 24",
    readTime: "2 min read",
    image: "https://picsum.photos/seed/skinrash/400/300"
  }
];

const universeUpdates = [
  { id: 'un1', timeAgo: 'Jul 22', title: "Tyla Revealed the Tracklist of A*POP" },
  { id: 'un2', timeAgo: 'May 29', title: "Generative AI: The New Frontier in Legal Technology" },
  { id: 'un3', timeAgo: 'Apr 10', title: "Global Energy Crisis Deepens as Middle East Conflict Sends..." },
  { id: 'un4', timeAgo: 'Mar 16', title: "Thailand Dismantles Nine Major Drug Networks, Seizes Millions of..." }
];

// Specific data to match Political page screenshot exactly
const politicalFeatured = {
  id: 'p-feat',
  title: "Trump Defends Traditional Vaccines as Florida Pushes to End Mandates",
  description: "Trump Defends traditional vaccines as Florida pushes to End Mandates",
  image: "https://picsum.photos/seed/trumpvaccine/1000/900",
  author: "Bahaman Hasibur",
  timeAgo: "Sep 7, 2025",
  category: "Political"
};

const politicalSidebar = [
  {
    id: 'p-side-1',
    title: "Greenland's PM SLAMS U.S. Over 'Hostile Takeover'...",
    category: "Political",
    image: "https://picsum.photos/seed/greenland/400/300"
  },
  {
    id: 'p-side-2',
    title: "Trump orders review of all Afghan immigrants after...",
    category: "USA",
    image: "https://picsum.photos/seed/trumpafghan/400/300"
  },
  {
    id: 'p-side-3',
    title: "Police Brutality Protests in the U.S.: A Continuing Struggle...",
    category: "USA",
    image: "https://picsum.photos/seed/policebrutality/400/300"
  }
];

const politicalBottomGrid = [
  {
    id: 'p-bot-1',
    title: "US-Iran Strikes Challenge Interim Peace, Global Stability and the Future of...",
    description: "The rivalry between US-Iran strengthening is further evidence as...",
    image: "https://picsum.photos/seed/usiranstrikes/800/600"
  },
  {
    id: 'p-bot-2',
    title: "Cybersecurity Threats Move to the Center of Global Politics",
    description: "Cybersecurity has become one of the most important issues in internationa...",
    image: "https://picsum.photos/seed/cybersecurity/800/600"
  },
  {
    id: 'p-bot-3',
    title: "Chris Brown Reveals The Tracklist of Brown",
    description: "Chris Brown revealed the official tracklist for BROWN, his upcoming...",
    image: "https://picsum.photos/seed/chrisbrown/800/600"
  },
  {
    id: 'p-bot-4',
    title: "Geeth Roman Formally Requests UN Observation Into Sri Lanka Monk Abuse...",
    description: "International concern is continuing to grow after Sri Lankan PhD Scholar on...",
    image: "https://picsum.photos/seed/monkabuse/800/600"
  },
  {
    id: 'p-bot-5',
    title: "Why Do Sri Lankans Still Trust National Security Under a Government That Failed to...",
    description: "The recent case involving senior Buddhist monk Pellegoma...",
    image: "https://picsum.photos/seed/securitysrilanka/800/600"
  }
];

const politicalYoutube = {
  id: 'p-yt',
  title: "Philippine President issues Stern Warning to China Over 'Acts of War'",
  description: "Philippine President Ferdinand Marcos Jr. warned China against crossing a \"red line\" in the South China Sea, equating Filipino deaths from China's actions to \"an act of war.\" The ongoing territorial dispute has led to aggressive clashes, raising fears of a US-China conflict due to defense treaties.",
  channel: "Jadetimes",
  image: "https://picsum.photos/seed/manilaflags/1600/900",
  videoId: null
};

const politicalMoreFrom = [
  {
    id: 'p-more-1',
    title: "France Enters Political Turmoil as Pension Reform Protests Return",
    image: "https://picsum.photos/seed/franceprotests/400/300"
  },
  {
    id: 'p-more-2',
    title: "Who Owns You After You Die? The Messy Law of Digital Inheritance",
    image: "https://picsum.photos/seed/digitalprivacy/400/300"
  },
  {
    id: 'p-more-3',
    title: "Before ChatGPT: The Journey That Changed Artificial Intelligence Forever",
    image: "https://picsum.photos/seed/beforechatgpt/400/300"
  },
  {
    id: 'p-more-4',
    title: "Why Do We Dream?",
    author: "Ravichandran Harini",
    timeAgo: "Jul 24",
    readTime: "2 min read",
    image: "https://picsum.photos/seed/skinrash/400/300"
  },
  {
    id: 'p-more-5',
    title: "The New Silk Road: Re-engineering Global Trade Routes",
    image: "https://picsum.photos/seed/trademap/400/300"
  },
  {
    id: 'p-more-6',
    title: "Trial by Combat: The Medieval Legal Loophole Nobody Ever Quite Closed",
    image: "https://picsum.photos/seed/medieval/400/300"
  },
  {
    id: 'p-more-7',
    title: "The Race for Critical Minerals",
    author: "Ravichandran Harini",
    timeAgo: "Jul 24",
    readTime: "2 min read",
    image: "https://picsum.photos/seed/minerals/400/300"
  },
  {
    id: 'p-more-8',
    title: "The Invisible Invasion: How Microplastics Are Getting Into Our Bodies",
    image: "https://picsum.photos/seed/microplastics/400/300"
  },
  {
    id: 'p-more-9',
    title: "FLO Released Their New Song – Remedied",
    author: "Wanjiru Waweru",
    image: "https://picsum.photos/seed/rememedied/400/300"
  },
  {
    id: 'p-more-10',
    title: "The Race to Live Forever",
    author: "Ravichandran Harini",
    timeAgo: "Jul 24",
    readTime: "2 min read",
    image: "https://picsum.photos/seed/liveforever/400/300"
  }
];

const politicalUpdates = [
  { id: 'po1', timeAgo: 'May 20', title: "Generative AI: The New Frontier in Legal Technology" },
  { id: 'po2', timeAgo: 'Apr 10', title: "Global Energy Crisis Deepens as Middle East Conflict Sends..." },
  { id: 'po3', timeAgo: 'Mar 14', title: "Thailand Dismantles Nine Major Drug Networks, Seizes Millions of..." },
  { id: 'po4', timeAgo: 'Mar 14', title: "Yebba Released Her Sophomore Album, Jean" }
];

// MOCK DATA for Sports page
const sportsFeatured = {
  id: 'sp-feat',
  title: "Cristiano Ronaldo: Legacy, Present Era, and Future Horizons",
  description: "Cristiano Ronaldo: Legacy, Present Era, and Future Horizons",
  image: "https://picsum.photos/seed/ronaldo/1000/900",
  author: "Jatinder Singh",
  timeAgo: "Aug 25, 2025",
  category: "Sports"
};

const sportsSidebar = [
  {
    id: 'sp-side-1',
    title: "Brock Lesnar Retires at WrestleMania 2026: The End of an Era",
    category: "Sports",
    image: "https://picsum.photos/seed/wrestlemania/400/300"
  },
  {
    id: 'sp-side-2',
    title: "Miracle Recovery? Pope Francis Set for Hospital Release!",
    category: "Health",
    image: "https://picsum.photos/seed/pope/400/300"
  },
  {
    id: 'sp-side-3',
    title: "Raye Would Receive the Songwriters Hall of Fame's New Artist Award",
    category: "Culture",
    image: "https://picsum.photos/seed/raye/400/300"
  }
];

const sportsBottomGrid = [
  {
    id: 'sp-bot-1',
    title: "Australia Holds Interest Rates but Warns Inflation Battle Isn't Over",
    description: "The Reserve Bank of Australia announced today that it will keep...",
    image: "https://picsum.photos/seed/australiarates/800/600"
  },
  {
    id: 'sp-bot-2',
    title: "Massive Undersea Internet Cable Project Announced Across Asia and Africa",
    description: "A major international telecommunications consortium...",
    image: "https://picsum.photos/seed/cableundersea/800/600"
  },
  {
    id: 'sp-bot-3',
    title: "US-Iran Strikes Challenge Interim Peace, Global Stability and the Future of...",
    description: "The rivalry between US-Iran strengthening is further evidence as...",
    image: "https://picsum.photos/seed/usiranstrikes/800/600"
  },
  {
    id: 'sp-bot-4',
    title: "Dr. Othmini Krishnamurthy Rajendran: Advancing Precision Oncology Through...",
    description: "Artificial intelligence is rapidly transforming healthcare, and among...",
    image: "https://picsum.photos/seed/oncology/800/600"
  },
  {
    id: 'sp-bot-5',
    title: "Global Food Security and Climate Change: A Growing Crisis for Humanity",
    description: "Climate change is one of the greatest threats to food security around the...",
    image: "https://picsum.photos/seed/foodsecurity/800/600"
  }
];

const sportsYoutube = {
  id: 'sp-yt',
  title: "Lionel Messi Wins Historic Eighth Ballon d'Or in Paris",
  description: "Lionel Messi claimed the Ballon d'Or for a record-extending eighth time, beating Erling Haaland and Kylian Mbappé to the prize after leading Argentina to World Cup glory in Qatar.",
  channel: "Jadetimes",
  image: "https://picsum.photos/seed/ballondor/1600/900",
  videoId: null
};

const sportsMoreFrom = [
  {
    id: 'sp-more-1',
    title: "The Invisible Enemy: Why Is Dengue Spreading So Rapidly Across Sri Lanka?",
    image: "https://picsum.photos/seed/denguemosquito/400/300"
  },
  {
    id: 'sp-more-2',
    title: "When the Rain Turns Extreme",
    author: "ravichandran harini",
    timeAgo: "1 day ago",
    readTime: "2 min read",
    image: "https://picsum.photos/seed/rainumbrella/400/300"
  },
  {
    id: 'sp-more-3',
    title: "Cristiano Ronaldo: Legacy, Present Era, and Future Horizons",
    image: "https://picsum.photos/seed/ronaldo/400/300"
  },
  {
    id: 'sp-more-4',
    title: "The Future of Tech Careers",
    author: "Ravichandran Harini",
    timeAgo: "5 days ago",
    readTime: "2 min read",
    image: "https://picsum.photos/seed/techcareers/400/300"
  },
  {
    id: 'sp-more-5',
    title: "When Antibiotics Stop Working",
    author: "Ravichandran Harini",
    image: "https://picsum.photos/seed/antibiotics/400/300"
  },
  {
    id: 'sp-more-6',
    title: "Authorities Requested Motive in Mass Shooting at the Fast Food Restaurant in Idaho",
    image: "https://picsum.photos/seed/shooting/400/300"
  },
  {
    id: 'sp-more-7',
    title: "The Invisible Invasion: How Microplastics Are Getting Into Our Bodies",
    image: "https://picsum.photos/seed/microplastics/400/300"
  },
  {
    id: 'sp-more-8',
    title: "Navigating the Data Silos: The Fragmentation of Global Internet Governance",
    image: "https://picsum.photos/seed/datagovernance/400/300"
  },
  {
    id: 'sp-more-9',
    title: "Before ChatGPT: The Journey That Changed Artificial Intelligence Forever",
    image: "https://picsum.photos/seed/beforechatgpt/400/300"
  },
  {
    id: 'sp-more-10',
    title: "The Race to Live Forever",
    author: "Ravichandran Harini",
    timeAgo: "Jul 24",
    readTime: "2 min read",
    image: "https://picsum.photos/seed/liveforever/400/300"
  }
];

const sportsUpdates = [
  { id: 'sp1', timeAgo: 'May 30', title: "Cristiano Ronaldo Marks New Career Milestones in League Play" },
  { id: 'sp2', timeAgo: 'May 28', title: "Ballon d'Or Candidates Announced as European Season Wraps" },
  { id: 'sp3', timeAgo: 'May 15', title: "Olympic Committee Prepares for Next Wave of Global Games" },
  { id: 'sp4', timeAgo: 'May 10', title: "WrestleMania Set to Break Ticket Sales and Attendance Records" }
];

// MOCK DATA for Travel page
const travelFeatured = {
  id: 'tr-feat',
  title: "The Ultimate Guide to Exploring the Winding Trails of Kyoto",
  description: "The Ultimate Guide to Exploring the Winding Trails of Kyoto",
  image: "https://picsum.photos/seed/kyototrails/1000/900",
  author: "Elena Rostova",
  timeAgo: "Aug 22, 2025",
  category: "Travel"
};

const travelSidebar = [
  {
    id: 'tr-side-1',
    title: "Kyoto's Hidden Temples: A Journey Into Japan's Sacred Past",
    category: "Travel",
    image: "https://picsum.photos/seed/templekyoto/400/300"
  },
  {
    id: 'tr-side-2',
    title: "Five Ways to Link Sri Lanka's Small Businesses to Global...",
    category: "Asia",
    image: "https://picsum.photos/seed/srilankabiz/400/300"
  },
  {
    id: 'tr-side-3',
    title: "Before ChatGPT: The Journey That Changed Artificial...",
    category: "Innovation",
    image: "https://picsum.photos/seed/beforechatgpt/400/300"
  }
];

const travelBottomGrid = [
  {
    id: 'tr-bot-1',
    title: "Australia Holds Interest Rates but Warns Inflation Battle Isn't Over",
    description: "The Reserve Bank of Australia announced today that it will keep...",
    image: "https://picsum.photos/seed/australiarates/800/600"
  },
  {
    id: 'tr-bot-2',
    title: "Massive Undersea Internet Cable Project Announced Across Asia and Africa",
    description: "A major international telecommunications consortium...",
    image: "https://picsum.photos/seed/cableundersea/800/600"
  },
  {
    id: 'tr-bot-3',
    title: "US-Iran Strikes Challenge Interim Peace, Global Stability and the Future of...",
    description: "The rivalry between US-Iran strengthening is further evidence as...",
    image: "https://picsum.photos/seed/usiranstrikes/800/600"
  },
  {
    id: 'tr-bot-4',
    title: "Dr. Othmini Krishnamurthy Rajendran: Advancing Precision Oncology Through...",
    description: "Artificial intelligence is rapidly transforming healthcare, and among...",
    image: "https://picsum.photos/seed/oncology/800/600"
  },
  {
    id: 'tr-bot-5',
    title: "Global Food Security and Climate Change: A Growing Crisis for Humanity",
    description: "Climate change is one of the greatest threats to food security around the...",
    image: "https://picsum.photos/seed/foodsecurity/800/600"
  }
];

const travelYoutube = {
  id: 'tr-yt',
  title: "A Winding Road Through the Majestic Swiss Alps",
  description: "Explore the scenic beauty and breathtaking views of the Swiss Alps as we drive along the most iconic alpine routes in Europe, featuring stunning glacier lakes and mountain passes.",
  channel: "Jadetimes",
  image: "https://picsum.photos/seed/swissalps/1600/900",
  videoId: null
};

const travelMoreFrom = [
  {
    id: 'tr-more-1',
    title: "Kyoto's Hidden Temples: A Journey Into Japan's Sacred Past",
    image: "https://picsum.photos/seed/templekyoto/400/300"
  },
  {
    id: 'tr-more-2',
    title: "The Ultimate Guide to Exploring the Winding Trails of Kyoto",
    image: "https://picsum.photos/seed/kyototrails/400/300"
  },
  {
    id: 'tr-more-3',
    title: "When the Rain Turns Extreme",
    author: "ravichandran harini",
    timeAgo: "1 day ago",
    readTime: "2 min read",
    image: "https://picsum.photos/seed/rainumbrella/400/300"
  },
  {
    id: 'tr-more-4',
    title: "The New Silk Road: Re-engineering Global Trade Routes",
    image: "https://picsum.photos/seed/trademap/400/300"
  },
  {
    id: 'tr-more-5',
    title: "Could Earth Run Out of Sand?",
    author: "Amali Subodha",
    image: "https://picsum.photos/seed/sandsand/400/300"
  },
  {
    id: 'tr-more-6',
    title: "Why Are Oceans Becoming Louder?",
    author: "Ravichandran Harini",
    image: "https://picsum.photos/seed/oceanloud/400/300"
  },
  {
    id: 'tr-more-7',
    title: "Before ChatGPT: The Journey That Changed Artificial Intelligence Forever",
    image: "https://picsum.photos/seed/beforechatgpt/400/300"
  },
  {
    id: 'tr-more-8',
    title: "The Race for Critical Minerals",
    author: "Ravichandran Harini",
    image: "https://picsum.photos/seed/minerals/400/300"
  },
  {
    id: 'tr-more-9',
    title: "The Invisible Invasion: How Microplastics Are Getting Into Our Bodies",
    image: "https://picsum.photos/seed/microplastics/400/300"
  },
  {
    id: 'tr-more-10',
    title: "The Race to Live Forever",
    author: "Ravichandran Harini",
    timeAgo: "Jul 24",
    readTime: "2 min read",
    image: "https://picsum.photos/seed/liveforever/400/300"
  }
];

const travelUpdates = [
  { id: 'tr1', timeAgo: 'Jun 22', title: "Scenic Swiss Alpine Passes Open Early for Summer Travelers" },
  { id: 'tr2', timeAgo: 'Jun 18', title: "Kyoto Tourism Board Promotes Lesser-Known Rural Gion Trails" },
  { id: 'tr3', timeAgo: 'Jun 12', title: "International Flights Return to Full Capacity Across Asian Hubs" },
  { id: 'tr4', timeAgo: 'Jun 05', title: "Exploring the Eco-Tourism Preserves of Central South America" }
];

// MOCK DATA for Culture page
const cultureFeatured = {
  id: 'cu-feat',
  title: "From Samba Sounds to Multicolored Sights: A Look at Brazil's Carnival",
  description: "From Samba Sounds to Multicolored Sights: A Look at Brazil's Carnival",
  image: "https://picsum.photos/seed/samba/1000/900",
  author: "Marcus Aurelius",
  timeAgo: "Jul 20, 2025",
  category: "Culture"
};

const cultureSidebar = [
  {
    id: 'cu-side-1',
    title: "Miracle Recovery? Pope Francis Set for Hospital Release!",
    category: "Health",
    image: "https://picsum.photos/seed/pope/400/300"
  },
  {
    id: 'cu-side-2',
    title: "Raye Would Receive the Songwriters Hall of Fame's New Artist Award",
    category: "Culture",
    image: "https://picsum.photos/seed/raye/400/300"
  },
  {
    id: 'cu-side-3',
    title: "Yebba Released Her Sophomore Album, Jean",
    category: "Culture",
    image: "https://picsum.photos/seed/luckydaye/400/300"
  }
];

const cultureBottomGrid = [
  {
    id: 'cu-bot-1',
    title: "Australia Holds Interest Rates but Warns Inflation Battle Isn't Over",
    description: "The Reserve Bank of Australia announced today that it will keep...",
    image: "https://picsum.photos/seed/australiarates/800/600"
  },
  {
    id: 'cu-bot-2',
    title: "Massive Undersea Internet Cable Project Announced Across Asia and Africa",
    description: "A major international telecommunications consortium...",
    image: "https://picsum.photos/seed/cableundersea/800/600"
  },
  {
    id: 'cu-bot-3',
    title: "US-Iran Strikes Challenge Interim Peace, Global Stability and the Future of...",
    description: "The rivalry between US-Iran strengthening is further evidence as...",
    image: "https://picsum.photos/seed/usiranstrikes/800/600"
  },
  {
    id: 'cu-bot-4',
    title: "Dr. Othmini Krishnamurthy Rajendran: Advancing Precision Oncology Through...",
    description: "Artificial intelligence is rapidly transforming healthcare, and among...",
    image: "https://picsum.photos/seed/oncology/800/600"
  },
  {
    id: 'cu-bot-5',
    title: "Global Food Security and Climate Change: A Growing Crisis for Humanity",
    description: "Climate change is one of the greatest threats to food security around the...",
    image: "https://picsum.photos/seed/foodsecurity/800/600"
  }
];

const cultureYoutube = {
  id: 'cu-yt',
  title: "The Historic Preservation of Kyoto's Traditional Geisha Districts",
  description: "A deep dive into the cultural heritage of Kyoto's Gion district and the ongoing efforts by local communities to preserve traditional arts, tea houses, and the legacy of the Geisha.",
  channel: "Jadetimes",
  image: "https://picsum.photos/seed/giondistrict/1600/900",
  videoId: null
};

const cultureMoreFrom = [
  {
    id: 'cu-more-1',
    title: "Raye Would Receive the Songwriters Hall of Fame's New Artist Award",
    image: "https://picsum.photos/seed/raye/400/300"
  },
  {
    id: 'cu-more-2',
    title: "Yebba Released Her Sophomore Album, Jean",
    image: "https://picsum.photos/seed/luckydaye/400/300"
  },
  {
    id: 'cu-more-3',
    title: "The Emergence of African Fashion Designers: A Global...",
    image: "https://picsum.photos/seed/africanfashion/400/300"
  },
  {
    id: 'cu-more-4',
    title: "When the Rain Turns Extreme",
    author: "ravichandran harini",
    timeAgo: "1 day ago",
    readTime: "2 min read",
    image: "https://picsum.photos/seed/rainumbrella/400/300"
  },
  {
    id: 'cu-more-5',
    title: "Before ChatGPT: The Journey That Changed Artificial Intelligence Forever",
    image: "https://picsum.photos/seed/beforechatgpt/400/300"
  },
  {
    id: 'cu-more-6',
    title: "Trial by Combat: The Medieval Legal Loophole Nobody Ever Quite Closed",
    image: "https://picsum.photos/seed/medieval/400/300"
  },
  {
    id: 'cu-more-7',
    title: "The Race for Critical Minerals",
    author: "Ravichandran Harini",
    image: "https://picsum.photos/seed/minerals/400/300"
  },
  {
    id: 'cu-more-8',
    title: "The Invisible Invasion: How Microplastics Are Getting Into Our Bodies",
    image: "https://picsum.photos/seed/microplastics/400/300"
  },
  {
    id: 'cu-more-9',
    title: "FLO Released Their New Song – Remedied",
    author: "Wanjiru Waweru",
    image: "https://picsum.photos/seed/rememedied/400/300"
  },
  {
    id: 'cu-more-10',
    title: "The Race to Live Forever",
    author: "Ravichandran Harini",
    timeAgo: "Jul 24",
    readTime: "2 min read",
    image: "https://picsum.photos/seed/liveforever/400/300"
  }
];

const cultureUpdates = [
  { id: 'cu1', timeAgo: 'May 20', title: "Global Art Exhibitions Unveiled in Major Cultural Capitals" },
  { id: 'cu2', timeAgo: 'May 14', title: "Traditional Heritage Preservation Campaigns Gain Ground in Asia" },
  { id: 'cu3', timeAgo: 'Apr 18', title: "Raye Named Key Honoree at the Annual Songwriters Guild Congress" },
  { id: 'cu4', timeAgo: 'Apr 11', title: "South American Carnival Festivals See Record Tourist Turnout" }
];

// MOCK DATA for Entertainment page
const entertainmentFeatured = {
  id: 'en-feat',
  title: "Chris Brown Reveals The Tracklist of Brown",
  description: "Chris Brown Reveals The Tracklist of Brown",
  image: "https://picsum.photos/seed/chrisbrown/1000/900",
  author: "Sophia Vance",
  timeAgo: "Aug 12, 2025",
  category: "Entertainment"
};

const entertainmentSidebar = [
  {
    id: 'en-side-1',
    title: "Raye Would Receive the Songwriters Hall of Fame's New Artist Award",
    category: "Culture",
    image: "https://picsum.photos/seed/raye/400/300"
  },
  {
    id: 'en-side-2',
    title: "Ariana Grande Released a New Song – Hate That I Made You Love Me",
    category: "Entertainment",
    image: "https://picsum.photos/seed/arianasingle/400/300"
  },
  {
    id: 'en-side-3',
    title: "FLO Would Receive the 2026 ASCAP Vanguard Award",
    category: "Entertainment",
    image: "https://picsum.photos/seed/flowaward/400/300"
  }
];

const entertainmentBottomGrid = [
  {
    id: 'en-bot-1',
    title: "Australia Holds Interest Rates but Warns Inflation Battle Isn't Over",
    description: "The Reserve Bank of Australia announced today that it will keep...",
    image: "https://picsum.photos/seed/australiarates/800/600"
  },
  {
    id: 'en-bot-2',
    title: "Massive Undersea Internet Cable Project Announced Across Asia and Africa",
    description: "A major international telecommunications consortium...",
    image: "https://picsum.photos/seed/cableundersea/800/600"
  },
  {
    id: 'en-bot-3',
    title: "US-Iran Strikes Challenge Interim Peace, Global Stability and the Future of...",
    description: "The rivalry between US-Iran strengthening is further evidence as...",
    image: "https://picsum.photos/seed/usiranstrikes/800/600"
  },
  {
    id: 'en-bot-4',
    title: "Dr. Othmini Krishnamurthy Rajendran: Advancing Precision Oncology Through...",
    description: "Artificial intelligence is rapidly transforming healthcare, and among...",
    image: "https://picsum.photos/seed/oncology/800/600"
  },
  {
    id: 'en-bot-5',
    title: "Global Food Security and Climate Change: A Growing Crisis for Humanity",
    description: "Climate change is one of the greatest threats to food security around the...",
    image: "https://picsum.photos/seed/foodsecurity/800/600"
  }
];

const entertainmentYoutube = {
  id: 'en-yt',
  title: "Lucky Daye Live in Concert: A Night of Soulful R&B in Los Angeles",
  description: "Grammy-winning R&B sensation Lucky Daye delivers a spellbinding performance at the historic Wiltern Theatre, performing hits from his newly released album and catalog.",
  channel: "Jadetimes",
  image: "https://picsum.photos/seed/concert/1600/900",
  videoId: null
};

const entertainmentMoreFrom = [
  {
    id: 'en-more-1',
    title: "Ariana Grande Released a New Song – Hate That I Made You Love Me",
    image: "https://picsum.photos/seed/arianasingle/400/300"
  },
  {
    id: 'en-more-2',
    title: "FLO Would Receive the 2026 ASCAP Vanguard Award",
    image: "https://picsum.photos/seed/flowaward/400/300"
  },
  {
    id: 'en-more-3',
    title: "Lucky Daye Started His New Journey with Warner Records and Released His New Song...",
    image: "https://picsum.photos/seed/luckydaye/400/300"
  },
  {
    id: 'en-more-4',
    title: "Sienna Spiro Released Her Debut Album – Visitor",
    author: "Wanjiru Waweru",
    image: "https://picsum.photos/seed/sienna/400/300"
  },
  {
    id: 'en-more-5',
    title: "Before ChatGPT: The Journey That Changed Artificial Intelligence Forever",
    image: "https://picsum.photos/seed/beforechatgpt/400/300"
  },
  {
    id: 'en-more-6',
    title: "The Rise of AI Agents",
    author: "Ravichandran Harini",
    image: "https://picsum.photos/seed/aiagents/400/300"
  },
  {
    id: 'en-more-7',
    title: "Scientists Discover Promising Treatment for Drug-Resistant Infections",
    image: "https://picsum.photos/seed/antibiotics/400/300"
  },
  {
    id: 'en-more-8',
    title: "The Race for Critical Minerals",
    author: "Ravichandran Harini",
    image: "https://picsum.photos/seed/minerals/400/300"
  },
  {
    id: 'en-more-9',
    title: "The Invisible Invasion: How Microplastics Are Getting Into Our Bodies",
    image: "https://picsum.photos/seed/microplastics/400/300"
  },
  {
    id: 'en-more-10',
    title: "The Race to Live Forever",
    author: "Ravichandran Harini",
    timeAgo: "Jul 24",
    readTime: "2 min read",
    image: "https://picsum.photos/seed/liveforever/400/300"
  }
];

const entertainmentUpdates = [
  { id: 'en1', timeAgo: 'May 22', title: "Chris Brown Confirms Worldwide Tour Dates Supporting BROWN" },
  { id: 'en2', timeAgo: 'May 19', title: "Ariana Grande Single Enters Top Charts Globally" },
  { id: 'en3', timeAgo: 'Apr 24', title: "FLO Receives High Praise and Vanguard Honors at Awards" },
  { id: 'en4', timeAgo: 'Apr 17', title: "Warner Records Announces Strategic Signings for Upcoming R&B Desks" }
];

export default function DynamicCategoryPage({ params }) {
  const { slug } = params;
  const [loading, setLoading] = useState(true);
  const [categoryNews, setCategoryNews] = useState([]);
  const [latestUpdates, setLatestUpdates] = useState([]);
  const [youtubeFeature, setYoutubeFeature] = useState(null);
  const [newsTopics, setNewsTopics] = useState([]);

  // Capitalize display title
  const displayTitle = slug 
    ? slug.charAt(0).toUpperCase() + slug.slice(1) 
    : 'Category';

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);

        const currentSlug = slug.toLowerCase();

        if (currentSlug === 'news') {
          // Unify news desk into the dynamic slug logic
          const pageData = await fetchNewsPage();
          if (pageData) {
            setCategoryNews([
              pageData.featured,
              ...pageData.sidebar,
              ...pageData.bottomGrid,
              ...pageData.moreFrom.articles
            ]);
            setLatestUpdates(pageData.latestUpdates);
            setYoutubeFeature(pageData.youtubeFeature);
            setNewsTopics(pageData.topics || []);
          }
        } else if (currentSlug === 'business') {
          // Force layout matching Business screenshot exactly
          setCategoryNews([
            businessFeatured,
            ...businessSidebar,
            ...businessBottomGrid,
            ...businessMoreFrom
          ]);
          setLatestUpdates(businessUpdates);
          setYoutubeFeature(businessYoutube);
        } else if (currentSlug === 'law') {
          // Force layout matching Law screenshot exactly
          setCategoryNews([
            lawFeatured,
            ...lawSidebar,
            ...lawBottomGrid,
            ...lawMoreFrom
          ]);
          setLatestUpdates(lawUpdates);
          setYoutubeFeature(lawYoutube);
        } else if (currentSlug === 'health') {
          // Force layout matching Health screenshot exactly
          setCategoryNews([
            healthFeatured,
            ...healthSidebar,
            ...healthBottomGrid,
            ...healthMoreFrom
          ]);
          setLatestUpdates(healthUpdates);
          setYoutubeFeature(healthYoutube);
        } else if (currentSlug === 'fashion') {
          // Force layout matching Fashion screenshot exactly
          setCategoryNews([
            fashionFeatured,
            ...fashionSidebar,
            ...fashionBottomGrid,
            ...fashionMoreFrom
          ]);
          setLatestUpdates(fashionUpdates);
          setYoutubeFeature(fashionYoutube);
        } else if (currentSlug === 'universe') {
          // Force layout matching Universe screenshot exactly
          setCategoryNews([
            universeFeatured,
            ...universeSidebar,
            ...universeBottomGrid,
            ...universeMoreFrom
          ]);
          setLatestUpdates(universeUpdates);
          setYoutubeFeature(universeYoutube);
        } else if (currentSlug === 'political') {
          // Force layout matching Political screenshot exactly
          setCategoryNews([
            politicalFeatured,
            ...politicalSidebar,
            ...politicalBottomGrid,
            ...politicalMoreFrom
          ]);
          setLatestUpdates(politicalUpdates);
          setYoutubeFeature(politicalYoutube);
        } else if (currentSlug === 'sports') {
          // Force layout matching Sports layout
          setCategoryNews([
            sportsFeatured,
            ...sportsSidebar,
            ...sportsBottomGrid,
            ...sportsMoreFrom
          ]);
          setLatestUpdates(sportsUpdates);
          setYoutubeFeature(sportsYoutube);
        } else if (currentSlug === 'travel') {
          // Force layout matching Travel layout
          setCategoryNews([
            travelFeatured,
            ...travelSidebar,
            ...travelBottomGrid,
            ...travelMoreFrom
          ]);
          setLatestUpdates(travelUpdates);
          setYoutubeFeature(travelYoutube);
        } else if (currentSlug === 'culture') {
          // Force layout matching Culture layout
          setCategoryNews([
            cultureFeatured,
            ...cultureSidebar,
            ...cultureBottomGrid,
            ...cultureMoreFrom
          ]);
          setLatestUpdates(cultureUpdates);
          setYoutubeFeature(cultureYoutube);
        } else if (currentSlug === 'entertainment') {
          // Force layout matching Entertainment layout
          setCategoryNews([
            entertainmentFeatured,
            ...entertainmentSidebar,
            ...entertainmentBottomGrid,
            ...entertainmentMoreFrom
          ]);
          setLatestUpdates(entertainmentUpdates);
          setYoutubeFeature(entertainmentYoutube);
        } else {
          // Fetch news for other dynamic slugs
          let news = await fetchNews(slug);
          const updates = await fetchLatestUpdates();
          setLatestUpdates(updates || []);
          setYoutubeFeature(null); // default none

          // Generate dynamic mock data fallback for empty category slugs
          if (!news || news.length === 0) {
            const capitalizedSlug = displayTitle;
            news = [
              {
                id: `mock-${slug}-1`,
                title: `Global Trends: The Future of ${capitalizedSlug} in the Modern Era`,
                category: capitalizedSlug,
                description: `Analyzing how emerging dynamics and global shifts are redefining the landscape of ${slug} worldwide. Experts weigh in on what to expect in the coming decade.`,
                image: `https://picsum.photos/seed/${slug}1/1000/900`,
                author: "Adrian Mercer",
                timeAgo: "2 hours ago",
                date: "August 10, 2026",
                readTime: "5 min read"
              },
              {
                id: `mock-${slug}-2`,
                title: `Key Drivers Shaping the New Frontier of ${capitalizedSlug}`,
                category: capitalizedSlug,
                description: `A comprehensive review of policy changes, technological integration, and public sentiment driving current developments.`,
                image: `https://picsum.photos/seed/${slug}2/400/300`,
                author: "Sophia Vance",
                timeAgo: "12 hours ago",
                date: "August 9, 2026",
                readTime: "4 min read"
              },
              {
                id: `mock-${slug}-3`,
                title: `Why ${capitalizedSlug} Matters Now More Than Ever`,
                category: capitalizedSlug,
                description: `Understanding the intersection of culture, economics, and society through the lens of recent events.`,
                image: `https://picsum.photos/seed/${slug}3/400/300`,
                author: "Elena Rostova",
                timeAgo: "1 day ago",
                date: "August 9, 2026",
                readTime: "6 min read"
              },
              {
                id: `mock-${slug}-4`,
                title: `Ten Essential Lessons We Learned About ${capitalizedSlug} This Year`,
                category: capitalizedSlug,
                description: `Reflecting on the biggest milestones, setbacks, and innovations that defined the category.`,
                image: `https://picsum.photos/seed/${slug}4/400/300`,
                author: "Marcus Aurelius",
                timeAgo: "2 days ago",
                date: "August 8, 2026",
                readTime: "7 min read"
              },
              {
                id: `mock-${slug}-5`,
                title: `The Next Chapter: Innovators Redefining ${capitalizedSlug}`,
                category: capitalizedSlug,
                description: `Meet the visionaries, leaders, and thinkers charting the future course of the industry.`,
                image: `https://picsum.photos/seed/${slug}5/400/300`,
                author: "Liam Thorne",
                timeAgo: "3 days ago",
                date: "August 7, 2026",
                readTime: "5 min read"
              },
              {
                id: `mock-${slug}-6`,
                title: `New Regulatory Standards Proposed for ${capitalizedSlug} Activities`,
                category: capitalizedSlug,
                description: `Lawmakers introduce proposals aimed at modernizing legal and operational frameworks.`,
                image: `https://picsum.photos/seed/${slug}6/400/300`,
                author: "Hana Takahashi",
                timeAgo: "4 days ago",
                date: "August 6, 2026",
                readTime: "5 min read"
              },
              {
                id: `mock-${slug}-7`,
                title: `Exploring the Global Economic Valuation of ${capitalizedSlug}`,
                category: capitalizedSlug,
                description: `A deep dive into supply chains, investments, and market capitalization across core regions.`,
                image: `https://picsum.photos/seed/${slug}7/400/300`,
                author: "David Vance",
                timeAgo: "5 days ago",
                date: "August 5, 2026",
                readTime: "8 min read"
              },
              {
                id: `mock-${slug}-8`,
                title: `Bridging the Gap: Education and Community in ${capitalizedSlug}`,
                category: capitalizedSlug,
                description: `How grassroots initiatives are empowering the next generation of practitioners.`,
                image: `https://picsum.photos/seed/${slug}8/400/300`,
                author: "Amara Okoye",
                timeAgo: "6 days ago",
                date: "August 4, 2026",
                readTime: "4 min read"
              }
            ];
          }
          setCategoryNews(news);
        }
      } catch (err) {
        console.error(`Failed to load ${slug} category page:`, err);
      } finally {
        setLoading(false);
      }
    }
    if (slug) {
      loadData();
    }
  }, [slug]);

  // Construct page layouts dynamically
  const currentSlug = slug.toLowerCase();
  const isNews = currentSlug === 'news';
  const featured = isNews ? (categoryNews[0] || null) : (currentSlug === 'business' ? businessFeatured : (currentSlug === 'law' ? lawFeatured : (currentSlug === 'health' ? healthFeatured : (currentSlug === 'fashion' ? fashionFeatured : (currentSlug === 'universe' ? universeFeatured : (currentSlug === 'political' ? politicalFeatured : (currentSlug === 'sports' ? sportsFeatured : (currentSlug === 'travel' ? travelFeatured : (currentSlug === 'culture' ? cultureFeatured : (currentSlug === 'entertainment' ? entertainmentFeatured : (categoryNews[0] || null)))))))))));
  const sidebar = isNews ? categoryNews.slice(1, 4) : (currentSlug === 'business' ? businessSidebar : (currentSlug === 'law' ? lawSidebar : (currentSlug === 'health' ? healthSidebar : (currentSlug === 'fashion' ? fashionSidebar : (currentSlug === 'universe' ? universeSidebar : (currentSlug === 'political' ? politicalSidebar : (currentSlug === 'sports' ? sportsSidebar : (currentSlug === 'travel' ? travelSidebar : (currentSlug === 'culture' ? cultureSidebar : (currentSlug === 'entertainment' ? entertainmentSidebar : categoryNews.slice(1, 4)))))))))));
  const bottomGrid = isNews ? categoryNews.slice(4, 9) : (currentSlug === 'business' ? businessBottomGrid : (currentSlug === 'law' ? lawBottomGrid : (currentSlug === 'health' ? healthBottomGrid : (currentSlug === 'fashion' ? fashionBottomGrid : (currentSlug === 'universe' ? universeBottomGrid : (currentSlug === 'political' ? politicalBottomGrid : (currentSlug === 'sports' ? sportsBottomGrid : (currentSlug === 'travel' ? travelBottomGrid : (currentSlug === 'culture' ? cultureBottomGrid : (currentSlug === 'entertainment' ? entertainmentBottomGrid : categoryNews.slice(4, 9)))))))))));
  const moreFromArticles = isNews ? categoryNews.slice(9) : (currentSlug === 'business' ? businessMoreFrom : (currentSlug === 'law' ? lawMoreFrom : (currentSlug === 'health' ? healthMoreFrom : (currentSlug === 'fashion' ? fashionMoreFrom : (currentSlug === 'universe' ? universeMoreFrom : (currentSlug === 'political' ? politicalMoreFrom : (currentSlug === 'sports' ? sportsMoreFrom : (currentSlug === 'travel' ? travelMoreFrom : (currentSlug === 'culture' ? cultureMoreFrom : (currentSlug === 'entertainment' ? entertainmentMoreFrom : categoryNews.slice(1)))))))))));

  // Screenshot shows "More From Fashion" even on Health page
  const moreFromRegion = currentSlug === 'health' ? 'Fashion' : displayTitle;

  return (
    <div style={styles.appContainer}>
      <Header active={displayTitle} />

      {loading ? (
        <div style={styles.loaderContainer}>
          <div style={styles.spinner} />
          <span style={styles.loaderText}>Loading {slug} desk...</span>
        </div>
      ) : (
        <main style={styles.mainContent}>
          {/* Sub-topic links under the main navigation for News desk */}
          {isNews && newsTopics && newsTopics.length > 0 && (
            <NewsTopicRow topics={newsTopics} />
          )}

          <div style={styles.pageWrapper}>
            {/* Section title with red rule */}
            <CategoryPageTitle title={`News | ${displayTitle}`} />

            {/* Latest updates strip */}
            {latestUpdates && latestUpdates.length > 0 && (
              <div className="news-page-updates">
                <LatestUpdatesBar updates={latestUpdates} />
              </div>
            )}

            {/* Lead story + right-hand rail */}
            {featured && (
              <NewsFeatureHero
                featured={featured}
                sidebar={sidebar}
              />
            )}

            {/* Bottom card row if we have extra articles */}
            {bottomGrid && bottomGrid.length > 0 && (
              <div className="news-bottom-grid">
                {bottomGrid.map((article) => (
                  <NewsCard key={article.id} article={article} variant="flat" />
                ))}
              </div>
            )}
          </div>

          {/* Full-bleed YouTube updates hero */}
          {youtubeFeature && (
            <YoutubeUpdatesHero feature={youtubeFeature} />
          )}

          {/* More category archives */}
          {moreFromArticles && moreFromArticles.length > 0 && (
            <MoreFromSection
              region={moreFromRegion}
              articles={moreFromArticles}
            />
          )}
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
    padding: '0 5% 60px 5%',
    marginTop: '-12px'
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
