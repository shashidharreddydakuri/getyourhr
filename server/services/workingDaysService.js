// workingDaysService.js file content 
const WorkingDays = require('../models/WorkingDays');

const getAllWorkingDays = async (req, res) => {
  try {
    const workingDays = await WorkingDays.find();
    res.json(workingDays);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getWorkingDaysById = async (req, res) => {
  try {
    const workingDays = await WorkingDays.findById(req.params.id);
    res.json(workingDays);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createWorkingDays = async (req, res) => {
  try {
    const workingDays = await WorkingDays.create(req.body);
    res.status(201).json(workingDays);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateWorkingDays = async (req, res) => {
  try {
    const workingDays = await WorkingDays.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(workingDays);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteWorkingDays = async (req, res) => {
  try {
    await WorkingDays.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllWorkingDays,
  getWorkingDaysById,
  createWorkingDays,
  updateWorkingDays,
  deleteWorkingDays,
};
