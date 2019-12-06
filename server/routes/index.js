// All routes in here are namespaced as /api/... in server index
const { Router } = require('express');
const { authenticateRequest } = require('../middleware/auth');
const authController = require('../controllers/auth');
const applicationController = require('../controllers/application');

const router = Router();

router.get('/', (req, res, next) => res.status(200).json({ status: 'OK!'}));

// Authentication & User Signup, Login, etc.
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

// Applications
router.get('/applications', authenticateRequest, applicationController.getAllApplications);
router.post('/applications', authenticateRequest, applicationController.postApplication);

module.exports = router;
