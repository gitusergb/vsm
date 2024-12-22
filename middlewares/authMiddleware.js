const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || "vms";
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'Access Denied' });
  try {
    const verified = jwt.verify(token.split(' ')[1],JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid Token' });
  }
};

module.exports = authMiddleware;

