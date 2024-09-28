const express = require("express");
const { importMovies, getMovies, getMovieById, getTopRatedMovies, getRandomMovies, createMovieReview, UpDateMovies, daleteMovie, DeleteAllMovies, CreateNewMovie} = require("../controllers/MoviesController");
const {protect,admin} = require("../middleware/auth")
const router = express.Router()

router.route('/import-movies').post(importMovies)
router.route('/import-movies').get(getMovies)
router.route('/get-movie/:id').get(getMovieById)
router.route('/top-rated').get(getTopRatedMovies)
router.route('/random-movies').get(getRandomMovies)



// **************Private Routers**************
router.route('/:id/review').post(protect,createMovieReview)

// ****************** Admin Router *****************
router.route('/update-movies/:id').put(protect,admin,UpDateMovies)
router.route('/delete-movie/:id').delete(protect,admin,daleteMovie)
router.route('/delete-all').delete(protect,admin,DeleteAllMovies)
router.route('/create-movie').post(protect,admin,CreateNewMovie)

module.exports = router;  