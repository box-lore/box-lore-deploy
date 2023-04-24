const express = require ('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const app = express()
const port = 3001;

app.use(cors());
app.use(express.json());
app.use("/", require("./routes/TeamSeasonRoute.js"));
app.use("/", require("./routes/StandingsRoute.js"));

// Using mongoose to connect to MongoDB box-lore collection
const mongoURI = `${process.env.DB_CONNECT}`;
mongoose.connect(mongoURI).then(() => console.log('Connected to database'));

// Send route for Team Season Statistics
app.use("/", require("./routes/TeamSeasonRoute.js"));
// Send route for Betting Odds
app.use("/", require("./routes/BettingOddsRoute.js"));

app.listen(3001, () => {
    console.log("Server running on port 3001");
})

// Get route for Team Season Statistics models in MongoDB
const TeamSeason = require('./models/TeamSeasonModel.js')
app.get('/getteamseason/:title', async (req, res) => {
    try{
        const { title } = req.params;
        const season = await TeamSeason.find({ title });
        res.json(season);
        // console.log(res.json(season));
    }
    catch (error){
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

