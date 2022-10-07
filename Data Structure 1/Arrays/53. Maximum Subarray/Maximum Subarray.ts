/*
  Problem Link: {https://leetcode.com/problems/maximum-subarray/?envType=study-plan&id=data-structure-i}
*/

/*
  Given an integer array nums, 
  find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
*/

/*
  Solution with Kadane's Algorithm:
  Link: {https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/}
*/

function maxSubArray(nums: number[]): number {
  let currentMax = 0;
  let maxSubArray = Number.NEGATIVE_INFINITY;

  /*
  - Loop over array.
  - Increment currentMax with the current number.
  - Check what is bigger, currentMax or maxSubArray.
  - If maxSubArray still bigger so let it as it is, else, replace it with currentMax.
  - Check if currentMax become negative to reset it to zero again.
  - Finally, Outside the loop return the maxSubArray.
  */
  nums.forEach((num) => {
    currentMax += num;

    maxSubArray = Math.max(currentMax, maxSubArray);

    currentMax = currentMax < 0 ? 0 : currentMax;
  });

  return maxSubArray;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
