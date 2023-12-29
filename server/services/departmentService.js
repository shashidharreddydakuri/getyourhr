const Department = require('../Model/departmentModel');

const getAllDepartments = async () => {
  try {
    const departments = await Department.find();
    return departments;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getDepartmentById = async (departmentId) => {
  try {
    const department = await Department.findById(departmentId);
    return department;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createDepartment = async (departmentData) => {
  try {
    const newDepartment = new Department(departmentData);
    await newDepartment.save();
    return newDepartment;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateDepartment = async (departmentId, departmentData) => {
  try {
    const updatedDepartment = await Department.findByIdAndUpdate(departmentId, departmentData, { new: true });
    return updatedDepartment;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteDepartment = async (departmentId) => {
  try {
    const deletedDepartment = await Department.findByIdAndDelete(departmentId);
    return deletedDepartment;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
