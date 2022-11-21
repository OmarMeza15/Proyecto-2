const router = require("express").Router();

//GET para ingresa /country/catalogue
router.get("/catalogue", (req, res) => {
    res.render("country/catalogue")
});

//GET para ingresa /country/eachCountry
router.get("/eachCountry", (req, res) => {
    res.render("country/eachCountry")
});

module.exports = router;