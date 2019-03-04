function searchObject(searchTerm, numOfRecords, startYear, endYear) {
    this.searchTerm = searchTerm;
    this.numOfRecords = numOfRecords;
    this.startYear = startYear;
    this.endYear = endYear;
}

function displayArticle(article) {
    var headline = article.headline.main;
    var author = article.byline.original;
    var section = article.section_name;
    var date = article.pub_date;
    var articleUrl = article.web_url;
    $("#articles-go-here").append("<div>" + headline + "</div>");
    $("#articles-go-here").append("<div>" + author + "</div>");
    $("#articles-go-here").append("<div>" + section + "</div>");
    $("#articles-go-here").append("<div>" + date + "</div>");
    $("#articles-go-here").append("<div>" + articleUrl + "</div>");
    $("#articles-go-here").append("<br>");

}

var currentSearch = 0;

$("button").on("click", function () {
    event.preventDefault();
    if ($(this).attr("id") === "search") {
        currentSearch = new searchObject($("#search-term").val(), $("#number-of-records").val(), $("#start-year").val(), $("#end-year").val());
        console.log(currentSearch);
    }
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + currentSearch.searchTerm + "&api-key=DUP7AwU5Eumg73UCWlp9GxgLAGdi3edE";  // saving the url of the api into the queryURL variable and concatenating the person variable into the string of the API url

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            var articleArray = response.response.docs;
            for (var i = 0; i < articleArray.length; i++) {
                displayArticle(articleArray[i]);
            }
        });

})

