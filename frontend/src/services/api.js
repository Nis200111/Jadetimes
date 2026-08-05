// Large database for JadeTimes Homepage Sections
const mockNewsData = [
  // 1. Featured Astronaut Article (ID: 1)
  {
    id: 1,
    title: "Space Mission Achieves Core Orbit Insertion Success",
    category: "Space",
    description: "In a flawless demonstration of next-generation thruster sequences, the crew capsule successfully locked into geosynchronous orbit, beginning their six-month scientific survey.",
    image: "/images/0b3a43_9877c19093db4888be12f3638f7d0cd0~mv2.avif",
    date: "August 3, 2026",
    isFeatured: true,
    readTime: "5 min read",
    author: "Dr. Sarah Jenkins",
    timeAgo: "2 hours ago"
  },
  // 2-4. Hero Stacked Stories (IDs: 2, 3, 4)
  {
    id: 2,
    title: "Global Supply Chains Reposition to Regional Mini-Factories",
    category: "Business",
    image: "https://picsum.photos/seed/factory/800/600",
    date: "August 3, 2026",
    readTime: "3 min read"
  },
  {
    id: 3,
    title: "Zero-Emission Timber-Framed Suburb Project Breaks Ground",
    category: "Climate",
    image: "https://picsum.photos/seed/suburb/800/600",
    date: "August 2, 2026",
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "New Microbial Strain Dissolves Commercial Polymers Safely",
    category: "Science",
    image: "https://picsum.photos/seed/bacteria/800/600",
    date: "August 2, 2026",
    readTime: "4 min read"
  },
  // 5-8. Category Tiles (IDs: 5, 6, 7, 8)
  {
    id: 5,
    title: "Formula 1 Tracks Transition to 100% Sustainable Biofuels",
    category: "Sports",
    image: "https://picsum.photos/seed/f1/800/600",
    date: "August 1, 2026",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "Mineral Matrix Expansion in Western Australia Outbacks",
    category: "Australia",
    image: "https://picsum.photos/seed/outback/800/600",
    date: "August 1, 2026",
    readTime: "3 min read"
  },
  {
    id: 7,
    title: "Tech Giants Announce Strategic Subsea Fiber Rings in Asia",
    category: "Asia",
    image: "https://picsum.photos/seed/subsea/800/600",
    date: "July 31, 2026",
    readTime: "5 min read"
  },
  {
    id: 8,
    title: "House Approves New Clean Energy Infrastructure Bill",
    category: "Political",
    image: "https://picsum.photos/seed/senate/800/600",
    date: "July 31, 2026",
    readTime: "6 min read"
  },
  // 9-16. More News Feed (IDs: 9 to 16)
  {
    id: 9,
    title: "Gold Reserves Hit Historic High Amid Financial Re-alignments",
    category: "Economy",
    image: "https://picsum.photos/seed/gold/800/600",
    date: "August 2, 2026",
    readTime: "3 min read",
    description: "Central banks worldwide increase gold purchases to hedge currency risks."
  },
  {
    id: 10,
    title: "Metropolitan Rail Grid Expands with Magnetically Levitated Lines",
    category: "Transit",
    image: "https://picsum.photos/seed/train/800/600",
    date: "August 2, 2026",
    readTime: "4 min read",
    description: "New high-speed passenger lines connecting airports are successfully tested."
  },
  {
    id: 11,
    title: "Deep Sea Exploration Reveals Hydrothermal Vent Ecological Hubs",
    category: "Science",
    image: "https://picsum.photos/seed/hydrothermal/800/600",
    date: "August 2, 2026",
    readTime: "5 min read",
    description: "Marine biophysicists record geothermal micro-organisms in deep trenches."
  },
  {
    id: 12,
    title: "Robotic Surgery Platform Achieves Micro-Incision Milestones",
    category: "Medicine",
    image: "https://picsum.photos/seed/surgery/800/600",
    date: "August 2, 2026",
    readTime: "4 min read",
    description: "Surgeons successfully perform complex operations using telemetry lines."
  },
  {
    id: 13,
    title: "Global Cyber Shield Protocol Activated for Retail Grid Networks",
    category: "Security",
    image: "https://picsum.photos/seed/cybershield/800/600",
    date: "August 1, 2026",
    readTime: "5 min read",
    description: "New data security controls are applied across retail systems."
  },
  {
    id: 14,
    title: "Luxury Electric Yacht Models Dominate European Shipyards",
    category: "Luxury",
    image: "https://picsum.photos/seed/yacht/800/600",
    date: "August 1, 2026",
    readTime: "3 min read",
    description: "Elite clients shift to solar hybrid propulsion systems for superyachts."
  },
  {
    id: 15,
    title: "Geothermal Power Plant Matrix Launches in Iceland Grid",
    category: "Energy",
    image: "https://picsum.photos/seed/geothermal/800/600",
    date: "August 1, 2026",
    readTime: "4 min read",
    description: "Tapping basaltic reservoirs yields clean base-load thermal capacity."
  },
  {
    id: 16,
    title: "Ancient Clay Tablets Decoded Revealing Crop Trade Ledgers",
    category: "History",
    image: "https://picsum.photos/seed/claytablets/800/600",
    date: "July 31, 2026",
    readTime: "5 min read",
    description: "Sumerian farming contracts provide insights into agricultural pricing models."
  },
  // 17. Japan Launches Feature Overlay (ID: 17)
  {
    id: 17,
    title: "Japan Launches Next-Generation Solid Fuel Rocket Payload Carrier",
    category: "Space",
    image: "https://picsum.photos/seed/rocketlaunch/800/600",
    date: "August 3, 2026",
    readTime: "5 min read",
    description: "A major orbital deployment succeeds at Tanegashima Space Center, launching advanced imaging sensors."
  },
  // 18-22. Video Player Segments (IDs: 18 to 22)
  {
    id: 18,
    title: "Exploring the Solar Matrix Infrastructure of Atacama Desert",
    category: "TV",
    description: "A visual documentary on the construction of the massive 5,000-hectare clean photovoltaic energy grid.",
    image: "https://picsum.photos/seed/solardesert/800/600",
    date: "August 3, 2026",
    duration: "12:15"
  },
  {
    id: 19,
    title: "How Autonomous Drones are Reshaping Agriculture Logistics",
    category: "TV",
    image: "https://picsum.photos/seed/drones/800/600",
    duration: "04:30"
  },
  {
    id: 20,
    title: "Inside the Sweden Carbon-Negative Smart District Project",
    category: "TV",
    image: "https://picsum.photos/seed/swedendistrict/800/600",
    duration: "08:45"
  },
  {
    id: 21,
    title: "Voyager 1 Communications Signal Recovery Mission Analysis",
    category: "TV",
    image: "https://picsum.photos/seed/voyager/800/600",
    duration: "06:10"
  },
  {
    id: 22,
    title: "The Industrial Impact of Liquid Metal Thermal Chip Cooling",
    category: "TV",
    image: "https://picsum.photos/seed/coolingchip/800/600",
    duration: "10:14"
  },
  // 23-26. Political Updates Bottom Horizontal Row (IDs: 23 to 26)
  {
    id: 23,
    title: "Senate Assembly Approves Bilateral Trade Accords",
    category: "Political",
    image: "https://picsum.photos/seed/senatevote/800/600",
    date: "July 28, 2026",
    readTime: "3 min read"
  },
  {
    id: 24,
    title: "Federal Agency Issues Standards for Algorithmic Finance Integrity",
    category: "Political",
    image: "https://picsum.photos/seed/algorithm/800/600",
    date: "July 27, 2026",
    readTime: "4 min read"
  },
  {
    id: 25,
    title: "Local Assembly Votes on Urban Green Canopy Expansion Guidelines",
    category: "Political",
    image: "https://picsum.photos/seed/urbanforest/800/600",
    date: "July 25, 2026",
    readTime: "2 min read"
  },
  {
    id: 26,
    title: "State Representative Proposes Digital Privacy Bill of Rights",
    category: "Political",
    image: "https://picsum.photos/seed/digitalprivacy/800/600",
    date: "July 24, 2026",
    readTime: "5 min read"
  },
  // 27-30. News Updates Sports Row (IDs: 27 to 30)
  {
    id: 27,
    title: "Championship Tournament Final Clashes Booked for London Arena",
    category: "Sports",
    image: "https://picsum.photos/seed/londonarena/800/600",
    date: "August 1, 2026",
    readTime: "3 min read"
  },
  {
    id: 28,
    title: "National Football League Allocates Funds for Youth Coaching Initiatives",
    category: "Sports",
    image: "https://picsum.photos/seed/youthcoach/800/600",
    date: "July 31, 2026",
    readTime: "4 min read"
  },
  {
    id: 29,
    title: "International Cycling Classic Rallies Teams to Swiss Alps Circuit",
    category: "Sports",
    image: "https://picsum.photos/seed/swissalps/800/600",
    date: "July 30, 2026",
    readTime: "5 min read"
  },
  {
    id: 30,
    title: "Gold Medal Swimmer Announces Retirement Ahead of World Trials",
    category: "Sports",
    image: "https://picsum.photos/seed/swimmingpool/800/600",
    date: "July 29, 2026",
    readTime: "3 min read"
  },
  // 31. Exclusive Pulse Featured Dark Card (ID: 31)
  {
    id: 31,
    title: "The Geopolitical Race Behind Helium-3 Extraction Protocols",
    category: "Exclusive",
    description: "Deep Lunar mining programs emerge as major world powers aim to secure isotopic deposits for early clean fusion reactions.",
    image: "https://picsum.photos/seed/lunarfusion/800/600",
    date: "August 3, 2026",
    readTime: "8 min read"
  },
  // 32-34. 3-Column Post Grid (IDs: 32, 33, 34)
  {
    id: 32,
    title: "Social Media Platform Announces Unified Encrypted DM Protocol",
    category: "Social",
    image: "https://picsum.photos/seed/encryption/800/600",
    date: "August 2, 2026",
    readTime: "3 min read"
  },
  {
    id: 33,
    title: "Western Australia Mining Matrix Integrates Heavy Battery Trucks",
    category: "Resources",
    image: "https://picsum.photos/seed/batterytrucks/800/600",
    date: "August 1, 2026",
    readTime: "5 min read"
  },
  {
    id: 34,
    title: "Generative AI Systems Transition to Edge Compute Architectures",
    category: "Innovation",
    image: "https://picsum.photos/seed/edgecompute/800/600",
    date: "August 1, 2026",
    readTime: "4 min read"
  },
  // 35-38. Travel Updates 4 Column Row (IDs: 35 to 38)
  {
    id: 35,
    title: "Historical Monasteries of Kyoto Open Restricted Areas to Public",
    category: "Travel",
    image: "https://picsum.photos/seed/kyototemples/800/600",
    date: "July 31, 2026",
    readTime: "4 min read"
  },
  {
    id: 36,
    title: "Eco-tourism Retreats Open in the Cloud Forests of Costa Rica",
    category: "Travel",
    image: "https://picsum.photos/seed/costaricaforest/800/600",
    date: "July 30, 2026",
    readTime: "5 min read"
  },
  {
    id: 37,
    title: "Remote Island Archipelago Enforces Strict Daily Visitor Caps",
    category: "Travel",
    image: "https://picsum.photos/seed/islandbeach/800/600",
    date: "July 29, 2026",
    readTime: "3 min read"
  },
  {
    id: 38,
    title: "Train Journey Route Opens Across Swiss Mountain Passes",
    category: "Travel",
    image: "https://picsum.photos/seed/swisstrain/800/600",
    date: "July 28, 2026",
    readTime: "4 min read"
  },
  // 39. Military Hero Overlay Banner (ID: 39)
  {
    id: 39,
    title: "The Evolution of Tactical Air Mobility in Modern Peacekeeping Operations",
    category: "Global Defense",
    description: "How advanced helicopter rotors and digital avionics systems allow logistics networks to serve remote humanitarian biosystems.",
    image: "https://picsum.photos/seed/helicopterrotors/800/600",
    date: "August 3, 2026",
    readTime: "7 min read"
  }
];

const mockLatestUpdates = [
  { id: 1, timeAgo: "7 hours ago", title: "Cristiano Ronaldo: Legacy, Present Era, and Future Horizons" },
  { id: 2, timeAgo: "3 days ago", title: "Rogue Agents or Marketing Stunt? The Unsettling Truth Behind the..." },
  { id: 3, timeAgo: "3 days ago", title: "The Invisible Invasion: How Microplastics Are Getting Into Our..." },
  { id: 4, timeAgo: "3 days ago", title: "Who Owns You After You Die? The Messy Law of Digital Inheritance" }
];

const mockCategoryBreakdown = {
  asia: [
    { id: 701, title: "Tokyo Logistics Integrates Autonomous Tug Grids" },
    { id: 702, title: "Seoul Semiconductor Matrix Expansion Projects Approved" },
    { id: 703, title: "Singapore FinTech Hub Records Record Venture Cash Flows" }
  ],
  usa: [
    { id: 704, title: "Silicon Valley Tech Incubators Refocus on Physical Robotics" },
    { id: 705, title: "New York Rail Network Approves Green Station Upgrades" },
    { id: 706, title: "Texas Solar Matrices Integrate High-Density Salt Battery Cells" }
  ],
  australia: [
    { id: 707, title: "Western Outback Lithium Mines Hit Record Yield Metrics" },
    { id: 708, title: "Sydney Harbor Logistics Deploy Zero-Carbon Tug Fleets" },
    { id: 709, title: "Melbourne Biomedical Hub Synthesizes Synthetic Skin Layers" }
  ],
  europe: [
    { id: 710, title: "European Grid Connects Iceland Thermal Matrices Via Subsea Lines" },
    { id: 711, title: "Rotterdam Shipping Port Automates Cargo Sorting Using Machine Vision" },
    { id: 712, title: "Berlin Assembly Approves Funding for Clean Smart Suburbs" }
  ]
};

const mockTrending = [
  { id: 901, title: "Federal Reserve Announces Interest Rate Adjustments", category: "Finance", views: "125K" },
  { id: 902, title: "New Mars Rover Transmits First High-Res Landscape Panoramas", category: "Space", views: "98K" },
  { id: 903, title: "Cybersecurity Patch Issued for Global Cloud Protocols", category: "Security", views: "84K" },
  { id: 904, title: "Architects Design Carbon-Negative Skyscraper Prototypes", category: "Design", views: "71K" },
  { id: 905, title: "The Economic Evolution of Remote Workforce Taxation", category: "Business", views: "55K" }
];

const mockVideos = [
  {
    id: 18,
    title: "Exploring the Solar Matrix Infrastructure of Atacama Desert",
    duration: "12:15",
    image: "https://picsum.photos/seed/solardesert/800/600"
  },
  {
    id: 19,
    title: "How Autonomous Drones are Reshaping Agriculture Logistics",
    duration: "04:30",
    image: "https://picsum.photos/seed/drones/800/600"
  },
  {
    id: 20,
    title: "Inside the Sweden Carbon-Negative Smart District Project",
    duration: "08:45",
    image: "https://picsum.photos/seed/swedendistrict/800/600"
  },
  {
    id: 21,
    title: "Voyager 1 Communications Signal Recovery Mission Analysis",
    duration: "06:10",
    image: "https://picsum.photos/seed/voyager/800/600"
  },
  {
    id: 22,
    title: "The Industrial Impact of Liquid Metal Thermal Chip Cooling",
    duration: "10:14",
    image: "https://picsum.photos/seed/coolingchip/800/600"
  }
];

const mockPodcasts = [
  {
    id: 1,
    title: "Is the Smart-Phone Era Drawing to a Close?",
    show: "JadeTimes Talks",
    duration: "42 mins",
    image: "https://picsum.photos/seed/podcastphone/800/600"
  },
  {
    id: 2,
    title: "Creative Leadership in Hyper-Scale Tech Teams",
    show: "Exclusive Pulse",
    duration: "31 mins",
    image: "https://picsum.photos/seed/podcastleadership/800/600"
  },
  {
    id: 3,
    title: "Exploring Deep Oceans and Hydrothermal Biospheres",
    show: "JadeTimes Eco-cast",
    duration: "55 mins",
    image: "https://picsum.photos/seed/podcastocean/800/600"
  }
];

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

async function apiCall(endpoint) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 300);

  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal
    });
    clearTimeout(id);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return await res.json();
  } catch (error) {
    clearTimeout(id);
    console.error(`API Call failed on endpoint ${endpoint}:`, error.message);
    throw error;
  }
}

export async function fetchNews(category = null) {
  try {
    const endpoint = category ? `/news?category=${category}` : '/news';
    return await apiCall(endpoint);
  } catch (error) {
    console.warn("Using mockNewsData fallback for news:", error.message);
    if (category) {
      return mockNewsData.filter(item => item.category.toLowerCase() === category.toLowerCase());
    }
    return mockNewsData;
  }
}

export async function fetchNewsById(id) {
  try {
    return await apiCall(`/news/${id}`);
  } catch (error) {
    console.warn(`Using mockNewsData fallback for single article ID ${id}:`, error.message);
    return mockNewsData.find(item => item.id === parseInt(id)) || null;
  }
}

export async function fetchTrending() {
  try {
    return await apiCall('/trending');
  } catch (error) {
    console.warn("Using mockTrending fallback:", error.message);
    return mockTrending;
  }
}

export async function fetchVideos() {
  try {
    return await apiCall('/videos');
  } catch (error) {
    console.warn("Using mockVideos fallback:", error.message);
    return mockVideos;
  }
}

export async function fetchPodcasts() {
  try {
    return await apiCall('/podcasts');
  } catch (error) {
    console.warn("Using mockPodcasts fallback:", error.message);
    return mockPodcasts;
  }
}

export async function fetchLatestUpdates() {
  return mockLatestUpdates;
}

export async function fetchCategoryBreakdown() {
  return mockCategoryBreakdown;
}
