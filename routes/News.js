const express = require("express");
const router = express.Router();
const NewsModel = require("../models/News.js");

router.route("/createNews").post((req, res)=>{
    const title = req.body.title;
    const content = req.body.content;
    const NewsData = new NewsModel({
        title,
        content
    })

    NewsData.save();
});

module.exports = router;