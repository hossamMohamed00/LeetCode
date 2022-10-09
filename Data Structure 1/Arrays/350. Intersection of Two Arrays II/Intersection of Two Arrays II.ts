/*
 * Problem Link: {https://leetcode.com/problems/intersection-of-two-arrays-ii/?envType=study-plan&id=data-structure-i}
 */

/*
* Solution:
  - Create a map of nums1
  - Iterate over nums2 and check if the number is present in the map
  - If present, push the number to the result array and decrement the count in the map
  - Return the result array
*/

function intersect(nums1: number[], nums2: number[]): number[] {
  let result: number[] = [];

  let num1Map: {
    [key: number]: number;
  } = {};

  for (const num of nums1) {
    num1Map[num] = num1Map[num] ? num1Map[num] + 1 : 1;
  }

  nums2.forEach((num) => {
    if (num1Map[num]) {
      result.push(num);
      num1Map[num]--;
    }
  });

  return result;
}

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));

/*
 * Runtime: 68 ms, faster than 96.69% of TypeScript online submissions for Intersection of Two Arrays II.
 * Memory Usage: 45.1 MB, less than 46.82% of TypeScript online submissions for Intersection of Two Arrays II.
 */
