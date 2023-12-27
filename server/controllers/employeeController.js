// employeeController.js file content 
const express = require('express');
const router = express.Router();
const employeeService = require('../services/employeeService');

// Define routes
router.get('/', employeeService.getAllEmployees);
router.get('/:id', employeeService.getEmployeeById);
router.post('/', employeeService.createEmployee);
router.put('/:id', employeeService.updateEmployee);
router.delete('/:id', employeeService.deleteEmployee);

module.exports = router;
