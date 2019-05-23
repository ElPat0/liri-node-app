

function getMovie() {

    var movie = {
        //name: "goddamn best movie"
        name: $("#omdbSearch").val()
    }


    axios.post("/get-movie", movie).then((res) => {
        console.log(res)
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
    })
}

function getSong() {

    var song = {
        //name: "goddamn best song"
        name: $("#spotifySearch").val().trim()

    }

    axios.post("/get-songs", song).then((res) => {
        console.log(res)
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

    //console.log(omdbSearch.val);
    var newCard = $("<div>");

    newCard.attr("class", "card card-body");


//   <div class="card" style="width: 18rem;">
// <img src="..." class="card-img-top" alt="...">
// <div class="card-body">
//   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// </div>
///div>

    
    var cardTitle = $("<p>");
    cardTitle.attr("id", "cardTitleText");
    cardTitle.text =  $("#omdbSearch").val().trim();
    //newCard.append(CardTitle);
    $("#cardTitleText").append(newCard);

    
    $("#card-holder").append(newCard);

    
    

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