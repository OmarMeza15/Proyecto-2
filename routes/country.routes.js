const router = require("express").Router();

//GET para ingresa /country/catalogue
router.get("/catalogue", (req, res) => {
    res.render("country/catalogue", { currentUser: req.session.currentUser })
});

//GET para ingresa /country/eachCountry
router.get("/eachCountry", (req, res) => {
    res.render("country/eachCountry", { currentUser: req.session.currentUser })
});

module.exports = router;