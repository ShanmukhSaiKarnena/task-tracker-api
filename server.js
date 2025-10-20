const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json()); // parse JSON request bodies

// Routes
app.use('/api/tasks', require('./routes/taskRoutes'));

// Basic root
app.get('/', (req, res) => res.send('Task Tracker API is running'));

// Error handling for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
