// IMPORT
const express = require('express');
const app = express();
require('dotenv').config();

// ROUTES

// PORT
const PORT = 8080;

app.listen(PORT, () => console.log(`Express app running on port ${PORT}`));