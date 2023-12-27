// leaveController.js file content 
const express = require('express');
const router = express.Router();
const leaveService = require('../services/leaveService');

// Define routes
router.get('/', leaveService.getAllLeaves);
router.get('/:id', leaveService.getLeaveById);
router.post('/', leaveService.createLeave);
router.put('/:id', leaveService.updateLeave);
router.delete('/:id', leaveService.deleteLeave);

module.exports = router;
