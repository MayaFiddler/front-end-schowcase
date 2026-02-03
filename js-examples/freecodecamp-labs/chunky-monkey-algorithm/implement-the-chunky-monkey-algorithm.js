/**
 * chunkArrayInGroups.js
 * Splits an array into groups of a specified size.
 * Demonstrates array manipulation, loops, and clean function logic.
 * Based on a FreeCodeCamp JavaScript algorithm challenge.
 */


function chunkArrayInGroups(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}

// Example usage
console.log(chunkArrayInGroups([1, 2, 3, 4, 5, 6], 2));
// Expected output: [[1, 2], [3, 4], [5, 6]]



