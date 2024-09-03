const express = require('express');
const { getUserProfile, updateUserProfile } = require('../services/userService');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

// @route   GET /api/users/profile
// @desc    Get user profile
router.get('/profile', authMiddleware, getUserProfile);

// @route   PUT /api/users/profile
// @desc    Update user profile
router.put('/profile', authMiddleware, updateUserProfile);

module.exports = router;
