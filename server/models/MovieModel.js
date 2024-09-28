// const mongoose = require("mongoose");



// const reviewSchema = mongoose.Schema({
//     userName: { type: String, required: true },
//     userImage: { type: String },
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     rating: { type: Number, required: true },
//     comment: { type: String, required: true }
// }, { timestamp: true })






// const movieSchema = mongoose.Schema({
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     desc: {
//         type: String,
//         required: true
//     },
//     titleImage: {
//         type: String,
//         required: true
//     },
//     image: {
//         type: String,
//         required: true
//     },
//     category: {
//         type: String,
//         required: true
//     },
//     language: {
//         type: String,
//         required: true
//     },
//     year: {
//         type: Number,
//         required: true
//     },
//     time: {
//         type: Number,
//         required: true
//     },
//     video: {
//         type: String,

//     },
//     rate: {
//         type: Number,
//         required: true,
//         default: 0
//     },
//     numerOfReviews: {
//         type: Number,
//         required: true,
//         default: 0
//     },
//     reviews: [reviewSchema],
//     casts: [
//         {
//             name: { type: String, required: true },
//             image: { type: String, required: true }
//         }
//     ]


// }, {
//     timestamp: true
// })


// const Movie = mongoose.model("Movie", movieSchema);

// module.exports = Movie;




const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    userName: { type: String, required: true },
    userImage: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true } // Corrected: Use 'timestamps' instead of 'timestamp'
);

const movieSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    titleImage: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    video: {
      type: String,
    },
    rate: {
      type: Number,
      default: 0, 
    },
    numberOfReviews: {
      type: Number, 
      required: true,
      default: 0,
    },
    reviews: [reviewSchema],
    casts: [
      {
        name: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
  },
  { timestamps: true } 
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
