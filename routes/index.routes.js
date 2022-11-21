const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/home", (req, res, next) => {
  res.render("home");
});

router.get("/create", (req, res, next) => {
  res.render("posts/createPost");
});

router.get("/post", (req, res, next) => {
  res.render("posts/post");
});

module.exports = router;
