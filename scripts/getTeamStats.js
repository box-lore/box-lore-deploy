const fs = require('fs');
const dotenv = require("dotenv");
const axios = require('axios');

dotenv.config();

const mongoURI = `${process.env.DB_CONNECT}`;
const BBALL_API = `${process.env.BBALL_API}`;

const importData = async () => {
  try {
    await Freelancers.create(data)
    console.log('data successfully imported')
    // to exit the process
    process.exit()
  } catch (error) {
    console.log('error', error)
  }
}

const options = {
  method: 'GET',
  url: 'https://nba-team-stats.p.rapidapi.com/teamStats',
  params: {leagueYear: '2022'},
  headers: {
    'X-RapidAPI-Key': BBALL_API,
    'X-RapidAPI-Host': 'nba-team-stats.p.rapidapi.com'
  }
};
  
axios.request(options).then(function (response) {
      const postData = {
        title: options.params.leagueYear,
        content: response.data.stats,
      }
      axios.post('http://localhost:3001/createteamseason', postData)
  }).catch(function (error) {
      console.error(error);
});
