// Write a function argumentsLength that returns the count of arguments passed to it.

// Input: args = [{}, null, "3"]
// Output: 3

const argumentsLength = (...args) => {
  return [...args].length;
};

console.log(argumentsLength({}, null, "3"));
