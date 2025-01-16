const asyncHandler = require('express-async-handler');

const getStudentDashboard = asyncHandler(async (req, res) => {
  res.json({ message: 'Welcome to the Student Dashboard' });
});

const getTeacherDashboard = asyncHandler(async (req, res) => {
  res.json({ message: 'Welcome to the Teacher Dashboard' });
});

module.exports = { getStudentDashboard, getTeacherDashboard };