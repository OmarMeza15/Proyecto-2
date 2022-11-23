const Country = require("../models/Country.model");

const router = require("express").Router();

const Post = require("../models/Post.model");

//GET para ingresar /user/profile
router.get("/profile", (req, res) => {
    Post.find()
        .then((PostDB) => res.render("user/profile", { currentUser: req.session.currentUser, post: PostDB }))
        .catch((err) => console.log(err));
});
//GET ppara ingresa a /user/newCountry
router.get("/newCountry", (req, res, next) => {
    res.render("user/newCountry", { currentUser: req.session.currentUser });
});

router.post("/newCountry", (req, res, next) => {
    const { countryName, info, flagImg } = req.body;

   return Country.create({ countryName, info, flagImg })
    .then(() => res.render("user/newCountry", { currentUser: req.session.currentUser }))
    .catch((err) => console.log(err));

})



module.exports = router;