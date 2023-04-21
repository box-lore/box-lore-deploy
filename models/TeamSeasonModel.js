const mongoose = require("mongoose");

const TeamSeasonSchema = {
    title: String,
    content: Array
}

const TeamSeasonModel = mongoose.model("TeamSeasonModel", TeamSeasonSchema)

module.exports = TeamSeasonModel;