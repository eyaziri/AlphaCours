const express = require('express');
const { protect } = require('../middleware/authMiddleware'); 
const roleMiddleware = require('../middleware/roleMiddleware'); 
const { getStudentDashboard, getTeacherDashboard } = require('../controllers/dashboardController');

const router = express.Router();


router.get('/student-dashboard', protect, roleMiddleware(['student']), getStudentDashboard);

router.get('/teacher-dashboard', protect, roleMiddleware(['teacher']), getTeacherDashboard);

module.exports = router;