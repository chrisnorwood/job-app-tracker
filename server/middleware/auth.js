const jwt = require('jsonwebtoken');

const authenticateRequest = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader ? authHeader.split(' ')[1] : null;
  if (!authHeader || !token)
    return res.status(403).json({ message: "No token provided." });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(403).json({ message: "Invalid token." });
    
    const { email, id } = decoded;
    
    req.user = {
      email,
      id,
    };
    
    next();
  });
}

module.exports = {
  authenticateRequest,
}
