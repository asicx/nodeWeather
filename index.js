const request = require('request');
const argv = require('yargs').argv;
require('dotenv').config();


let apiKey = 'process.env.API_KEY';
let city = argv.c || 'Bloomington';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

request(url, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      let weather = JSON.parse(body)
      let message = `It's ${weather.main.temp}° in ${weather.name}!`;
      console.log(message);
    }
  });
