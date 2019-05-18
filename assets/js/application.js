

function getMovie(){

    var movie = {
        name: "best movie ever"
        //name: $(userStuff).val
    }
    
    
    axios.post("/get-movie", movie).then((res) => {
        console.log(res)
    })
}
function getBands(){

    var band = {
        name: "goddamn best band"
    }

    axios.post("/get-bands", band).then((res) => {
        console.log(res)
    })
}

getMovie();
//getBands();

//spotify call function



//spotify
//   ID = de6df564cf50424d91bef44189a517a8
//   Secret = e98977fafb2e494db7e730395ae90b5c
//   Herokuvar = SPOTIFY-KEY