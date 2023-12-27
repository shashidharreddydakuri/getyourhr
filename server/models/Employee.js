// Employee.js file content 
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  date_of_birth: { type: Date, required: true },
  contact_number: { type: String },
  email: { type: String, required: true },
  address: { type: String },
  joining_date: { type: Date, required: true },
  termination_date: { type: Date },
  designation: { type: String },
  department: { type: String },
  manager_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  created_on: { type: Date, default: Date.now },
  modified_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  modified_on: { type: Date, default: Date.now },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
