const express = require('express');
const router = express.Router();

router.get("/home", (req, res, next) => {
    res.render("startPages/home", { currentUser: req.session.currentUser });
});

router.get("/about", (req, res, next) => {
    res.render("startPages/about", { currentUser: req.session.currentUser });
});

module.exports = router;