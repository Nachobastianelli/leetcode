var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
function myAtoi(s) {
    var INT_MIN = Math.pow(-2, 31);
    var INT_MAX = Math.pow(2, 31) - 1;
    var isNegative = false;
    var newInt = "";
    s = s.trimStart();
    if (s[0] === "-") {
        isNegative = true;
        s = s.slice(1);
    }
    else if (s[0] === "+") {
        isNegative = false;
        s = s.slice(1);
    }
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var c = s_1[_i];
        if (numbers.includes(c)) {
            newInt += c;
            if (newInt[0] === "0")
                newInt = "";
        }
        else
            break;
    }
    newInt = parseInt(newInt);
    if (isNaN(newInt))
        return 0;
    if (isNegative)
        newInt = -newInt;
    if (newInt > INT_MAX)
        newInt = INT_MAX;
    if (newInt < INT_MIN)
        newInt = INT_MIN;
    return newInt;
}
var str = "-91283472332";
console.log(myAtoi(str));
