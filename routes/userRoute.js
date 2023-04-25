const express = require("express");
const router = express.Router();
const UserData = require("../models/userModel");

router.route("/createUser").post((req, res) => {
    const username = req.body.username;
    const age = req.body.age;
    const password = req.body.password;
    const securityquestion = req.body.securityquestion;

    const userData = new UserData({
        username,
        age,
        password,
        securityquestion
    })

    userData.save();
});


module.exports = router;
