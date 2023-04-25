const mongoose = require("mongoose");

const NewsSchema = {
    title: String,
    content: Array
}

const NewsModel = mongoose.model("News", NewsSchema)

module.exports = NewsModel;