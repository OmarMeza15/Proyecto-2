const router = require("express").Router();
const Country = require('../models/Country.model');
const Post = require("../models/Post.model");

//GET para ingresa /country/catalogue
router.get("/catalogue", (req, res) => {
    Post.find()
    .then((PostDB) => res.render("country/catalogue", { currentUser: req.session.currentUser, post: PostDB }))
    .catch((err) => console.log(err));
});

//GET para ingresa /country/eachCountry
router.get("/eachCountry", async (req, res) => {
    try{
        const { country = "" } = req.query;
        console.log(req.query)
        const data = await Country.findOne({countryName: country.toLowerCase()})
        console.log(data)
        res.render("country/eachCountry", { currentUser: req.session.currentUser, data })
    }
    catch (err) {
        console.log(err)
    }
});

// router.post("eachCountry",)

module.exports = router;