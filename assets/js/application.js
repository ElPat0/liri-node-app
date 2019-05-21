

function getMovie(){

    var movie = {
        //name: "goddamn best movie"
        name: $("#omdbSearch").val
    }
    
    
    axios.post("/get-movie", movie).then((res) => {
        console.log(res)
    })
}
function getBands(){

    var band = {
        //name: "goddamn best band"
        name: $("#bandSearch").val

    }

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

$("#bandSearch").click(function(){
    getBands();
});


$("#spotifySearch").click(function(){
    getSong();
});


$("#omdbSearch").click(function(){
    getMovie();
})
//movie search function
getMovie();
//bands call function;
getBands();
//spotify call function
getSong();



