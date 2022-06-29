const express = require('express');
const router = express.Router();
const profilesCtrl = require('../../controllers/api/profiles');

// GET /api/v1/profiles
router.get('/', profilesCtrl.index);

// POST /api/v1/profiles
router.post('/', profilesCtrl.create);

// PUT /api/v1/profiles/:id
router.put('/:id', profilesCtrl.update);

// DELETE /api/v1/profiles/:id
router.delete('/:id', profilesCtrl.remove);


module.exports = router;