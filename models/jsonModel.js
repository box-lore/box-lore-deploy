const mongoose = require("mongoose");

const jsonSchema = {
    title: String,
    content: Array
}

const JsonModel = mongoose.model("JsonModel", jsonSchema)

module.exports = JsonModel;