/*
Problem Link: {https://leetcode.com/problems/richest-customer-wealth}
*/

// Solution 1
// function maximumWealth(accounts: number[][]): number {
//   let maxArr = []

//   maxArr = accounts.map(acc => acc.reduce((init, curr) => (init + curr)))

//   return Math.max(...maxArr)
// };

// Solution 2
function maximumWealth(accounts: number[][]): number {
  let maxValue = 0;

  accounts.forEach((acc) => {
    const sum = acc.reduce((init, curr) => init + curr);

    maxValue = sum > maxValue ? sum : maxValue;
  });

  return maxValue;
}

// TESTING HERE
console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
