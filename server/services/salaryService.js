// salaryService.js file content 
const Salary = require('../models/Salary');

const getAllSalaries = async (req, res) => {
  try {
    const salaries = await Salary.find();
    res.json(salaries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSalaryById = async (req, res) => {
  try {
    const salary = await Salary.findById(req.params.id);
    res.json(salary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createSalary = async (req, res) => {
  try {
    const salary = await Salary.create(req.body);
    res.status(201).json(salary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateSalary = async (req, res) => {
  try {
    const salary = await Salary.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(salary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSalary = async (req, res) => {
  try {
    await Salary.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllSalaries,
  getSalaryById,
  createSalary,
  updateSalary,
  deleteSalary,
};
