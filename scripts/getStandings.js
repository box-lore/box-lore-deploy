const fs = require('fs')
require('dotenv').config()

var axios = require('axios');

const mongoURI = `${process.env.DB_CONNECT}`;
const BBALL_API = `${process.env.BBALL_API_K_KEY}`;
//console.log(BBALL_API)

var config = {
    method: 'get',
    url: "https://v1.basketball.api-sports.io/standings?league=12&season=2022-2023",
    headers: {
        'x-rapidapi-host': 'v1.basketball.api-sports.io',
        'x-rapidapi-key': BBALL_API
    }
};

axios.request(config).then(function (response) {
    const postData = {
        title: "standings",
        content: response.data,
    }
    console.log(JSON.stringify(postData.content))
    axios.post('http://localhost:3001/createstandings', postData)
}).catch(function (error) {
    console.error(error);
});

//axios(config)
//    .then(function (response) {
//        console.log(JSON.stringify(response.data));
//        var json = JSON.stringify(response.data);
//        fs.writeFile('../client/react-app/src/jsons/standings.json', json, 'utf8', (err) => {
//            // In case of an error throw err.
//            if (err) throw err;
//        });
//
//    })
//    .catch(function (error) {
//        console.log(error);
//    }
//    });
