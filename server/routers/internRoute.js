const express = require("express");
const {getTransactionsByUserId,getInternUserDetailsUser, getInternUserDetailsAdmin, getTransactionsByAdmin} = require("../controllers/internship")
const {protect,admin} = require("../middleware/auth")
const router = express.Router()

router.route('/transactions/:userId').get(getTransactionsByUserId)
router.route('/internuser/:userId').get(getInternUserDetailsUser)
// router.route('/login').post(loginUser)



// Admin routes

router.route('/get-user-transactions').get(protect,admin,getTransactionsByAdmin)
router.route('/get-user-details').get(protect,admin,getInternUserDetailsAdmin)

module.exports = router;