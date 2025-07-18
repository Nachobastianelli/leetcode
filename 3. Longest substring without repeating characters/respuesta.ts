//el patron que use es el de Sliding Window tanto cuando te dan un rango fijo a buscar como con un rango dinamico

function lengthOfLongestSubstring(s: string): number {
  let set = new Set<string>();

  let left = 0;
  let maxLen = 0;

  for (let rigth = 0; rigth < s.length; rigth++) {
    while (set.has(s[rigth])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[rigth]);
    maxLen = Math.max(maxLen, rigth - left + 1);
  }

  return maxLen;
}

// let nums1 = [2, 3, 5, 1, 6, 7, 1, 2, 0];
// let k1 = 3;

// function maxSum(nums: number[], k: number): number {
//   let sum = 0;
//   for (let i = 0; i < k; i++) {
//     sum += nums[i];
//   }

//   let max = sum;

//   for (let i = k; i < nums.length; i++) {
//     sum = sum - nums[i - k] + nums[i];
//     max = Math.max(max, sum);
//   }

//   return max;
// }

// console.log(maxSum(nums1, k1));
