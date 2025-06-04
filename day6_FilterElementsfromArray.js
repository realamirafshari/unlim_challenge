// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.
const array = [0, 10, 20, 30];
const array1 = [1, 2, 3];
const array2 = [-2, -1, 0, 1, 2];
const filter = function (arr, fn) {
  const filterArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filterArray.push(arr[i]);
    }
  }
  return filterArray;
};

const greaterThan10 = n => n > 10;
const firstIndex = (n, i) => i === 0;
const plusOne = n => n + 1;

console.log(filter(array, greaterThan10));
console.log(filter(array1, firstIndex));
console.log(filter(array2, plusOne));
