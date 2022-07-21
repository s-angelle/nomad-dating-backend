const express = require("express");
const router = express.Router();
const ordersCtrl = require("../../controllers/api/orders");
const ensuredLoggedIn = require("../../config/ensureLoggedIn");

// GET /api/v1/order
router.get("/find/:id", ensuredLoggedIn, ordersCtrl.getUserOrder);

// POST /api/v1/order
router.post("/", ordersCtrl.create);

// PUT /api/v1/order/:id
router.put("/:id", ensuredLoggedIn, ordersCtrl.update);

// DELETE /api/v1/order/:id
router.delete("/:id", ensuredLoggedIn, ordersCtrl.remove);

module.exports = router;
