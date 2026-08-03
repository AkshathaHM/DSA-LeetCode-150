/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let n = nums.length;
    let j = 2;

    for(let i =  2; i < n; i++) {
        if(nums[i] != nums[j - 2]){
           nums[j] =  nums[i]
           j++;
        }
    }
    return j;
};