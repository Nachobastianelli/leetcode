var INT_MIN = -2147483648;
var INT_MAX = 2147483647;
function reverse(x) {
    var negative = x < 0;
    var abs = Math.abs(x);
    var reversed = parseInt(abs.toString().split("").reverse().join(""));
    var result = negative ? -reversed : reversed;
    if (result < INT_MIN || result > INT_MAX)
        return 0;
    return result;
}
var x = -431;
console.log(reverse(x));
