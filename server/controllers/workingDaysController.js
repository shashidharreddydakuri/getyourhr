// workingDaysController.js file content 
const express = require('express');
const router = express.Router();
const workingDaysService = require('../services/workingDaysService');

// Define routes
router.get('/', workingDaysService.getAllWorkingDays);
router.get('/:id', workingDaysService.getWorkingDaysById);
router.post('/', workingDaysService.createWorkingDays);
router.put('/:id', workingDaysService.updateWorkingDays);
router.delete('/:id', workingDaysService.deleteWorkingDays);

module.exports = router;
