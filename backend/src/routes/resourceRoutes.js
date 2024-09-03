const express = require('express');
const { addResource, getResources, deleteResource } = require('../services/resourceService');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

// @route   POST /api/resources
// @desc    Add a new resource
router.post('/', authMiddleware, addResource);

// @route   GET /api/resources
// @desc    Get all resources
router.get('/', authMiddleware, getResources);

// @route   DELETE /api/resources/:id
// @desc    Delete a resource by ID
router.delete('/:id', authMiddleware, deleteResource);

module.exports = router;
