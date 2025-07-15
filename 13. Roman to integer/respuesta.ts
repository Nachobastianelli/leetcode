const diccionario: Record<string, number> = {
  M: 1000,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

const replaceNumber = (letra: string): number => {
  return diccionario[letra];
};

function romanToInt(s: string): number {
  let suma = 0;
  for (let i = 1; i < s.length; i++) {
    const actual = replaceNumber(s[i]);
    const siguiente = replaceNumber(s[i + 1]);

    if (siguiente && actual < siguiente) {
      suma -= actual;
    } else {
      suma += actual;
    }
  }
  return suma;
}

console.log(romanToInt("XIV"));
