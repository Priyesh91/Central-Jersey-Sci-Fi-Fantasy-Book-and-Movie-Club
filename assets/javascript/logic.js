

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

// <!-- Charity -->

























// <!-- Charity -->


// <!-- priyesh -->


































// <!-- priyesh -->
