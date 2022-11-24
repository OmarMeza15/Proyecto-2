const express = require('express');
const router = express.Router();
const Post = require("../models/Post.model");

router.get("/create", (req, res, next) => {
    res.render("posts/createPost", { currentUser: req.session.currentUser });
});


router.post("/create", (req, res, next) => {
    const { title, country, date, text, image, author } = req.body;
    console.log("this is the body", req.body)
    
    Post.create({ title, country, date, text, image, author })
    .then(() => res.redirect("post"))
    .catch((err) => console.log(err))
});

router.get("/post/:postId", async (req, res, next) => {
    try {
        const { postId } = req.params

        console.log("-----------> ", postId)
        const postInfo = await Post.findById(postId);
        console.log("-----------> ", postInfo)
        res.render("posts/post", {fullPost: postInfo, currentUser: req.session.currentUser});
    } catch(err) {
        console.log(err);
    }
});

module.exports = router;