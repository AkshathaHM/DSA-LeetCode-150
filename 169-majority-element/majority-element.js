/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const n = nums.length;
    const freq = new Map();

    for (const num of nums) {
        if (freq.has(num)) {
            freq.set(num, freq.get(num) + 1);
        } else {
            freq.set(num, 1);
        }
    }

    for (const [key, value] of freq) {
        if (value > Math.floor(n / 2)) {
            return key;
        }
    }

    return -1;
};