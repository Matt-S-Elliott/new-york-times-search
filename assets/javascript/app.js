 console.log("test")
 
 function test() {
    var person = $(this).attr("data-person"); //pulling the data-person attribute value and storing it in a value 
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=DUP7AwU5Eumg73UCWlp9GxgLAGdi3edE";  // saving the url of the api into the queryURL variable and concatenating the person variable into the string of the API url

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        console.log(response);
        // var results = response.data;

        // for (var i = 0; i < results.length; i++) {
        //   var gifDiv = $("<div>");

        //   var rating = results[i].rating;

        //   var p = $("<p>").text("Rating: " + rating);

        //   var personImage = $("<img>");
        //   personImage.attr("src", results[i].images.fixed_height.url);

        //   gifDiv.prepend(p);
        //   gifDiv.prepend(personImage);

        //   $("#gifs-appear-here").prepend(gifDiv);
        // }
      });
  };

  test(); 