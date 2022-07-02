// Import
const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
require('./config/database');


// === Middleware ===
app.use(express.json());
app.use(cors());

// Check if token is present and create req.user
app.use(require('./config/checkToken'));
// === Routes ===

// Users
app.use('/api/v1/users', require('./routes/api/users'));

// Protect API routes below from unauthorized users
const ensuredLoggedIn = require('./config/ensureLoggedIn');

// Products
app.use('/api/v1/products', ensuredLoggedIn, require('./routes/api/products.js'));


// PORT
const PORT = 8080;

app.listen(PORT, () => console.log(`Express app running on port ${PORT}`));