const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// MongoDB connection URI from environment variables
const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
})
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

// User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
});

// Question Schema
const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
});

// Models
const User = mongoose.model("User", userSchema);
const Question = mongoose.model("Question", questionSchema);

// Export models
module.exports = {
    User,
    Question
};
