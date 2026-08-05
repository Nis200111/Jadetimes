const express = require('express');
const cors = require('cors');
require('dotenv').config();

const newsRouter = require('./routes/newsRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend client calls
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

app.use(express.json());

// Main news API routes
app.use('/api', newsRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'jadetimes-backend' });
});

app.listen(PORT, () => {
  console.log(`[JadeTimes Backend] Server listening on port ${PORT}`);
  console.log(`Health Check: http://localhost:${PORT}/health`);
  console.log(`API News feed: http://localhost:${PORT}/api/news`);
});
