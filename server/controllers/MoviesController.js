// ************ Public Controllers ************
// import all movies

const asyncHandler = require("express-async-handler")
const Movie = require("../models/MovieModel")
const { MoviesData } = require("../data/MovieData")

const importMovies = asyncHandler(async (req, res) => {
    // first we make sure our movies table is empty by delete all document

    await Movie.deleteMany({})
    // insert all movies from movie data
    const movies = await Movie.insertMany(MoviesData);
    res.status(201).json(movies);
})


// get all Movies

const getMovies = asyncHandler(async (req, res) => {
    try {
        // filter movies by category, time, language, rate, year and search
        const { category, time, language, rate, year, search } = req.query;
        let query = {
            ...(category && { category }),
            ...(time && { time }),
            ...(language && { language }),
            ...(rate && { rate }),
            ...(year && { year }),
            ...(search && { name: { $regex: search, $options: "i" } }),

        }

        // load more movies functionality
        const page = Number(req.query.pageNumber) || 1;
        const limit = 2;  // 2 movie per page
        const skip = (page - 1) * limit

        // find movies by query skip and limit
        const movies = await Movie.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const count = await Movie.countDocuments(query);

        // send response with movies and total number of movies

        res.json({
            movies,
            page,
            pages: Math.ceil(count / limit),  // total number of pages 
            totalMovies: count  // total number of movies
        });


    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// get movie by id

const getMovieById = asyncHandler(async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        // if movie found
        if (movie) {
            res.json(movie)
        }
        // if movie not found
        else {
            res.status(404);
            throw new Error("movie not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

// get toprated movies

const getTopRatedMovies = asyncHandler(async (req, res) => {
    try {
        const movie = await Movie.find({}).sort({ rate: -1 }).limit(10);
        // send top rated movie to client
        res.json(movie);

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// const gert random movies
const getRandomMovies = asyncHandler(async (req, res) => {
    try {
        // find random movies
        const movies = await Movie.aggregate([{ $sample: { size: 8 } }])
        // send rendom movie to client 
        res.json(movies)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})






// ************************** Private Controller *******************

// create movies review


const createMovieReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body;
    try {
        // find movie by id in the database 
        const movie = await Movie.findById(req.params.id);

        if (movie) {
            // Check if the user has already reviewed the movie
            const alreadyReviewed = movie.reviews.find(
                (r) => r.userId.toString() === req.user._id.toString()
            );
            if (alreadyReviewed) {
                res.status(400);
                throw new Error("You have already reviewed this movie");
            }

            // Create a new review object
            const review = {
                userName: req.user.fullName,
                userId: req.user._id,
                userImage: req.user.image,
                rating: Number(rating),
                comment,
            };

            // Push the new review to the reviews array
            movie.reviews.push(review);

            // Increment the number of reviews
            movie.numberOfReviews = movie.reviews.length;

            // Calculate the new rate
            movie.rate =
                movie.reviews.reduce((acc, item) => item.rating + acc, 0) /
                movie.reviews.length;

            // Save the updated movie in the database
            await movie.save();

            // Send a success response
            res.status(201).json({
                message: "Review added",
            });
        } else {
            res.status(404);
            throw new Error("Movie not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});


// ************** ADMIN CONTROLLER ******************

// update movie details
const UpDateMovies = asyncHandler(async (req, res) => {
    try {
        // get data from req body
        const { name, desc, image, titleImage, rate, numberOfReviews, category, time, language, year, video, casts } = req.body;

        // find movie by id
        const movie = await Movie.findById(req.params.id);

        if (movie) {
            // update movie
            movie.name = name || movie.name;
            movie.desc = desc || movie.desc;
            movie.image = image || movie.image;
            movie.titleImage = titleImage || movie.titleImage;
            movie.rate = rate || movie.rate;
            movie.numberOfReviews = numberOfReviews || movie.numberOfReviews;
            movie.category = category || movie.category;
            movie.time = time || movie.time;
            movie.language = language || movie.language;
            movie.year = year || movie.year;
            movie.video = video || movie.video;
            movie.casts = casts || movie.casts

            const updateMovie = await movie.save();
            res.status(201).json(updateMovie)
        } else {
            res.status(404)
            throw new Error("Movie not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

// delete movie
const daleteMovie = asyncHandler(async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        // if movie found delete
        if (movie) {
            await Movie.deleteOne({ _id: req.params.id });

            res.json({ message: "Movie removed" });
        } else {
            res.status(404)
            throw new Error("Movie not found")
        }

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

// delete all movies
const DeleteAllMovies = asyncHandler(async (req, res) => {
    try {
        await Movie.deleteMany({});
        res.json({ message: "All movies removed" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

// create new movies
const CreateNewMovie = asyncHandler(async (req, res) => {
    try {

        const {
            name,
            desc,
            image,
            titleImage,
            rate,
            numberOfReviews,
            category,
            time,
            language,
            year,
            video,
            casts
        } = req.body;

        const movie = new Movie({
            name,
            desc,
            image,
            titleImage,
            rate,
            numberOfReviews,
            category,
            time,
            language,
            year,
            video,
            casts,
            userId: req.user._id,
        })
        if (movie) {
            const createdMovie = await movie.save();
            res.status(201).json(createdMovie)
        } else {
            res.status(400);
            throw new Error("Invalid movie data")
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})


module.exports = {
    importMovies,
    getMovies,
    getMovieById,
    getTopRatedMovies,
    getRandomMovies,
    createMovieReview,
    UpDateMovies,
    daleteMovie,
    DeleteAllMovies,
    CreateNewMovie
};