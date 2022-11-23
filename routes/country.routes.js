const router = require("express").Router();
const Country = require('../models/Country.model');
const Post = require("../models/Post.model");

//GET para ingresa /country/catalogue
router.get("/catalogue", async (req, res) => {
    try {
        const { country = "" } = req.query;
        // const { country, title, image } = req.body;
        const data = await Country.findOne({countryName: country.toLowerCase()})
        res.render("country/catalogue", { data }) 
    }
    catch (err) {
        console.log(err)
    }
    
});

//GET para ingresa /country/eachCountry
router.get("/eachCountry", async (req, res) => {
    try{
        const { country = "" } = req.query;
        console.log(req.query)
        const data = await Country.findOne({countryName: country.toLowerCase()})
        console.log(data)
        const posts = await Post.find({country: country.toLowerCase()})
        console.log(posts)
        res.render("country/eachCountry", { currentUser: req.session.currentUser, data, posts })
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