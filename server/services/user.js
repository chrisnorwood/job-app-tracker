const User = require('../db/models').User;

const createUser = async (user) => await User.create(user);
const getUserByEmail = async (email) => await User.findOne({ where: { email } });
const getUserById = async (id) => await User.findOne({ where: { id } })

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
}
