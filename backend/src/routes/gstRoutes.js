const express = require('express');
const { fileGst, getGstFilings } = require('../services/gstService');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

// @route   POST /api/gst/filings
// @desc    File a GST
router.post('/filings', authMiddleware, fileGst);

// @route   GET /api/gst/filings
// @desc    Get GST filings
router.get('/filings', authMiddleware, getGstFilings);

module.exports = router;
