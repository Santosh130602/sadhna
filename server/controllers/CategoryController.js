const Categories = require("../models/CategoryModel")
const asyncHandler = require("express-async-handler")

// ********************* public controller **********
const getCategories = asyncHandler(async(req,res)=>{
    try{
        const categories = await Categories.find({});
        res.json(categories)

    }catch(error){
        res.status(400).json({message:error.message})
    }
})





// ********************* admin controller **********



// create new category by admin

const createCategory = asyncHandler(async(req,res)=>{
    try{
        const {title} = req.body;
         const category = new Categories({
             title,
         })
         const creatednewcategory = await category.save();
         res.status(201).json(creatednewcategory)
    }catch(error){
        res.status(400).json({message:error.message})
    }
})

// update category
const updateCategory = asyncHandler(async(req,res)=>{
    try{
        const category = await Categories.findById(req.params.id);

        if(category){
            category.title = req.body.title || category.title;
            const updatedcategory = await category.save();
            res.json(updatedcategory)
        }else{
            res.status(404).json({message:"category not found"});
        }
    }catch(error){
        res.status(400).json({message:error.message});
    }
})

// delete caegory
const deleteCategory = asyncHandler(async(req,res)=>{
    try{
        const category = await Categories.findById(req.params.id);

        if(category){
            // await category.remove();
            await Categories.deleteOne({ _id: req.params.id });
            res.json({message:"category removed"})
        }else{
            res.status(404).json({message:"category not found"})
        }
    }catch(error){
        res.status(400).json({message:error.message})
    }
})




module.exports = {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
};