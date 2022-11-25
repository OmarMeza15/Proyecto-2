const express = require('express');
const router = express.Router();
const Post = require("../models/Post.model");
const User = require('../models/User.model');


router.get("/post", (req, res) => {
    res.render("posts/post");
  });

router.get("/create", (req, res, next) => {
    res.render("posts/createPost", { currentUser: req.session.currentUser });
});

//crear un post
router.post("/create/:id", (req, res, next) => {
    const { title, country, date, text, image } = req.body;
    const { id } = req.params;
    console.log(req.body, req.params)
     
    Post.create({ title, country, date, text, image, author: id })
    .then((dbPost) => {
        return User.findByIdAndUpdate(id, {$push: {posts: dbPost._id }})
        
    })
    .then(() => res.redirect("/user/profile"))
    .catch(err => console.log(err));
        
    
    // try{
    //     const { title, country, date, text, image, author } = req.body;
    //     // console.log("this is the body", req.body)
        
    //     const postNew = await Post.create({ title, country, date, text, image, author })
    //     const pushComment = await User.findByIdAndUpdate(_id, { $push: { posts: postNew._id } })
    //     res.redirect("/user/profile")
    //     // return pushComment
    //     // console.log("nuevo post: ", postNew);
        
    // } catch(err){
    //     console.log(err);
    // } 
});


//actualizando post 
//localhost:3000/post/:postId/editPost
router.get("/post/:postId/editPost", async (req, res) => {
    try{
        const { postId } = req.params;
        const dataPost = await Post.findById(postId);
        // console.log(dataPost);
        res.render("posts/editPost", dataPost);
    }catch (err){
        console.log(err)
    }
});
//ruta para actualizar el post 

router.post("/post/:postId/editPost", async (req, res) => {
    console.log("Datos", req.body);
    const { postId } = req.params;
    const updatedPost = await Post.findByIdAndUpdate(postId, req.body, {
        new: true,
    });
    console.log("los datos del post --------->",updatedPost);
    res.redirect("/user/profile")
});

//ruta eliminar post
router.post("/post/:postId/delete", (req, res) => {
    const { postId } = req.params;
    Post.findByIdAndDelete(postId)
    .then(() => res.redirect("/user/profile"))
    .catch(console.log);
});


 //guardar data del post 

router.get("/post/:postId", async (req, res, next) => {
    try {
        const { postId } = req.params

        console.log("este es el primerddddd -----------> ", postId)
        const postInfo = await Post.findById(postId)
        .populate("_id")
        .populate("comments")
        console.log("este es el segusffff-----------> ", postInfo)
        res.render("posts/post", {fullPost: postInfo, currentUser: req.session.currentUser});
    } catch(err) {
        console.log(err);
    }
});




module.exports = router;