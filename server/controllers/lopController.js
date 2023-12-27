// lopController.js file content 
const express = require('express');
const router = express.Router();
const lopService = require('../services/lopService');

// Define routes
router.get('/', lopService.getAllLOPs);
router.get('/:id', lopService.getLOPById);
router.post('/', lopService.createLOP);
router.put('/:id', lopService.updateLOP);
router.delete('/:id', lopService.deleteLOP);

module.exports = router;
