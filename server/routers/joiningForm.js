// routes/internshipRoutes.js

const express = require("express");
const router = express.Router();
// const upload = require("../middleware/upload"); // Multer middleware
const { createInternshipApplication, registerVayamParticipant, getAllInternshipApplications, getAllVayamApplications } = require("../controllers/joiningForm");

const {protect,admin} = require("../middleware/auth")

router.route('/internship-register').post(createInternshipApplication)
router.route('/vayam-register').post(registerVayamParticipant)



// Admin   
router.route('/get-all-internshipApplication').get(protect,admin,getAllInternshipApplications)
router.route('/get-all-VayamApplication').get(protect,admin,getAllVayamApplications)



module.exports = router;
