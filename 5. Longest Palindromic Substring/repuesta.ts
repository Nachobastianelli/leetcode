function longestPalindrome(s: string): string {
  const N = s.length;
  let longestStr = "";
  // Iteramos sobre cada caracter de la cadena
  for (let i = 0; i < N; i++) {
    // No importa si el string completo es par o impar. Lo que importa es si el palíndromo
    // que puede surgir desde una posición dada es par o impar.

    const palindromoPar = expandir(s, i, i + 1);
    if (palindromoPar.length > longestStr.length) longestStr = palindromoPar;
    const palindromoImpar = expandir(s, i, i);
    if (palindromoImpar.length > longestStr.length)
      longestStr = palindromoImpar;
  }

  return longestStr;
}

const expandir = (s: string, l: number, r: number) => {
  // Sigue iterando mientras se encuentre dentro del rango permitido
  // y mientras los extremos que se expanden sean idénticos
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l -= 1;
    r += 1;
  }
  // Cuando el bucle termina, l y r ya están fuera del rango válido del palíndromo:
  // l apunta un índice antes del inicio real, y r apunta un índice después del final.
  // Esto ocurre porque el último l-- y r++ ya se ejecutaron cuando la condición falló.

  // Usamos slice(l + 1, r) porque:
  // - l se pasó un índice hacia atrás (lo corregimos con +1)
  // - r ya está donde debe porque slice excluye el índice final, o sea, toma hasta r - 1
  return s.slice(l + 1, r);
};

console.log(longestPalindrome("babad")); // "bab" o "aba"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("a")); // "a"
console.log(longestPalindrome("ac")); // "a" o "c"
console.log(longestPalindrome("racecar")); // "racecar"
console.log(longestPalindrome("forgeeksskeegfor")); // "geeksskeeg"

//si lo unico que te pasan como parametro es un palindromo te conviene comprar extremos asi:

// const buscarSoloPalindromos = (palindromo: string) => {
//   let l = 0;
//   let r = palindromo.length - 1;

//   while (l < r) {
//     if (palindromo[l] !== palindromo[r]) {
//       return false;
//     }
//     l += 1;
//     r -= 1;
//   }
//   return true;
// };
