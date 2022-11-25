const router = require("express").Router();
const Country = require('../models/Country.model');
const Post = require("../models/Post.model");

//GET para ingresa /country/catalogue
router.get("/catalogue", async (req, res) => {
    try {
        const { country = "" } = req.query;
        // const { country, title, image } = req.body;
        const data = await Country.findOne({countryName: country.toLowerCase()})
        const postDB = await Post.find().populate("_id");
        console.log("Este es el console de catalogue 333333-----", postDB);
        res.render("country/catalogue", { currentUser: req.session.currentUser, post: postDB })
        // res.render("country/eachCountry", { currentUser: req.session.currentUser, data, post: postDB }) 
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