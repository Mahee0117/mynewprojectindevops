const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({
    app: 'SkyNode',
    version: '1.0.0',
    status: 'running',
    message: '🚀 Welcome to SkyNode API!',
    timestamp: new Date().toISOString(),
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// Sample route
app.get('/api/greet/:name', (req, res) => {
  const { name } = req.params;
  res.json({ message: `Hello, ${name}! Welcome to SkyNode 🌤️` });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`✅  SkyNode is running at http://localhost:${PORT}`);
});
