const express = require("express");
const router = express.Router();
const cartsCtrl = require("../../controllers/api/carts");
const ensuredLoggedIn = require("../../config/ensureLoggedIn");

// GET /api/v1/cart
router.get("/find/:id", ensuredLoggedIn, cartsCtrl.getUserCart);

// POST /api/v1/cart
router.post("/", cartsCtrl.create);

// PUT /api/v1/cart/:id
router.put("/:id", ensuredLoggedIn, cartsCtrl.update);

// DELETE /api/v1/cart/:id
router.delete("/:id", ensuredLoggedIn, cartsCtrl.remove);

module.exports = router;
