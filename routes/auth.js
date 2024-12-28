const express = require("express");
const router = express.Router();

// Define routes for authentication
router.post("/signup", (req, res) => {
    res.json({ message: "Signup endpoint" });
});

router.post("/login", (req, res) => {
    res.json({ message: "Login endpoint" });
});

module.exports = router;
