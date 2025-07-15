// function removeElement(nums: number[], val: number): number {
//   let l: number = nums.length;
//   let count: number = 0;
//   let aux: number = 0;
//   let countTwo: Array<number> = [];
//   for (let i = 0; i < l; i++) {
//     if (nums[i] === val) {
//       aux = nums[i];
//       nums.splice(i, 1);
//       i = i - 1;
//       count++;
//       countTwo.push(aux);
//       console.log(nums);
//     }
//   }
//   console.log(nums);
//   countTwo.forEach((n) => nums.push(n));
//   console.log(nums);
//   return l - count;
// }
function removeElement2(nums, val) {
    var k = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    console.log(nums);
    return k;
}
var numeros = [0, 1, 2, 2, 3, 0, 4, 2, 5];
var valor = 2;
console.log(removeElement2(numeros, valor));
