

function getMovie() {

    var movie = {
        //name: "goddamn best movie"
        name: $("#omdbSearch").val()
    }


    axios.post("/get-movie", movie).then((res) => {
        console.log(res)

        var newCard = `
        <div class="card" style="width: 18rem;">
        <img src="${res.data.Poster}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${res.data.Title}</p>
          <p class="card-text">${res.data.Genre}</p>
          <p class="card-text">${res.data.Plot}</p>
        </div>
      </div>`;

      $("#movie-card-holder").append(newCard);
    });

    
}
function getBands() {

    var band = {
        //name: "goddamn best band"
        name: $("#bandsSearch").val()

    }
    console.log(band);

    axios.post("/get-bands", band).then((res) => {
        console.log(res)

        var newCard = `
        <div class="card" style="width: 18rem;">
        <img src="${res.data.Poster}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${res.data[0].datetime}</p>
          <p class="card-text">${res.data[0].venue}</p>
          
        </div>
      </div>`;

      $("#band-card-holder").append(newCard);
    })
}

function getSong() {

    var song = {
        //name: "goddamn best song"
        name: $("#spotifySearch").val().trim()

    }

    axios.post("/get-songs", song).then((res) => {
        console.log(res)


        var newCard = `
        <div class="card" style="width: 18rem;">
        <img src="${res.data.tracks.items[0].album.images[0].url}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${res.data.tracks.items[0].artists[0].name}</p>
          <p class="card-text">${res.data.tracks.items[0].album.name}</p>
          <p class="card-text">${res.data.tracks.items[0].album.track_number}</p>
        </div>
      </div>`;

      $("#song-card-holder").append(newCard);
    })
}

$("#bSearch").on('click', function () {
    getBands();
    
});


$("#sSearch").on('click', function () {
    getSong();

});


$("#mSearch").on('click', function () {
    getMovie();


})


//var newCard = $("<div>");
//
//// jQuery alternative to: newDiv.textContent = "A pleasure to meet you!";
//newCard.text("Test");
//
//// jQuery alternative to: document.querySelector("#empty-div").appendChild(newDiv);
//$("#card-holder").append(newCard);
//
//// If we need to apply some CSS, we can quickly do so, using the jQuery ".attr" method.
//newCard.attr("class", "card card-body");