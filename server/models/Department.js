const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  departmentName: String,
  managerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  location: String,
  // Add other fields based on your requirements
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
