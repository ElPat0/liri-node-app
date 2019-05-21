

function getMovie(){

    var movie = {
        //name: "goddamn best movie"
        name: $("#omdbSearch").val()
    }
    
    
    axios.post("/get-movie", movie).then((res) => {
        console.log(res)
    })
}
function getBands(){

    var band = {
        //name: "goddamn best band"
        name: $("#bandsSearch").val()

    }
    console.log(band);

    axios.post("/get-bands", band).then((res) => {
        console.log(res)
    })
}

function getSong(){

    var song = {
        //name: "goddamn best song"
        name: $("#spotifySearch").val().trim()

    }

    axios.post("/get-songs", song).then((res) => {
        console.log(res)
    })
}

$("#bSearch").on('click' , function(){
    getBands();
});


$("#sSearch").on('click' , function(){
    getSong();

});


$("#mSearch").on('click' , function(){
    getMovie();
    

})



