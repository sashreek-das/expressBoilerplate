const express = require("express");

const router = express.Router();

const authRouter = require("./auth"); // Ensure these are correct file paths
const questionRouter = require("./questions");

router.use("/auth", authRouter); // This should be a middleware function
router.use("/questions", questionRouter); // This should be a middleware function

module.exports = router;
