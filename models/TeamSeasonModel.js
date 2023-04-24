const mongoose = require("mongoose");

const TeamSeasonSchema = {
    title: String,
    content: Array
}

const TeamSeasonModel = mongoose.model("TeamSeason", TeamSeasonSchema)

module.exports = TeamSeasonModel;