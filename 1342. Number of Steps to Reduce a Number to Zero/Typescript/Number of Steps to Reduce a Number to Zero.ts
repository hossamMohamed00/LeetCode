/*
Problem Link: {https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/}
*/

// Solution 1
// function numberOfSteps(num: number): number {
//   let stepsCount = 0;
//   while (num != 0) {
//     if (num % 2 == 0) {
//       num = num / 2;
//     } else {
//       num = num - 1;
//     }
//     stepsCount++;
//   }

//   return stepsCount;
// }

// Solution 2 using bitwise
function numberOfSteps(num: number): number {
  let steps = 0;
  while (num > 0) {
    num = num & 1 ? num - 1 : num >> 1;

    steps++;
  }

  return steps;
}

/*
* Explanation:
- Use bitmask here to check is even or not
- num: xxxxxx1 & 0000001 (bitmask with value of 1)
- result will be 1 if the last bit is 1 for both that means it is odd, or 0 otherwise

- Right shift (>>) This operator shifts the first operand the specified number of bits to the right.
- Shifting any number by 1 === half this number (num / 2) 
*/

// TESTING HERE
console.log(numberOfSteps(14));

console.log("--------------------------------");

console.log(numberOfSteps(8));
