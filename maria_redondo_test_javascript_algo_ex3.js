// Exercise 3

let errors = [];
// 1. This function calls for the previous function "F21" and runs through all lines of the sudoku to check if it is okay
function F31() {
    // This for runs as many times as the length of "to_verify"
    for (var i = 0; i < to_verify.length; i++) {
        // We get each value of "to_verify" wich corresponds with the lines of the sudoku and run them through the function "F21" to check if it returns true or false
        if (!F21(to_verify[i])) {
            // If the answer is false, we push a string on the array "errors" so we can get a warning latter
            errors.push("Line " + (i + 1) + " is incorrect: " + to_verify[i].join(" ") + "\n");
        }
    }
}

// 2. This function calls for the previous function "F21" and runs through all columns of the sudoku to check if it is okay
function F32() {
    // This for iterates over the columns of "to_verify". It runs for the length of the first row of the array (all rows have the same length)
    for (var j = 0; j < to_verify[0].length; j++) {
        // We create an array called "column" so we can get the values of each column and fill it with them
        var column = [];
        // This for runs each row of "to_verify" to collect the elements of the current column "j" by pushing each element into the "column" array
        for (var i = 0; i < to_verify.length; i++) {
            column.push(to_verify[i][j]);
        }
        // We get each value of "to_verify" wich corresponds with the columns of the sudoku and run them through the function "F21" to check if it returns true or false
        if (!F21(column)) {
            // If the answer is false, we push a string on the array "errors" so we can get a warning latter
            errors.push("Column " + (j + 1) + " is incorrect: " + column.join(" ") + "\n");
        }
    }
}

// 3. This function calls for the previous function "F21" and runs through all regions of the sudoku to check if it is okay
function F33() {
    // This for iterates over the regions of "to_verify".
    for (var region = 0; region < 9; region++) {
        // We create an array called "regionValues" so we can get the values of each region and fill it with them
        var regionValues = [];
        // This two consecutive for iterate over rows and columns, so it can construct the "regionValues" array
        // by extracting values from "to_verify" array corresponding to the current region being processed
        for (var i = Math.floor(region / 3) * 3; i < Math.floor(region / 3) * 3 + 3; i++) {
            for (var j = (region % 3) * 3; j < (region % 3) * 3 + 3; j++) {
                regionValues.push(to_verify[i][j]);
            }
        }
        // We get each value of "to_verify" wich corresponds with the regions of the sudoku and run them through the function "F21" to check if it returns true or false
        if (!F21(regionValues)) {
            // If the answer is false, we push a string on the array "errors" so we can get a warning latter
            errors.push("Region " + (region + 1) + " is incorrect: " + regionValues.join(" ") + "\n");
        }
    }
}

// This function warns the user if there is any error found on the sudoku
function err() {
    // This "if" checks if "errors" has a length higher than 0, 
    // if the answer is false, it does nothing, if it is true, it sends an alert with a list of the errors and send them through the console too
    if(errors.length > 0) {
        alert("List of errors:\n" + errors);
        console.log(errors);
    }
}

// 4. Call all functions
F31();
F32();
F33();
err();
