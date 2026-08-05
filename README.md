# JadeTimes News & Editorial Platform

JadeTimes is a modern, premium news and editorial publishing platform built with a highly responsive, clean, and professional layout. The platform is designed to emulate high-end modern journalism websites, featuring dynamic content sections, live news tickers, audio/video modules, and responsive ad slots.

---

## 🚀 Key Features

* **Dynamic Header & Navigation:** Clean menu structure supporting primary news categories (Home, News, Opinion, Business, Sports, Travel, Culture, etc.).
* **Latest Updates Ticker:** A sleek, horizontal live feed ticker with vertical split dividers displaying recent headlines and timestamps.
* **Featured Editorial Grid:** Split-hero layout spotlighting a main astronaut/space feature alongside a list of trending stories.
* **Modular News Categories:** Specialized rows for Sports, Travel, Pulse, and a general news grid, each mapped with vibrant custom category tags.
* **Multimedia Hub:** Integrated sections for watchable video segments (with custom video play badges) and custom audio podcasts.
* **Ad Placements:** Adaptive layout containing side-skyscrapers (sticky desktop ads) and responsive full-width banner advertisements.
* **Responsive Editorial Footer:** Newsletter subscription sign-up, categorical links, and copyright/legal index.

---

## 🛠️ Technology Stack

* **Frontend:** [Next.js](https://nextjs.org/) (React Framework), custom Vanilla CSS modules, HTML5 Semantic Elements.
* **Backend:** [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/) API server serving sample article databases.
* **Icons:** Lucide React.
* **Styling System:** Harmonious HSL/RGB colors, sleek typography (Poppins, Outfit, Playfair Display), smooth micro-animations, and mobile responsiveness.

---

## 📂 Project Structure

```text
Jadetimes/
├── backend/
│   ├── src/
│   │   ├── app.js               # Express application setup
│   │   ├── routes/
│   │   │   └── newsRoutes.js    # API endpoints for news, trending, video, podcast data
│   │   └── data/
│   │       └── sampleData.js    # Mock databases for editorial articles
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── globals.css      # Core global stylesheet & design system
│   │   │   ├── layout.js        # Global Next.js app wrapper
│   │   │   └── page.js          # Core Home Page layout (all 20 modules)
│   │   ├── components/
│   │   │   ├── Header.js        # Sticky navbar & subscription link
│   │   │   ├── LatestUpdatesBar.js  # Restructured live ticker
│   │   │   ├── HeroSection.js   # Featured split-hero element
│   │   │   └── ... (Footer.js, NewsCard.js, PulseSection.js, etc.)
│   │   └── services/
│   │       └── api.js           # API services connecting Next.js to Express backend
│   ├── public/                  # Static assets (logos, ads)
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

## 🏁 Getting Started

### 📋 Prerequisites
Ensure you have **Node.js** (v16+ recommended) and **npm** installed on your system.

### 🔌 Step 1: Run the Backend API
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install the backend dependencies:
   ```bash
   npm install
   ```
3. Run the development server (runs by default on `http://localhost:5000`):
   ```bash
   npm run dev
   ```

### 💻 Step 2: Run the Frontend
1. Open a new terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install the frontend dependencies:
   ```bash
   npm install
   ```
3. Run the Next.js development server (runs by default on `http://localhost:3000`):
   ```bash
   npm run dev
   ```

Open your browser and navigate to `http://localhost:3000` to view the running page.

---

## 🎨 Customizing Styles & Layouts

* **Layout Structure:** The main layout blocks and section orders are mapped out within `frontend/src/app/page.js`.
* **Theme Tokens & Design System:** Colors, typography fonts, custom scrollbars, and helper classes are configured inside `frontend/src/app/globals.css`.
* **Articles & Mock Content:** To change the mock article details (titles, dates, content, categories), update `backend/src/data/sampleData.js` and `frontend/src/services/api.js`.