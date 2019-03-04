


function searchObject(searchTerm, numOfRecords, startYear, endYear) {
this.searchTerm = searchTerm;
this.numOfRecords = numOfRecords;
this.startYear = startYear;
this.endYear = endYear;
}

var currentSearch = 0;

$("button").on("click", function() {
    event.preventDefault();
    if ($(this).attr("id") === "search") {
        currentSearch = new searchObject($("#search-term").val(),$("#number-of-records").val(),$("#start-year").val(),$("#end-year").val());
        console.log(currentSearch);
    }
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + currentSearch.searchTerm + "&api-key=DUP7AwU5Eumg73UCWlp9GxgLAGdi3edE";  // saving the url of the api into the queryURL variable and concatenating the person variable into the string of the API url

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      console.log(response);
     
    });

})

