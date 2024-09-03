const express = require('express');
const { getUsers, updateUserRole, viewLogs } = require('../services/adminService');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { adminMiddleware } = require('../middlewares/adminMiddleware');

const router = express.Router();

// @route   GET /api/admin/users
// @desc    Get all users
router.get('/users', authMiddleware, adminMiddleware, getUsers);

// @route   PUT /api/admin/users/:id/role
// @desc    Update user role by ID
router.put('/users/:id/role', authMiddleware, adminMiddleware, updateUserRole);

// @route   GET /api/admin/logs
// @desc    View system logs
router.get('/logs', authMiddleware, adminMiddleware, viewLogs);

module.exports = router;
