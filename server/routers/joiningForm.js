// routes/internshipRoutes.js

const express = require("express");
const router = express.Router();
// const upload = require("../middleware/upload"); // Multer middleware
const { createInternshipApplication, registerVayamParticipant } = require("../controllers/joiningForm");



router.route('/internship-register').post(createInternshipApplication)
router.route('/vayam-register').post(registerVayamParticipant)


module.exports = router;
