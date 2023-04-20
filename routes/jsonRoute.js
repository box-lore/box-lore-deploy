const express = require("express");
const router = express.Router();
const JsonModel = require("../models/jsonModel.js");

router.route("/create").post((req, res)=>{
    const title = req.body.title;
    const content = req.body.content;
    const jsonData = new JsonModel({
        title,
        content
    })

    jsonData.save();
});

module.exports = router;