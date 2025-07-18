const INT_MIN = -2147483648;
const INT_MAX = 2147483647;

function reverse(x: number): number {
  const negative = x < 0;
  const abs = Math.abs(x);
  const reversed = parseInt(abs.toString().split("").reverse().join(""));

  const result = negative ? -reversed : reversed;
  if (result < INT_MIN || result > INT_MAX) return 0;
  return result;
}

const x = -431;

console.log(reverse(x));
