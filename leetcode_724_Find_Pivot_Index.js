/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {

    for(let i=0; i<nums.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let m=0; m<i; m++)
            leftSum += nums[m];
        
        for (let n=i+1; n<nums.length; n++)
            rightSum += nums[n];
        
        if (leftSum == rightSum)
            return i;
    }

    return -1;
    
};

console.log(pivotIndex([1,7,3,6,5,6])); // expected 3
console.log(pivotIndex([1,2,3])); // expected -1
console.log(pivotIndex([2,1,-1])); // expected 0