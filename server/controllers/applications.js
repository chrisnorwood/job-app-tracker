const models = require('../database/models');

const getAllApplications = async (req, res, next) => {
  try {
    const applications = await models.Application.findAll();
    return res.status(200).json({
      applications
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllApplications,
}
