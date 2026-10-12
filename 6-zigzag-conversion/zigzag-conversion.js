
var convert = function(s, numRows) {
    // Edge case: if only 1 row or string is shorter than rows
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    // Create an array of strings for each row
    let rows = new Array(numRows).fill("");
    let current_row = 0;
    let going_down = false;

    // Place each character in the correct row
    for (let char of s) {
        rows[current_row] += char;

        // Change direction when we hit the top or bottom row
        if (current_row === 0 || current_row === numRows - 1) {
            going_down = !going_down;
        }

        current_row += going_down ? 1 : -1;
    }

    // Combine all rows
    return rows.join("");
};
