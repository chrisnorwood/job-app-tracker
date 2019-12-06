const User = require('../db/models').User;

const createUser = async (user) => await User.create(user);
const getUserByEmail = async (email) => await User.findOne({ where: { email } });

module.exports = {
  createUser,
  getUserByEmail,
}
