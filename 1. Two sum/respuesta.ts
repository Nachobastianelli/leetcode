// function twoSum(nums: number[], target: number): number[] {
//   let firtsNumber;
//   let secondNumber;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         firtsNumber = i;
//         secondNumber = j;
//         break;
//       }
//     }
//     if (firtsNumber !== undefined && secondNumber !== undefined) break;
//   }
//   return [firtsNumber, secondNumber];
// }

// console.log(
//   twoSum([1, 2, 3, 4, 5, 6], 11) // Esperado: [4, 5]
// );

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complemento = target - nums[i];
    console.log(`i=${i}, num=${nums[i]}, complemento=${complemento}`);

    if (map.has(complemento)) {
      console.log(
        `¡Encontrado! ${complemento} ya estaba guardado con índice ${map.get(
          complemento
        )}`
      );
      return [map.get(complemento)!, i];
    }

    map.set(nums[i], i);
    console.log(`map:`, map);
  }

  throw new Error("No se encontró solución");
}

twoSum([1, 2, 3, 4, 5, 6], 11); // → [4, 5]
