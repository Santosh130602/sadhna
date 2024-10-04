const express = require("express");
const {register, loginUser, updateUserProfile,deleteUserProfile, changePassword, getUser,deleteUsers, submitContact, getAllContacts, forgotPassword, passwordReset} = require("../controllers/UserController")
const {protect,admin} = require("../middleware/auth")
const router = express.Router()

router.route('/register').post(register)
router.route('/login').post(loginUser)
router.route('/profile-update').put(protect,updateUserProfile)
router.route('/delete-user').delete(protect, deleteUserProfile)
router.route('/change-password').put(protect, changePassword)
router.route('/contact').post(submitContact)
router.route('/getcontact-details').get(protect,admin,getAllContacts)

router.route('/forgot-password').post(forgotPassword)
router.route('/reset-password/:token').post(passwordReset)


// Admin routes

router.route('/get-user').get(protect,admin,getUser)
router.route('/delete-user/:id').delete(protect,admin,deleteUsers)

module.exports = router;