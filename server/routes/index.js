// All routes in here are namespaced as /api/... in server index
const { Router } = require('express');
const authController = require('../controllers/auth');
const applicationsController = require('../controllers/applications');

const router = Router();

router.get('/', (req, res, next) => res.status(200).json({ status: 'OK!'}));

// Authentication & User Signup, Login, etc.
router.post('/auth/register', authController.register);
router.get('/auth/login', authController.login);

// Applications
router.get('/applications', applicationsController.getAllApplications);

module.exports = router;
