const Application = require('../db/models').Application;

const add = async (application, userId) => await Application.create({ ...application, userId });
const getAllFromUser = async (userId) => await Application.findAll({ where: { userId } });

module.exports = {
  add,
  getAllFromUser,
}
