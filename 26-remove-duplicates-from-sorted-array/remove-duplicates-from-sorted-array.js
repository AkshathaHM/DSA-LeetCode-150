/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let n = nums.length;
    let j = 1;

    for(let i = 1; i < n; i++) {
        if(nums[i] != nums[j-1]){
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
};