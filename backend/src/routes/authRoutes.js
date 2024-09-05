// routes/authRoutes.js

const express = require('express');
const {
  login,
  register,
  resetPassword,
  verifyEmail,
  resendVerificationEmail,
  logout,
} = require('../services/authService');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
router.post('/register', register);

// @route   POST /api/auth/login
// @desc    Login a user and return a JWT
router.post('/login', login);

// @route   POST /api/auth/reset-password
// @desc    Reset password for a logged-in user
router.post('/reset-password', authMiddleware, resetPassword);

// @route   GET /api/auth/verify-email/:token
// @desc    Verify email using the verification token
router.get('/verify-email/:token', verifyEmail);

// @route   POST /api/auth/resend-verification
// @desc    Resend verification email to the user
router.post('/resend-verification', resendVerificationEmail);

// @route   POST /api/auth/logout
// @desc    Logout the user (invalidate token or session)
router.post('/logout', authMiddleware, logout);

module.exports = router;

