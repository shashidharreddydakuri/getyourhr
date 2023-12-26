// Import the authentication middleware
const authenticateToken = require('../middleware/authenticateToken');

// Add this middleware to the routes that require authentication
router.use(authenticateToken);

// Rest of the routes go here
