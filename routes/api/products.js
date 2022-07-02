const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/api/products');

// GET /api/v1/products
router.get('/', productsCtrl.index);

// POST /api/v1/products
router.post('/', productsCtrl.create);

// PUT /api/v1/products/:id
router.put('/:id', productsCtrl.update);

// DELETE /api/v1/products/:id
router.delete('/:id', productsCtrl.remove);


module.exports = router;