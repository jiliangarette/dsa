// Transform Array by Parity

// You are given an integer array nums.

// Replace each even number with 0.
// Replace each odd numbers with 1.
// Sort the modified array in non-decreasing order.
// Return the resulting array after performing these operations.

// Example 1:

// Input: nums = [4,3,2,1]
// Output: [0,0,1,1]

// for loop
// check if even or odd using modulo
// all even are to be put on leftArray
// all odd are to be put on  rightArray
// return combined array of left and right array

const transformArray = (array) => {
  let leftArray = [];
  let rightArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      leftArray.push(0);
    } else {
      rightArray.push(1);
    }
  }
  return leftArray.concat(rightArray);
};

const randomArrayOfNums = [4, 3, 2, 1];

console.log(transformArray(randomArrayOfNums));
