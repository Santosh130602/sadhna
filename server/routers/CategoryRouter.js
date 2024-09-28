const express = require("express");
const { getCategories, createCategory, updateCategory, deleteCategory } = require("../controllers/CategoryController");
const {protect,admin} = require("../middleware/auth")
const router = express.Router()



// **************** Public Router *******************

router.route('/category').get(getCategories)



// **************** Admin Router *******************

router.route('/create-category').post(protect,admin,createCategory)
router.route('/update-category/:id').put(protect,admin,updateCategory)
router.route('/delete-category/:id').delete(protect,admin,deleteCategory)

module.exports = router;  
