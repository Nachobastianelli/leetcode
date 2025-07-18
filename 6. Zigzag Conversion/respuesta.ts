function convert(s: string, numRows: number): string {
  const rows = new Array(numRows).fill("");
  let currentRow = 0;
  let goingDown = false;

  for (let c of s) {
    rows[currentRow] += c;

    if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;

    currentRow += goingDown ? 1 : -1;
  }

  return rows.join("");
}

const s = "PAYPALISHIRING";

const numRows = 3;

console.log(convert(s, numRows));
