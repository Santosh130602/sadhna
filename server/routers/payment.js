
const express = require("express");
const {createOrder, checkPaymentStatus} = require("../controllers/payment")
const {protect,admin} = require("../middleware/auth")
const router = express.Router()


// router.route('/profile-update').put(protect,updateUserProfile)
// router.route('/delete-user').delete(protect, deleteUserProfile)
// router.route('/change-password').put(protect, changePassword)

router.route("/payment").post(createOrder);
router.route("/status").post(checkPaymentStatus);

// Admin routes

// router.route('/get-user').get(protect,admin,getUser)
// router.route('/delete-user/:id').delete(protect,admin,deleteUsers)

module.exports = router;