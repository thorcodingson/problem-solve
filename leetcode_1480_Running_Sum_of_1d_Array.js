/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let rSum = [];
    for(let i = 0; i < nums.length; i++) {
        let sum = 0;
        
        for(let j = 0; j <= i; j++)
            sum += nums[j];
        
        rSum[i] = sum;
    }
    return rSum;
};

var runningSum2 = function(nums) {
    let rSum = [];
    for(let i = 0; i < nums.length; i++) {
        if (i == 0)
            rSum[i] = nums[i];
        else
            rSum[i] = rSum[i-1] + nums[i];
    }
    return rSum;
};

console.log(runningSum2([1,2,3,4])); // Expected [1,3,6,10]