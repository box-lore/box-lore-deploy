const mongoose = require("mongoose");

const StandingsSchema = {
    title: String,
    content: Array
}

const StandingsModel = mongoose.model("Standings", StandingsSchema)

module.exports = StandingsModel;