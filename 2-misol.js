function zeroIndex(nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[count], nums[i]] = [nums[i], nums[count]];
            count = count + 1;
        }
    }
    return nums
}

let nums1 = [0, 1, 0, 3, 13];
console.log(zeroIndex(nums1));
