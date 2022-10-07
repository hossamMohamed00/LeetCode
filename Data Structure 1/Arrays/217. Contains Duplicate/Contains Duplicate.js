/*
Problem Link: {https://leetcode.com/problems/contains-duplicate/?envType=study-plan&id=data-structure-i}
*/

function containsDuplicate2(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }

  return false;
}

console.log(`Array [1, 1, 3, 4] =>> ${containsDuplicate2([1, 1, 3, 4])}`);
console.log(`Array [1, 2, 3, 4] ==> ${containsDuplicate2([1, 2, 3, 4])}`);
console.log(`Array [3, 3, 4] ==> ${containsDuplicate2([3, 3, 4])}`);
