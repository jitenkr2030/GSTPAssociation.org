const express = require('express');
const { createPayment, getPaymentHistory, refundPayment } = require('../services/paymentService');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

// @route   POST /api/payments
// @desc    Create a new payment
router.post('/', authMiddleware, createPayment);

// @route   GET /api/payments/history
// @desc    Get payment history
router.get('/history', authMiddleware, getPaymentHistory);

// @route   POST /api/payments/refund/:id
// @desc    Refund a payment by ID
router.post('/refund/:id', authMiddleware, refundPayment);

module.exports = router;
