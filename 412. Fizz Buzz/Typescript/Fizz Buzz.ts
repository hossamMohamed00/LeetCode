/*
Problem Link: {https://leetcode.com/problems/fizz-buzz/}
*/

// Answer 1
// function fizzBuzz(n: number): string[] {
//   const answer: string[] = [];

//   let isDivisibleBy3 = false;
//   let isDivisibleBy5 = false;
//   let stringVal = "";
//   for (let i = 1; i <= n; i++) {
//     isDivisibleBy3 = i % 3 == 0;
//     isDivisibleBy5 = i % 5 == 0;

//     if (isDivisibleBy3 && isDivisibleBy5) {
//       stringVal = "FizzBuzz";
//     } else if (isDivisibleBy3) {
//       stringVal = "Fizz";
//     } else if (isDivisibleBy5) {
//       stringVal = "Buzz";
//     } else {
//       stringVal = String(i);
//     }

//     answer.push(stringVal);
//   }

//   return answer;
// }

// Answer 2
function fizzBuzz(n: number): string[] {
  return [...Array(n).keys()].map((i) => {
    const num = i + 1;
    let isDivisibleBy3: boolean = num % 3 == 0;
    let isDivisibleBy5: boolean = num % 5 == 0;

    if (isDivisibleBy3 && isDivisibleBy5) return "FizzBuzz";

    if (isDivisibleBy3) return "Fizz";

    if (isDivisibleBy5) return "Buzz";

    return num.toString();
  });
}

// TESTING HERE
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
