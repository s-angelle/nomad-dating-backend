const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensuredLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/v1/users
router.post('/', usersCtrl.create);

// // POST /api/v1/users/login
router.post('/login', usersCtrl.login);

// The below routes should not be accessible to unauthorized users

//  GET /api/v1/users/:id
router.get('/:id', ensuredLoggedIn, usersCtrl.show);

// PUT /api/v1/users/:id
router.put('/:id', ensuredLoggedIn, usersCtrl.update)


// // GET /api/v1/users/:id/favorites
// router.get('/:id/favorites', usersCtrl.getFavorites)


module.exports = router;