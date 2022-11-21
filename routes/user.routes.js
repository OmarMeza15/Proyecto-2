const router = require("express").Router();

//GET paara ingresar /user/profile
router.get("/profile", (req, res) => {
    res.render("user/profile", { currentUser: req.session.currentUser});
});

module.exports = router;