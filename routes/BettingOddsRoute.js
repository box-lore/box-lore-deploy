const express = require("express");
const router = express.Router();
const BettingOddsModel = require("../models/BettingOddsModel.js");

router.route("/createbettingodds").post((req, res)=>{
    const content = req.body;
    const BettingOddsData = new BettingOddsModel({
        content
    })

    BettingOddsData.save();
});

module.exports = router;