const Application = require('../db/models').Application;

const add = async (application, userId) => await Application.create({ ...application, userId });
const getAllFromUser = async (userId) => await Application.findAll({ where: { userId } });
const destroy = async (id, userId) => await Application.destroy({ where: { id, userId }});

module.exports = {
  add,
  getAllFromUser,
  destroy,
}
