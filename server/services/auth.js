const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bcryptSaltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS);
const User = require('../db/models').User;

const authenticate = async (params) => {
  try {
    const { email, password } = params;
    const user = await User.findOne({ where: { email }, raw: true });
    if (!user) {
      throw new Error('Invalid credentials.')
    }

    const passwordsMatch = await bcrypt.compare(password || '', user.passwordDigest);
    if (!passwordsMatch) {
      throw new Error('Invalid credentials.')
    }

    const payload = {
      email,
      id: user.id,
      time: new Date(),
    }

    // I should perhaps look into a way of doing this asyncronously
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRY,
    });

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    };
  } catch (error) {
    throw error;
  }
}

const hashPassword = async (password) => {
  // Use `.hash` rather than `.hashSync` to ensure hashing is async/non-blocking
  const hashedPassword = await bcrypt.hash(password, bcryptSaltRounds);
  return hashedPassword;
}

module.exports = {
  authenticate,
  hashPassword,
}
