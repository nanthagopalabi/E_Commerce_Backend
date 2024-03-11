const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();

// Import routes
const routes = require("./route/routes.js");

// Set port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server started at port no. ${PORT}`);
    });
})
.catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
});

// Routes
app.use('/', routes);
