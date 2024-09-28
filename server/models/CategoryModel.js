

const mongoose = require("mongoose");

const CategoriesSchema = mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
},
  { timestamps: true } 
);

const Categories = mongoose.model("Categories", CategoriesSchema);

module.exports = Categories;
