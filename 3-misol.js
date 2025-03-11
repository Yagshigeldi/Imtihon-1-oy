function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for ( let j = i + 1; j<nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
        }
        }
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 13));
console.log(twoSum([2, 7, 11, 15], 17));
console.log(twoSum([2, 7, 11, 15], 18));
console.log(twoSum([2, 7, 11, 15], 22));
console.log(twoSum([2, 7, 11, 15], 26));
