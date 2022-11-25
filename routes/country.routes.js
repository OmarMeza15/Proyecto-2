const router = require("express").Router();
const Country = require('../models/Country.model');
const Post = require("../models/Post.model");

//GET para ingresa /country/catalogue
router.get("/catalogue", async (req, res) => {
    try {
        const { country = "" } = req.query;
        const data = await Country.findOne({countryName: country.toLowerCase()})
        const postDB = await Post.find()
        const countries = await Country.find()
        res.render("country/catalogue", { currentUser: req.session.currentUser, post: postDB, countries })
        res.render("country/eachCountry", { currentUser: req.session.currentUser, data, post: postDB }) 
    }
    catch (err) {
        console.log(err)
    }
    
});

//GET para ingresa /country/eachCountry
router.get("/eachCountry", async (req, res) => {
    try{
        const { country = "" } = req.query;
        console.log("-------->>>>", req.query)
        const data = await Country.findOne({countryName: country.toLowerCase()})
        console.log("this is the country info", data)
        const posts = await Post.find({country: country.toLowerCase()})
        console.log(posts)
        const countries = await Country.find()
        res.render("country/eachCountry", { currentUser: req.session.currentUser, data, posts, countries })
    }
    catch (err) {
        console.log(err)
    }
});

// router.post("/eachCountry", async (req, res) =>{
//     try{
//         const { country } = req.query;
//         console.log("---------------->" , req.query)
//         const dataPost = await Post.findOne({country: country.toLowerCase()})
//         console.log(dataPost)
//         res.redirect("country/eachCountry", { currentUser: req.session.currentUser, dataPost })
//     }
//     catch (err) {
//         console.log(err)
//     }
// }); 
// // router.post("eachCountry",)

module.exports = router;