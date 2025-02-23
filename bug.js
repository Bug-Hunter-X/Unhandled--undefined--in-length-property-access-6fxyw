function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  }
  return x.length; // Potential error if x is not an array or string
}

console.log(foo([1, 2, 3])); // 3
console.log(foo(null)); // 0
console.log(foo(undefined)); // throws an error