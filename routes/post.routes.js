const express = require('express');
const router = express.Router();
const Post = require("../models/Post.model");

// Route for rendering the view to create a post
router.get("/create", (req, res, next) => {
    res.render("posts/createPost");
});

// 
router.post("/create", (req, res, next) => {
    const { title, country, date, text, image } = req.body;
    console.log("this is the body", req.body)
    
    Post.create({ title, country, date, text, image })
    .then(() => res.redirect("post"))
    .catch((err) => console.log(err))
});

router.get("/post", (req, res, next) => {
    res.render("posts/post");
});

module.exports = router;