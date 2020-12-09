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

var filtered = {};
function createFilters(){
    var changedElement = d3.select(this).select("input");
    var datavalue = changedElement.property("value");
    var filterID = changedElement.attr("id");
    if (datavalue){
        filtered[filterID] = datavalue;

    }
    else{
        delete filtered[filterID];
    }
    filterData();
}

function filterData(){ 
    var tableData = data;
    Object.entries(filtered).forEach(([key, value]) => {
        filteredData = tableData.filter(row => row[key] === value);
    });
    buildTable(filteredData);
    // var date = d3.select("#datetime").property("value");
    // filteredData = tableData.filter(objectrow => objectrow.datetime === date);
    // buildTable(filteredData);

}

d3.selectAll(".filter").on("change", createFilters);

