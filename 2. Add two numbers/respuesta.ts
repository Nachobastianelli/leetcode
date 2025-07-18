//Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummy = new ListNode(0);
  let puntero = dummy;
  let carry = 0;
  while (l1 !== null || l2 !== null || carry !== 0) {
    const suma = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    carry = Math.floor(suma / 10);
    const digito = suma % 10;
    puntero.next = new ListNode(digito);
    puntero = puntero.next;
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return dummy.next;
}

function arrayToList(arr: number[]): ListNode | null {
  let dummy = new ListNode(0);
  let actual = dummy;

  for (const num of arr) {
    actual.next = new ListNode(num);
    actual = actual.next;
  }

  return dummy.next;
}

const l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
const l2 = arrayToList([9, 9, 9, 9]);
//[8,9,9,9,0,0,1]

const resultado = addTwoNumbers(l1, l2);

console.log(resultado);
