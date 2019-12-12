const userService = require('../services/user');

const getById = async (req, res, next) => {
  try {
    const { id } = req.user;
    const user = await userService.getUserById(id);

    res.status(200).send({
      message: "User found.",
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
}

module.exports = {
  getById,
}
