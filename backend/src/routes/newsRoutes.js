const express = require('express');
const router = express.Router();
const { 
  mockNewsData, 
  mockTrending, 
  mockVideos, 
  mockPodcasts 
} = require('../data/sampleData');

// 1. Get all articles (with optional category query parameter filter)
router.get('/news', (req, res) => {
  const { category } = req.query;
  if (category) {
    const filtered = mockNewsData.filter(
      item => item.category.toLowerCase() === category.toLowerCase()
    );
    return res.json(filtered);
  }
  res.json(mockNewsData);
});

// 2. Get single article by ID
router.get('/news/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const article = mockNewsData.find(item => item.id === id);
  if (!article) {
    return res.status(404).json({ message: 'Article not found' });
  }
  res.json(article);
});

// 3. Get trending lists
router.get('/trending', (req, res) => {
  res.json(mockTrending);
});

// 4. Get videos feed
router.get('/videos', (req, res) => {
  res.json(mockVideos);
});

// 5. Get podcasts feed
router.get('/podcasts', (req, res) => {
  res.json(mockPodcasts);
});

module.exports = router;
