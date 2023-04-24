const express = require("express");
const router = express.Router();
const StandingsModel = require("../models/StandingsModel.js");

router.route("/createstandings").post((req, res)=>{
    const title = req.body.title;
    const content = req.body.content;
    const StandingsData = new StandingsModel({
        title,
        content
    })

    StandingsData.save();
});

module.exports = router;