//Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function addTwoNumbers(l1, l2) {
    var _a, _b, _c, _d;
    var dummy = new ListNode(0);
    var puntero = dummy;
    var carry = 0;
    while (l1 !== null || l2 !== null || carry !== 0) {
        var suma = ((_a = l1 === null || l1 === void 0 ? void 0 : l1.val) !== null && _a !== void 0 ? _a : 0) + ((_b = l2 === null || l2 === void 0 ? void 0 : l2.val) !== null && _b !== void 0 ? _b : 0) + carry;
        carry = Math.floor(suma / 10);
        var digito = suma % 10;
        puntero.next = new ListNode(digito);
        puntero = puntero.next;
        l1 = (_c = l1 === null || l1 === void 0 ? void 0 : l1.next) !== null && _c !== void 0 ? _c : null;
        l2 = (_d = l2 === null || l2 === void 0 ? void 0 : l2.next) !== null && _d !== void 0 ? _d : null;
    }
    var actual = dummy.next;
    while (actual !== null) {
        console.log(actual.val);
        actual = actual.next;
    }
    return dummy.next;
}
function arrayToList(arr) {
    var dummy = new ListNode(0);
    var actual = dummy;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        actual.next = new ListNode(num);
        actual = actual.next;
    }
    return dummy.next;
}
var l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
var l2 = arrayToList([9, 9, 9, 9]);
var resultado = addTwoNumbers(l1, l2);
console.log(resultado);
