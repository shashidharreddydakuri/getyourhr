// LOP.js file content 
const mongoose = require('mongoose');

const lopSchema = new mongoose.Schema({
  employee_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  date: { type: Date, required: true },
  reason: { type: String },
  amount: { type: Number, required: true },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  created_on: { type: Date, default: Date.now },
  modified_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  modified_on: { type: Date, default: Date.now },
});

const LOP = mongoose.model('LOP', lopSchema);

module.exports = LOP;
