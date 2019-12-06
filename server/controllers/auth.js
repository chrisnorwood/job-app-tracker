const bcrypt = require('bcrypt');
const userService = require('../services/user');
const bcryptSaltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS);

const login = async (req, res, next) => {
  res.json({ status: 'temporarily not working' });
}

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error('Invalid credentials.')

    const userExists = await userService.getUserByEmail(email || '');
    if (userExists) {
      return res.status(422).send({ message: "User already exists with this email address." })
    }
    
    // Use `.hash` rather than `.hashSync` to ensure hashing is async/non-blocking
    const passwordDigest = await bcrypt.hash(password, bcryptSaltRounds);
    const userInfo = { email, passwordDigest };
    
    const newUser = await userService.createUser(userInfo);

    res.status(200).send({
      message: "Account created.",
      token: "SHOULD PROVIDE FRESH TOKEN HERE",
      user: {
        id: newUser.id,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(422).send({ message: "I am some error caught in auth#register",error: error.message });
  }
}

module.exports = {
  login,
  register
}
