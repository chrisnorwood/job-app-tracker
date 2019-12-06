const userService = require('../services/user');
const authService = require('../services/auth');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error('Invalid credentials.');

    const { token, user } = await authService.authenticate({ email, password });
    
    res.status(200).send({
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
}

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error('Invalid credentials.');

    const userExists = await userService.getUserByEmail(email || '');
    if (userExists) {
      return res.status(422).send({ message: "User already exists with this email address." })
    }

    const passwordDigest = await authService.hashPassword(password);
    const userInfo = { email, passwordDigest };
    
    const newUser = await userService.createUser(userInfo);
    const { token } = await authService.authenticate({ email, password });

    res.status(200).send({
      message: "Account created",
      token,
      user: {
        id: newUser.id,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(422).send({ message: error.message });
  }
}

module.exports = {
  login,
  register
}
