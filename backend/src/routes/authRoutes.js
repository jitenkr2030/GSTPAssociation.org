const express = require('express');
const { login, register, resetPassword } = require('../services/authService');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
router.post('/register', register);

// @route   POST /api/auth/login
// @desc    Login a user and return a JWT
router.post('/login', login);

// @route   POST /api/auth/reset-password
// @desc    Reset password
router.post('/reset-password', authMiddleware, resetPassword);

module.exports = router;
