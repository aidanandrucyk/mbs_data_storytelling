// Import dependencies
const fs = require("fs")
const csv = require("csvtojson")
const { Parser } = require("json2csv")

(async () => {

    // Load the cars
    const cars = await csv().fromFile("('./data/appDevToolRatings.csv");

    // Show the cars
    console.log(cars);

    // Modify the cars
    cars[0].Year = 1998;

    // Saved the cars
    const carsInCsv = new Parser({ fields: ["Year", "Make", "Model", "Length"] }).parse(cars);
    fs.writeFileSync("cars.csv", carsInCsv);

})();

function readCSVFile() {
    const fs = require('fs');
        
    fs.readFile('../data/appDevToolRatings.csv', function read(err, data) {
        if (err) {
            throw err;
        }
        const content = data;
    
        // Invoke the next step here however you like
        console.log(content);   // Put all of the code here (not the best solution)
        getPlatforms(content);   // Or put the next step in a function and invoke it
    });
}

function getPlatforms(files){

    var platforms = {};
    platforms[1] = 4;

    if (files.length > 0) {

        // Selected file
        var file = files[0];

        // FileReader Object
        var reader = new FileReader();

        // Read file as string 
        reader.readAsText(file);

        // Load event
        reader.onload = function (event) {

            // Read file data
            var csvdata = event.target.result;

            // Split by line break to gets rows Array
            var rowData = csvdata.split('\n');

            // <table > <tbody>
            var tbodyEl = document.getElementById('tblcsvdata').getElementsByTagName('tbody')[0];
            tbodyEl.innerHTML = "";

            // Loop on the row Array (change row=0 if you also want to read 1st row)
            for (var row = 1; row < rowData.length; row++) {

                // Insert a row at the end of table
                var newRow = tbodyEl.insertRow();

                // Split by comma (,) to get column Array
                rowColData = rowData[row].split(',');

                // Loop on the row column Array
                for (var col = 0; col < rowColData.length; col++) {

                    // Insert a cell at the end of the row
                    var newCell = newRow.insertCell();
                    newCell.innerHTML = rowColData[col];

                }

            }
        };

    } else {
        alert("Please select a file.");
    }
    console.log(platforms[1])
    return platforms;
}

readCSVFile()