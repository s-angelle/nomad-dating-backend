const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// POST /api/v1/users
router.post('/', usersCtrl.create);

// // POST /api/v1/users/login
router.post('/login', usersCtrl.login);

//  GET /api/v1/users/:id
router.get('/:id', usersCtrl.show);

// PUT /api/v1/users/:id
router.put('/:id', usersCtrl.update)

// GET /api/v1/users/:id/favorites
router.get('/:id/favorites', usersCtrl.getFavorites)


module.exports = router;