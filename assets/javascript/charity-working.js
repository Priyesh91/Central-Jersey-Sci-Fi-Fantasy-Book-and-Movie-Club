
// Jordan
// Declare a Book1 variable that will have the data calling the present book. As of this moment, the author data is only there in case we need Jason needs it for a future book if he needs to add it to the query if iDreamBooks doesn't access the right url with just a query of the title
var Book1 = {
  title: "Station+Eleven",
  author: "Emily+St+John+Mandel"
}
console.log(Book1);

$(document).ready(function() {

  function displayBook1Review() {
    //I changed the queryURL http to https below b/c of an insecure XMLHttpRequest error
    var queryURL = "https://idreambooks.com/api/books/reviews.json?q=" + Book1.title + "&key=36ecbc8d8618c9f56345cf3e322fa1355b25fc32"
    console.log(queryURL);
    console.log(Book1.title);
    console.log(Book1.author);
    //make the ajax call to the iDreamBooks API
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log("The response to the ajax call is below");
      console.log(response);
      $("#iDB-preview").prepend(`iDreamBooks Rating: ${response.book.rating}%<br><br>`);
      $("#iDB-preview").append(response.book.critic_reviews[0].snippet);
      $("#iDB-preview").append(`<br><br>Source: ${response.book.critic_reviews[0].source}`);
      var reviewLink = response.book.critic_reviews[0].review_link;
      $("#iDB-preview").append($("<br><a href='" + reviewLink + "'>Click here for the full review</a>"));
      //Now I just need to figure out how to make the variable reviewLink get printed to the page as a link instead of plain text
    })
  }

  displayBook1Review(Book1);

});
// Jordan





// <!-- Jason -->
  var MeetupAPISignedNextMeetupKey = "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=Central-Jersey-Sci-Fi-Fantasy-Book-and-Movie-Club&page=200&fields=&order=time&desc=false&status=upcoming&sig_id=3331796&sig=4e946097cff58f9b643141d9dc9b3d33b2bb73ce";

  var corsURL = `https://cors-anywhere.herokuapp.com/${MeetupAPISignedNextMeetupKey}`;

  $.ajax({
    url: corsURL,
    method: "GET"
    }).then(function(response) {
    console.log(response);
    var meetings = response;
    console.log(meetings.results[0].name);
    }); 


// <!-- Jason end -->

// <!-- Jordan-->


// <!-- Jordan-->




// <!-- priyesh -->


//-------Start----Priyesh Submit A READ BUTTON AND FIREBASE CODE---------
$(document).ready(function () {

  // Initialize Firebase
  //priyesh firebase test project key, on final submit change to Jason's information as he will be using it periodically
  var config = {
    apiKey: "AIzaSyClgcbH2St3fS0SxAAivW6ts5PS8rTlMGY",
    authDomain: "test-project1-718de.firebaseapp.com",
    databaseURL: "https://test-project1-718de.firebaseio.com",
    projectId: "test-project1-718de",
    storageBucket: "test-project1-718de.appspot.com",
    messagingSenderId: "83784774921"
  };
  firebase.initializeApp(config);

  // save firebase database reference
  var database = firebase.database();
  // add event listener for form submit
  $("#submit-btn").on("click", function (event) {
    event.preventDefault();

    var userData = {
      name: $("#name-input").val().trim(),
      goodreadsUsername: $("#goodreads-username-input").val().trim(),
      meetupUsername: $("#meetup-username-input").val().trim(),
      bookSuggestion: $("#booksuggestion-input").val().trim(),
      
    };

    database.ref().push(userData);

    //clear out values after submit
    $("#name-input").val("");
    $("#goodreads-username-input").val("");
    $("#meetup-username-input").val("");
    $("#booksuggestion-input").val("");
    $("#nextBkMtg").val("");
  });
});

// <!-- Charity -->
$(document).ready(function() {

  // set up variable to store response
  var meetings = "";
  var meetupName = "";
  // variable for mettup secure key for next meeting 
  var MeetupAPISignedNextMeetupKey = "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=Central-Jersey-Sci-Fi-Fantasy-Book-and-Movie-Club&page=200&fields=&order=time&desc=false&status=upcoming&sig_id=3331796&sig=4e946097cff58f9b643141d9dc9b3d33b2bb73ce";

  // magic Alex stuff (runs request though server to get past cors stuff
  var corsURL = `https://cors-anywhere.herokuapp.com/${MeetupAPISignedNextMeetupKey}`;

$.ajax({
  url: corsURL,
  method: "GET"
  }).then(function(response) {
  console.log(response);
  meetings = response;
  console.log(meetings.results[0].name);
  meetupName = meetings.results[0].name;
  }); 

  // function to pull title name out of meetings variable
  function snip(input){;
  console.log("function input: "+input);
  
};
$("#submit-btn").on("click", function (event) {
  event.preventDefault();

  var userData = {
    meetings: $("#meetUp").val().trim(),
   
  };

    //clear out values after submit
  $("#nextBkMtg").val("");
});
});


// <!-- Charity -->
//-------Start----Priyesh Submit A READ BUTTON AND FIREBASE CODE---------










// <!-- priyesh -->
