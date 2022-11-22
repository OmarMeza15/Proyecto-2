const express = require('express');
const router = express.Router();
const Post = require("../models/Post.model");

router.get("/create", (req, res, next) => {
    res.render("posts/createPost");
});


router.post("/create", (req, res, next) => {
    const { title, country, date, text, image } = req.body;
    
    Post.create({ title, country, date, text, image })
    .then((Post) => res.redirect("posts/post", Post))
    .catch((err) => console.log(err))
});

router.get("/post", (req, res, next) => {
    res.render("posts/post");
});

module.exports = router;