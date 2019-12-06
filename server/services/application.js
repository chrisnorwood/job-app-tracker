const Application = require('../db/models').Application;

const add = async (application, userId) => await Application.create({ ...application, userId });
const getAllFromUser = async (userId) => await Application.findAll({ where: { userId } });
const update = async (id, userId, application) => (
  await Application.update(application, { where: { id, userId }, returning: true })
);
const destroy = async (id, userId) => await Application.destroy({ where: { id, userId }});

module.exports = {
  add,
  getAllFromUser,
  update,
  destroy,
}
