const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function myAtoi(s: string): number {
  const INT_MIN = Math.pow(-2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;
  let isNegative = false;
  let newInt: number | string = "";
  s = s.trimStart();

  if (s[0] === "-") {
    isNegative = true;
    s = s.slice(1);
  } else if (s[0] === "+") {
    isNegative = false;
    s = s.slice(1);
  }

  for (let c of s) {
    if (numbers.includes(c)) {
      newInt += c;
      if (newInt[0] === "0") newInt = "";
    } else break;
  }

  newInt = parseInt(newInt);

  if (isNaN(newInt)) return 0;

  if (isNegative) newInt = -newInt;
  if (newInt > INT_MAX) newInt = INT_MAX;
  if (newInt < INT_MIN) newInt = INT_MIN;

  return newInt;
}

const str = "-91283472332";

console.log(myAtoi(str));
