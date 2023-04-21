const fs = require('fs')
require('dotenv').config()

var axios = require('axios');

const BBALL_API = String(process.env.BBALL_API_KEY)
console.log(BBALL_API)

//const current_season =
var config = {
    method: 'get',
    url: "https://v1.basketball.api-sports.io/standings?league=12&season=2022-2023",
    headers: {
        'x-rapidapi-host': 'v1.basketball.api-sports.io',
        'x-rapidapi-key': BBALL_API
    }
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        var json = JSON.stringify(response.data);
        fs.writeFile('../client/react-app/src/jsons/standings.json', json, 'utf8', (err) => {
            // In case of an error throw err.
            if (err) throw err;
        });

    })
    .catch(function (error) {
        console.log(error);
    });