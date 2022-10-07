/*
Problem Link: {https://leetcode.com/problems/contains-duplicate/?envType=study-plan&id=data-structure-i}
*/

//* Solution 1
function containsDuplicate(nums: number[]): boolean {
  let duplicateMap: {
    [s: number]: number;
  } = {};

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (duplicateMap[element]) {
      duplicateMap[element]++;
    } else {
      duplicateMap[element] = 1;
    }
  }

  /*
  duplicateMap: {
  1: 1,
  2: 1,
  3: 2
  }
  */

  let containsDuplicate: boolean = false;
  Object.values(duplicateMap).forEach((val: number) => {
    if (val > 1) {
      containsDuplicate = true;
    }
  });

  return containsDuplicate;
}

console.log(`Array [1, 1, 3, 4] =>> ${containsDuplicate([1, 1, 3, 4])}`);
console.log(`Array [1, 2, 3, 4] ==> ${containsDuplicate([1, 2, 3, 4])}`);
console.log(`Array [3, 3, 4] ==> ${containsDuplicate([3, 3, 4])}`);
