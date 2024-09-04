const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const errorMiddleware = require('./middleware/errorMiddleware');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const forumRoutes = require('./routes/forumRoutes');
// Add other route imports as necessary

const app = express();

// Middleware setup
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes setup
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/forums', forumRoutes);
// Add other route setups as necessary

// Error handling middleware
app.use(errorMiddleware);

module.exports = app;
