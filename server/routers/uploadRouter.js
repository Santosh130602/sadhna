const express = require("express");
const { uploadFile } = require("../controllers/uploadedFile");

const {protect,admin} = require("../middleware/auth")
const router = express.Router()

// router.route('/import-movies').post(importMovies)

router.route('/').post(uploadFile)


module.exports = router;  