const { Router } = require('express');
const applicationsController = require('../controllers/applications');

const router = Router();

router.get('/', (req, res, next) => res.status(200).json({ status: 'OK!'}));
router.get('/applications', applicationsController.getAllApplications);

module.exports = router;
