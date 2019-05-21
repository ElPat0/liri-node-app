
//express
const express = require('express');

const path = require("path");

//requiring the .env file for api keys
require('dotenv').config();

//we make an instantiation of express
const app = express();
const axios = require("axios");

const PORT = process.env.PORT || 3000;


//this is very important to have for making api calls
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('assets'))








app.listen(PORT, () => {
    // console.log(process.env.NODE_ENV)
    console.log(`port listening on port ${PORT}`);
})


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// app.get('/home', function(req, res) {
//     res.sendFile(path.join(__dirname + '/home.html'));
// });



//   OMDB
//we make our api route and it is a post request
app.post("/get-movie",(req,res)=>{

// var test=["test", "test"]
    console.log(req.body);


var queryURL = `https://www.omdbapi.com/?t=${req.body.name}&y=&plot=short&apikey=${process.env.OMDB_KEY}`;   


    
    axios.get(queryURL).then((data)=>{
       console.log(data.data)
       res.json(data.data)
    })
});




//   Bands
app.post("/get-bands",(req,res)=>{

    var queryURL = `https://rest.bandsintown.com/artists/${req.body.name}/events?app_id=${process.env.BANDS_KEY}`;


    axios.get(queryURL).then((data)=>{
        console.log(data.data)
        res.json(data.data)
     })

});
// Spotify



app.post("/get-songs",(req,res)=>{
////this api doesnt seem to play well with syntax 
//    //var queryURL = "https://api.spotify.com/v1/artists/$" + ${req.query.name} + "/albums?album_type=SINGLE&offset=20&limit=10";
//    var queryURL = "https://api.spotify.com/v1/artists/${req.query.name}/albums?album_type=SINGLE&offset=20&limit=10";
//
//
//    console.log(req.body);
//    res.json("got-song");
//
//


var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
    // should these be listed here, or referenced in the .env file in some way? quotes needed?
  id: 'de6df564cf50424d91bef44189a517a8',
  secret: 'e98977fafb2e494db7e730395ae90b5c',
});
 
spotify
//   req.body.name
  .search({ type: 'track', query: req.body.name })
  .then(function(response) {
    console.log(response);



    res.json(response);

   })


 

});


// this requirement is preventing the localhost server from running //fixed//
//ar Spotify = require('node-spotify-api');
//
//ar spotify = new Spotify({
//   // should these be listed here, or referenced in the .env file in some way?
// id: 'de6df564cf50424d91bef44189a517a8',
// secret: 'e98977fafb2e494db7e730395ae90b5c'
//);
//
//potify
// .search({ type: 'track', query: 'All the Small Things' })
// .then(function(response) {
//   console.log(response);
// })
// .catch(function(err) {
//   console.log(err);
// });