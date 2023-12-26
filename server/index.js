const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const employeeRoutes = require('./controllers/employeeController');
const salaryRoutes = require('./controllers/salaryController');
const workingDaysRoutes = require('./controllers/workingDaysController');
const leaveRoutes = require('./controllers/leaveController');
const lopRoutes = require('./controllers/lopController');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/hr_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// JWT Secret Key
const secretKey = 'your-secret-key'; // Replace with a strong, unique key in production

// Authentication Middleware
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Token not provided' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden: Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Authorization Middleware (Role-based)
const authorizeRole = (role) => {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      return res.status(403).json({ error: 'Forbidden: Insufficient permissions' });
    }
  };
};

// Routes
app.use('/api/v1/employees', authenticateToken, authorizeRole('admin'), employeeRoutes);
app.use('/api/v1/salaries', authenticateToken, authorizeRole('admin'), salaryRoutes);
app.use('/api/v1/working-days', authenticateToken, authorizeRole('admin'), workingDaysRoutes);
app.use('/api/v1/leaves', authenticateToken, authorizeRole('admin'), leaveRoutes);
app.use('/api/v1/lops', authenticateToken, authorizeRole('admin'), lopRoutes);

// Authentication Route
app.post('/api/v1/login', (req, res) => {
  // Replace this with your actual authentication logic (e.g., database check)
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    const token = jwt.sign({ username: 'admin', role: 'admin' }, secretKey);
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Authentication failed' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
