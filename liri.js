//Set any environment variables with the dotenv package
js
require("dotenv").config();

//Import from keys.js file
let keys = require("./keys.js");

//Access the keys information
//EXAMPLE #8 on instructions
//let spotify = new spotify(keys.spotify);
//let movieKey = keys.omdb.api_key;


//#9 Make it so liri.js can take in one of these commands
//concert-this
//spotify-this-song
//movie-this
//do-what-it-says

let omdbApi = require('omdb-client');
 
let params = {
    apiKey: "https://www.omdbapi.com/?t=" + movieTitles + "&plot=short&apikey=trilogy",
    title: 'Terminator',
    year: 2012
}
omdbApi.get(params, function(err, data) {
    // process response...
});