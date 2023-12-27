// leaveService.js file content 
const Leave = require('../models/Leave');

const getAllLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find();
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLeaveById = async (req, res) => {
  try {
    const leave = await Leave.findById(req.params.id);
    res.json(leave);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createLeave = async (req, res) => {
  try {
    const leave = await Leave.create(req.body);
    res.status(201).json(leave);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateLeave = async (req, res) => {
  try {
    const leave = await Leave.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(leave);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteLeave = async (req, res) => {
  try {
    await Leave.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllLeaves,
  getLeaveById,
  createLeave,
  updateLeave,
  deleteLeave,
};
