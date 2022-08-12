/*
Problem Link: {https://leetcode.com/problems/running-sum-of-1d-array/}
*/

// Solution 1
function runningSum(nums: number[]): number[] {
  let runningNumbers: number[] = [];

  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    runningNumbers.push(nums[i] + counter);

    counter = runningNumbers[i];
  }

  return runningNumbers;
}

// Solution 2
// function runningSum(nums: number[]): number[] {

//   for(let i=1; i < nums.length; i++) {
//       nums[i] += nums[i-1]
//   }

//   return nums
// };

// TESTING HERE
console.log(runningSum([1, 2, 3, 4]));
