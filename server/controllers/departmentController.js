const express = require('express');
const router = express.Router();
const departmentService = require('../Service/departmentService');

// Get all departments
router.get('/', async (req, res) => {
  try {
    const departments = await departmentService.getAllDepartments();
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get department by ID
router.get('/:id', async (req, res) => {
  try {
    const departmentId = req.params.id;
    const department = await departmentService.getDepartmentById(departmentId);
    res.json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new department
router.post('/', async (req, res) => {
  try {
    const departmentData = req.body;
    const newDepartment = await departmentService.createDepartment(departmentData);
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update department by ID
router.put('/:id', async (req, res) => {
  try {
    const departmentId = req.params.id;
    const departmentData = req.body;
    const updatedDepartment = await departmentService.updateDepartment(departmentId, departmentData);
    res.json(updatedDepartment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete department by ID
router.delete('/:id', async (req, res) => {
  try {
    const departmentId = req.params.id;
    const deletedDepartment = await departmentService.deleteDepartment(departmentId);
    res.json(deletedDepartment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
