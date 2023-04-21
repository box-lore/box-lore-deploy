const express = require("express");
const router = express.Router();
const TeamSeasonModel = require("../models/TeamSeasonModel.js");

router.route("/createteamseason").post((req, res)=>{
    const title = req.body.title;
    const content = req.body.content;
    const TeamSeasonData = new TeamSeasonModel({
        title,
        content
    })

    TeamSeasonData.save();
});

module.exports = router;