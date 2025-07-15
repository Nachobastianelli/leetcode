var diccionario = {
    M: 1000,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
};
var replaceNumber = function (letra) {
    return diccionario[letra];
};
function romanToInt(s) {
    var suma = 0;
    for (var i = 0; i < s.length; i++) {
        var actual = replaceNumber(s[i]);
        var siguiente = replaceNumber(s[i + 1]);
        if (siguiente && actual < siguiente) {
            suma -= actual;
        }
        else {
            suma += actual;
        }
    }
    return suma;
}
console.log(romanToInt("MCMXCIV"));
