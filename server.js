const express = require ('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const TeamSeasonModel = require('./models/TeamSeasonModel.js')
dotenv.config()

const app = express()
const port = 3001;

app.use(cors());
app.use(express.json());
app.use("/", require("./routes/TeamSeasonRoute.js"));

const mongoURI = `${process.env.DB_CONNECT}`;
mongoose.connect(mongoURI).then(() => console.log('Connected to database'));

app.get('/', (req, res) => {
    res.send("Server port 3001 test")
})

app.listen(3001, () => {
    console.log("Server running on port 3001");
})

app.get('/getteamseason/:season', (req, res) => {
    TeamSeasonModel.findOne({ season: req.params.season })
      .then(products => res.json(teamseasonmodels))
      .catch(err => res.status(500).send(err));
});
