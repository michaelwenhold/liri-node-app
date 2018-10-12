//Set any environment variables with the dotenv package
require("dotenv").config();

//Import from keys.js file
let keys = require("./keys.js");

//Spotify key from NPM
let spotify = require('node-spotify-api');



 
//var spotify = new Spotify({
//  id: <your spotify client id>,
//  secret: <your spotify client secret>
//});
 
//spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
 // if (err) {
 //   return console.log('Error occurred: ' + err);
 // }
 
//console.log(data); 
//});







//Access the keys information
//EXAMPLE #8 on instructions
//let spotify = new spotify(keys.spotify);
//let movieKey = keys.omdb.api_key;


//#9 Make it so liri.js can take in one of these commands
//concert-this
//spotify-this-song
//movie-this
//do-what-it-says