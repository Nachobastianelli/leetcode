function maxSum(nums, k) {
    var sum = 0;
    for (var i = 0; i < k; i++) {
        sum += nums[i];
    }
    var max = sum;
    for (var i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];
        max = Math.max(max, sum);
    }
    return max;
}
var nums1 = [2, 3, 5, 1, 6, 7, 1, 2, 0];
var k1 = 3;
console.log(maxSum(nums1, k1));
