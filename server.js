
//express
const express = require('express');

const path = require("path");

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




//we make our api route and it is a post request
app.post("/get-movie",(req,res)=>{

// var test=["test", "test"]
    console.log(req.body);

// var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=HIqQtSoyCccofN3yGM5dSVHpNY0gyZU2";
//----------------//
//---OMBD Api---
var queryURL = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";   
var queryURL = `https://www.omdbapi.com/?t="${req.body.title}&y=&plot=short&apikey=${process.env.OMDB_KEY}`;   

//-------------------//
    
    axios.get(queryURL).then((data)=>{
       console.log(data.data)
       res.json(data.data)
    })
   //-------Bands API----------//
   //var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    // res.json(test)
});

//
app.post("/get-bands",(req,res)=>{

    console.log(req.body);
    res.json("got-bands");

    //axios.get(queryURL).then((data)=>{
    //    console.log(data.data)
    //    res.json(data.data)
    // })

});


app.post("/get-songs",(req,res)=>{

    console.log(req.body);
    res.json("got-songs");


    //axios.get(queryURL).then((data)=>{
    //    console.log(data.data)
    //    res.json(data.data)
    // })

});