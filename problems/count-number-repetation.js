// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98,5]

// find: 5

// output: 2

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

function countRepeat(array, targetNumber) {
  count = 0;
  for (const item of array) {
    if (item === targetNumber) {
      count++;
    }
  }
  return count;
}

const array1 = countRepeat([5, 6, 11, 12, 98, 5], 5);
console.log(array1);
const array2 = countRepeat([5, 6, 11, 12, 98, 5], 25);
console.log(array2);
