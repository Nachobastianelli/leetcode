// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//   const LEN_NUMS_1 = nums1.length;
//   const LEN_NUMS_2 = nums2.length;

//   let maxLen = Math.max(LEN_NUMS_1, LEN_NUMS_2);
//   let totalNums1 = 0;
//   let totalNums2 = 0;
//   for (let i = 0; i < maxLen; i++) {
//     if (i < LEN_NUMS_1) {
//       totalNums1 += nums1[i];
//     }

//     if (i < LEN_NUMS_2) {
//       totalNums2 += nums2[i];
//     }
//   }

//   console.log("totalNums1: ", totalNums1);
//   console.log("totalNums2: ", totalNums2);

//   const count: number = LEN_NUMS_1 + LEN_NUMS_2;
//   console.log("COUNT", count);
//   const total: number = totalNums1 + totalNums2;
//   console.log("TOTAL", total);

//   const avg: number = total / count;
//   console.log("AVG", avg);

//   return avg;
// }

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nums = [...nums1, ...nums2].sort((a, b) => a - b);
  const n = nums.length;

  if (n % 2 !== 0) return nums[Math.floor(n / 2)];
  return (nums[n / 2 - 1] + nums[n / 2]) / 2;
}

//Explicacion: Mezclo los dos arrays y lo ordeno en la misma linea, despues me fijo si es impar usando el resto de la devision por dos, si es impar devuelvo el numero del medio del arreglo y si es par tomo los dos numeros del medio del arreglo, los sumo y despues lo divido a dos.

const nums1 = [1, 3];
const nums2 = [2];

console.log(findMedianSortedArrays(nums1, nums2));
