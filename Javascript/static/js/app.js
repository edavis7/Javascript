// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// build table
function createTable(data) {
    tbody.html('');
    // Loop Through `data` and console.log each encounter reported object
    data.forEach(function (encounter) {
        var row = tbody.append("tr");
        Object.values(encounter).forEach(function (value) {
            var cell = row.append("td");
            cell.text(value)
        });
    });
} 
function onClick() {
    d3.event.preventDefault();
    // filter() uses the custom function as its argument
    var date = d3.select("#datetime").property("value");
        if (date){
        var filteredData = tableData.filter(row => row.datetime === date);
    }
    

    createTable(filteredData)
}
d3.selectAll("#filter-btn").on("click", onClick);

createTable(tableData)