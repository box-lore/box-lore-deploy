const mysql = require('mysql')
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
app.use("/", require("./routes/jsonRoute.js"));

const mongoURI = `${process.env.DB_CONNECT}`;
mongoose.connect(mongoURI);

const boxDB = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'boxDB',
});

app.get('/', (req, res) => {
    res.send("Server port 3001 test")
})

app.listen(3001, () => {
    console.log("Server running on port 3001");
})
