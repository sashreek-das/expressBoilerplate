const express = require("express");
const router = express.Router();

// Define routes for questions
router.get("/", (req, res) => {
    res.json({ message: "Get all questions" });
});

router.get("/:id", (req, res) => {
    res.json({ message: `Get question with ID ${req.params.id}` });
});

module.exports = router;
