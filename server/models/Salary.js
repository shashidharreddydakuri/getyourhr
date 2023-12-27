// Salary.js file content 
const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema({
  employee_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  salary_amount: { type: Number, required: true },
  effective_date: { type: Date, required: true },
  end_date: { type: Date },
  bonus_amount: { type: Number },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  created_on: { type: Date, default: Date.now },
  modified_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  modified_on: { type: Date, default: Date.now },
});

const Salary = mongoose.model('Salary', salarySchema);

module.exports = Salary;
