const express = require('express');
const noteRoutes = require('./routes/note.routes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/notes', noteRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    data: null
  });
});

// Error handling middleware (basic)
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Server Error',
    data: null
  });
});

module.exports = app;
