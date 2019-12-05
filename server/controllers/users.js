const models = require('../db/models');

const createUser = async (req, res, next) => {
  try {
    const applications = await models.Application.findAll();
    return res.status(200).json({
      applications
    });
  } catch (error) {
    return res.status(500).send(`Internal Server Error: ${error.message}`);
  }
}

module.exports = {
  createUser,
}
