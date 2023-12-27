// lopService.js file content 
const LOP = require('../models/LOP');

const getAllLOPs = async (req, res) => {
  try {
    const lops = await LOP.find();
    res.json(lops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLOPById = async (req, res) => {
  try {
    const lop = await LOP.findById(req.params.id);
    res.json(lop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createLOP = async (req, res) => {
  try {
    const lop = await LOP.create(req.body);
    res.status(201).json(lop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateLOP = async (req, res) => {
  try {
    const lop = await LOP.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(lop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteLOP = async (req, res) => {
  try {
    await LOP.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllLOPs,
  getLOPById,
  createLOP,
  updateLOP,
  deleteLOP,
};
