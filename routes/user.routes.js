const Country = require("../models/Country.model");

const router = require("express").Router();

//GET para ingresar /user/profile
router.get("/profile", (req, res) => {
    res.render("user/profile", { currentUser: req.session.currentUser });
});

router.get("/newCountry", (req, res, next) => {
    res.render("user/newCountry", { currentUser: req.session.currentUser });
});

router.post("/newCountry", (req, res, next) => {
    const { countryName, info, flagImg } = req.body;

    Country.create({ countryName, info, flagImg })
    .then(() => console.log("success") )
    .catch((err) => console.log(err));
})

module.exports = router;