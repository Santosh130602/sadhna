// routes/paymentRoutes.js
const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payment");

router.post("/payment", paymentController.createOrder);
router.post("/status", paymentController.checkPaymentStatus);

module.exports = router;
