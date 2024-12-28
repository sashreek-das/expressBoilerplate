const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Import the MongoDB connection
require("./db"); // This ensures the DB connection is established

const app = express();

app.use(cors());
app.use(express.json());

const rootRouter = require("./routes/index"); // Correct path to index.js

app.get("/", (req, res) => {
    res.json({ message: "hello world" });
});

app.use("/api/v1/", rootRouter); // This is where the routes are used

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
