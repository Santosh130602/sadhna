const express = require("express");
const {register, loginUser, updateUserProfile,deleteUserProfile, changePassword, getUserTransactions,TransitionDetails, getUser,deleteUsers} = require("../controllers/UserController")
const {protect,admin} = require("../middleware/auth")
const router = express.Router()

router.route('/register').post(register)
router.route('/login').post(loginUser)
router.route('/profile-update').put(protect,updateUserProfile)
router.route('/delete-user').delete(protect, deleteUserProfile)
router.route('/change-password').put(protect, changePassword)
router.route('/transactions/:userID').get(protect,getUserTransactions)
router.route('/transaction/:merchantTransactionId').get(protect,TransitionDetails)


module.exports = router;