// What is Big O
// It compares approaches and finds which task is more efficent
// write a function that calculates the sum of all numbers from 1 up to some number, n

function addUpTo(n) {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }
  return total
}

function addUpToVTwo(n) {
  return (n * (n + 1)) / 2
}

// addUpToVTwo is faster because there are less operations
// When we do Big O notation we are taking the worst case scenario

// f(n) = n linear menas as n increases the runtime does as well
// f(n) = n^2 quadratic means the runtime is related to n^2
// f(n) = 1 constant means as n grows there is no impact

// addUpToVTwo is O(1)
// addUpTo is O(n)
// nested for loops would be O(n^2)

// arithmetic operations are constant
// variable assignments is constant
// accessing elements in an array or object is constant
// some searching algos have log time complexity ( O(log n) )
// some sorting algos involve log of n

// Space Complexity

// auxillary space complexity is the amount of space an algo
// things like booleans, numbers, undefined and null are constant space
// strings are O(n) where n is string length
// array and objects also O(n)
//some recursion involve log space complexity
