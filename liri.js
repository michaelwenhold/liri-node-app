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

// Take two arguments.
// The first will be the action (i.e. "spotify-this-song")
// The second will be the value (i.e. "name of the song being searched for")
let action = process.argv[2];
let value = process.argv[3];


// The switch-case will direct which function gets run.
switch (action) {
    case "spotify-this-song":
        if (value === null) {
            console.log("You need to enter a song title.");
        }
        else {
            song(value);
        }

        break;
}

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
