function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x <= 9) return true;
  const n = x.toString();
  let l = 0;
  let r = n.length - 1;
  while (l < r) {
    if (n[l] !== n[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}

const num = 10;

console.log(isPalindrome(num));
