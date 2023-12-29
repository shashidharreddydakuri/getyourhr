const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

// Register a new user
router.post('/register', userService.registerUser);

// Login
router.post('/login', userService.loginUser);

module.exports = router;
