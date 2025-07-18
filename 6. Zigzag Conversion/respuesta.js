function convert(s, numRows) {
    var rows = new Array(numRows).fill("");
    var currentRow = 0;
    var goingDown = false;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var c = s_1[_i];
        rows[currentRow] += c;
        if (currentRow === 0 || currentRow === numRows - 1)
            goingDown = !goingDown;
        currentRow += goingDown ? 1 : -1;
    }
    return rows.join("");
}
var s = "PAYPALISHIRING";
var numRows = 3;
console.log(convert(s, numRows));
