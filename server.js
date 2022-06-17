// Import
const express = require('express');
const app = express();
require('dotenv').config();
require('./config/database');


// === Middleware ===
app.use(express.json());

// Check if token is present and create req.user
app.use(require('./config/checkToken'));


// === Routes ===

// Users
app.use('/api/v1/users', require('./routes/api/users'));

// Protect API routes below from unauthorized users
const ensuredLoggedIn = require('./config/ensureLoggedIn');

// Movies
app.use('/api/v1/movies',ensuredLoggedIn, require('./routes/api/movies.js'));


// PORT
const PORT = 8080;

app.listen(PORT, () => console.log(`Express app running on port ${PORT}`));