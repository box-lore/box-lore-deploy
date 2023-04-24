const fs = require('fs');
const dotenv = require("dotenv");
const axios = require('axios');

dotenv.config();

const BBALL_API = `${process.env.BBALL_API}`;

const options = {
    method: 'GET',
    url: 'https://odds.p.rapidapi.com/v4/sports/basketball_nba/odds',
    params: {
      regions: 'us',
      oddsFormat: 'decimal',
      markets: 'h2h,spreads',
      dateFormat: 'iso'
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': BBALL_API,
      'X-RapidAPI-Host': 'odds.p.rapidapi.com'
    }
};
  
axios.request(options).then(function (response) {
    const postData = {
      content: response.data,
    }
    axios.post('http://localhost:3001/createbettingodds', postData)
}).catch(function (error) {
    console.error(error);
});
