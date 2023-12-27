// salaryController.js file content 
const express = require('express');
const router = express.Router();
const salaryService = require('../services/salaryService');

// Define routes
router.get('/', salaryService.getAllSalaries);
router.get('/:id', salaryService.getSalaryById);
router.post('/', salaryService.createSalary);
router.put('/:id', salaryService.updateSalary);
router.delete('/:id', salaryService.deleteSalary);

module.exports = router;
