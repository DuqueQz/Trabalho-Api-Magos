const pool = require('../config/pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const register = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const { rows } = await pool.query(
    'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
    [username, hashedPassword]
  );
  return rows[0];
};

const login = async (username, password) => {
  const { rows } = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
  const user = rows[0];

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid username or password');
  }

  const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });
  return { token };
};

module.exports = {
  register,
  login,
};
