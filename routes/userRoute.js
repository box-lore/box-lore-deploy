const express = require("express");
const router = express.Router();
const UserData = require("../models/userModel");



router.route("/createUser").post(async (req, res) => {
    const username = req.body.username;
    const age = req.body.age;
    const password = req.body.password;
    const securityquestion = req.body.securityquestion;

    // Check for existing username
    const  user = await UserData.findOne({ username });
    if(user){
        alert("Username already exists");
    }

    const userData = new UserData({
        username,
        age,
        password,
        securityquestion
    })

    userData.save();
    alert("User created Successfully");

});

router.route("/userdatas").get((req, res) => {
    UserData.find()
            .then(foundUser => res.json(foundUser))
});


module.exports = router;
