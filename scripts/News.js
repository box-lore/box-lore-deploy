const fs = require('fs');
const dotenv = require("dotenv");
const axios = require('axios');

dotenv.config();

const TYL_API = `${process.env.TYL_API}`;

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
  params: {team: 'lakers'},
  headers: {
    'X-RapidAPI-Key': TYL_API,
    'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
      const postData = {
        title: "News",
        content: response.data,
      }
      axios.post('http://localhost:3001/createNews', postData)
  }).catch(function (error) {
      console.error(error);
});
