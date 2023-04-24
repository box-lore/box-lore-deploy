const mongoose = require("mongoose");

const BettingOddsSchema = {
    content: Array
}

const BettingOddsModel = mongoose.model("BettingOdds", BettingOddsSchema)

module.exports = BettingOddsModel;