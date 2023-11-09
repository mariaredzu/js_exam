// Exercise 1

// 1. This code creates the 9x9 Sudoku grid "to_verify" as a global variable, so it can be called later
var to_verify = new Array(9);
for (var i = 0; i < 9; i++) {
    to_verify[i] = new Array(9);
}

// 2. This function transfers the data from the provided table on the file called "javascript_test_je1.js" to the 'to_verify' grid
function F11() {
    // Parse the provided data and transfer it to the 'to_verify' grid
    for (var i = 0; i < to_verify.length; i++) {
        var digits = array_number[i].split(" ");
        for (var j = 0; j < digits.length; j++) {
            to_verify[i][j] = parseInt(digits[j]);
        }
    }
}

// 3. This function displays the 'to_verify' grid as an HTML table
function F12() {
    var tableHTML = "<table class=\" m-5 \">";
    for (var i = 0; i < 9; i++) {
        tableHTML += "<tr>";
        for (var j = 0; j < 9; j++) {
            tableHTML += "<td class=\" p-3 pe-4 ps-4 border border-dark\">" + to_verify[i][j] + "</td>";
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";
    document.body.innerHTML += tableHTML;
}

// 4. Call all functions
F11();
F12();