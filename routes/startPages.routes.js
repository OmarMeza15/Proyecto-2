const express = require('express');
const router = express.Router();

router.get("/home", (req, res, next) => {
    res.render(("startPages/home"));
});

router.get("/about", (req, res, next) => {
    res.render(("startPages/about"));
});

module.exports = router;