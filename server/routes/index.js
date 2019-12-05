const { Router } = require('express');
const usersController = require('../controllers/users');
const applicationsController = require('../controllers/applications');

const router = Router();

router.get('/', (req, res, next) => res.status(200).json({ status: 'OK!'}));

// Authentication & User Signup, Login, etc.
router.get('/register', usersController.createUser);

// Applications
router.get('/applications', applicationsController.getAllApplications);

module.exports = router;
