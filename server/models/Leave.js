// Leave.js file content 
const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
  employee_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  leave_type: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  reason: { type: String },
  status: { type: String, default: 'pending' },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  created_on: { type: Date, default: Date.now },
  modified_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  modified_on: { type: Date, default: Date.now },
});

const Leave = mongoose.model('Leave', leaveSchema);

module.exports = Leave;
