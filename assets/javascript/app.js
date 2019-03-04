function searchObject(searchTerm, numOfRecords, startYear, endYear) {
this.searchTerm = searchTerm;
this.numOfRecords = numOfRecords;
this.startYear = startYear;
this.endYear = endYear;
}

var currentSearch = 0;

$("button").on("click", function() {
    if ($(this).attr(id) === "sumbit") {
        currentSearch = new searchObject($("#search-term").val(),$("#number-of-records").val(),$("#start-year").val(),$("#end-year").val());
    }
})