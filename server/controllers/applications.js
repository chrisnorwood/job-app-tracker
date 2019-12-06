const models = require('../db/models');

// Must be ONLY accessed as authenticated route
// need to rewrite the logic to actually utilize ASSOCIATIONS off of current user
const getAllApplications = async (req, res, next) => {
  try {
    const applications = await models.Application.findAll({ where: { userId: req.user.id } });
    return res.status(200).json({
      applications
    });
  } catch (error) {
    return res.status(500).send(`Internal Server Error: ${error.message}`);
  }
}

module.exports = {
  getAllApplications,
}
