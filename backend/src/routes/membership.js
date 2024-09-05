// routes/membership.js

const express = require('express');
const {
  getMembershipTiers,
  getUserMembershipStatus,
  upgradeMembership,
} = require('../services/membershipService');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

// @route   GET /api/memberships/tiers
// @desc    Get available membership tiers
router.get('/tiers', getMembershipTiers);

// @route   GET /api/memberships/status
// @desc    Get current user's membership status
router.get('/status', authMiddleware, getUserMembershipStatus);

// @route   POST /api/memberships/upgrade
// @desc    Upgrade user membership to a higher tier
router.post('/upgrade', authMiddleware, upgradeMembership);

module.exports = router;
