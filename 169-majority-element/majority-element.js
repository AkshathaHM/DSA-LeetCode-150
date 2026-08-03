/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let candi = 0;

    for(let num of nums){
        if(count === 0) {
            candi = num
        }  
            if(candi === num) {
                count++;
            } else {
                count--;
            }
        }
      return candi;
};