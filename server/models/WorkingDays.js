// WorkingDays.js file content 
const mongoose = require('mongoose');

const workingDaysSchema = new mongoose.Schema({
  employee_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  date: { type: Date, required: true },
  hours_worked: { type: Number, required: true },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  created_on: { type: Date, default: Date.now },
  modified_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  modified_on: { type: Date, default: Date.now },
});

const WorkingDays = mongoose.model('WorkingDays', workingDaysSchema);

module.exports = WorkingDays;
