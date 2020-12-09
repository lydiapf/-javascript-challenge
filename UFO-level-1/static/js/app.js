// from data.js
var tableData = data;

// YOUR CODE HERE!
function buildTable(data){
    distbody = d3.select("tbody");
    distbody.html("");
    data.forEach((objectrow) => {
        var row = distbody.append("tr");
        Object.values(objectrow).forEach((rowvalues) => {
            var cells = row.append("td");
            cells.text(rowvalues);
        })
    })
}

buildTable(tableData);

function filterData(){ 
    var tableData = data;
    var date = d3.select("#datetime").property("value");
    filteredData = tableData.filter(objectrow => objectrow.datetime === date);
    buildTable(filteredData);

}

d3.selectAll("#filter-btn").on("click", filterData);

