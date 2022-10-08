/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};

  let num;

  for (let i = 0; i < nums.length; i++) {
    num = nums[i];

    if (map[target - num] != undefined) {
      return [map[target - num], i];
    }

    map[num] = i;
  }
};

console.log(twoSum([3, 2, 3], 6));
console.log(twoSum([3, 2, 3], 5));
