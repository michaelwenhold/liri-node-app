//Set any environment variables with the dotenv package
require("dotenv").config();

//Import from keys.js file
let keys = require("./keys.js");

//Spotify key from NPM
let Spotify = require('node-spotify-api');

//Get API key from .env
let spotify = new Spotify(keys.spotify)

// Load the fs package
let fs = require("fs");



//Function for Spotify song search
function song(song) {
    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        let results = data.tracks.items

        for (let i = 0; i < results.length; i++) {
            let info = (
                "\nArtists: " + results[i].artists[0].name +
                "\nSong: " + track[i].name +
                "\nSample: " + track[i].preview_url +
                "\nAlbum: " + track[i].album.name 
            )
            console.log(info)
        }
    });

};




//Access the keys information
//EXAMPLE #8 on instructions
//let movieKey = keys.omdb.api_key;


//#9 Make it so liri.js can take in one of these commands
//concert-this
//spotify-this-song
//movie-this
//do-what-it-says