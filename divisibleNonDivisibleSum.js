// You are given positive integers n and m.

// Define two integers as follows:

// num1: The sum of all integers in the range [1, n] (both inclusive) that are not divisible by m.
// num2: The sum of all integers in the range [1, n] (both inclusive) that are divisible by m.
// Return the integer num1 - num2.

// Input: n = 10, m = 3
// Output: 19
// Explanation: In the given example:
// - Integers in the range [1, 10] that are not divisible by 3 are [1,2,4,5,7,8,10], num1 is the sum of those integers = 37.
// - Integers in the range [1, 10] that are divisible by 3 are [3,6,9], num2 is the sum of those integers = 18.
// We return 37 - 18 = 19 as the answer.

// notes:
//  two arguments the `n` and `m`
// total all the divisible by `m`
// total all the non-divisible by `m`
// total-non-divisible - total-divisible = output

const differenceOfSums = (NormalNum, divisibleNum) => {
  let totalNonDivisible = 0;
  let totalDivisible = 0;
  for (let num = 1; num <= NormalNum; num++) {
    if (num % divisibleNum === 0) {
      totalDivisible += num;
    } else {
      totalNonDivisible += num;
    }
  }
  console.log(totalNonDivisible);
  return totalNonDivisible - totalDivisible;
};

console.log(differenceOfSums(10, 3));
