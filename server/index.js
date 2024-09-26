const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const bodyParser = require("body-parser");
const path = require("path");
const database = require("./config/database");

const userRouter = require("./routers/UserRouter");
const paymentRoutes = require("./routers/paymentRoute");
const { errorHandler } = require("./middleware/errorMiddleware");

// Initialize the Express app
const app = express();

dotenv.config();



// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DB connection
database.connect()
  

// API health check
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Routes
app.use("/api/users", userRouter);
app.use("/api/payment", paymentRoutes);


// Error handler middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`App is running at PORT ${PORT}`.green.underline.bold);
});




