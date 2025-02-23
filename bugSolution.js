function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null and undefined cases
  }
  if (typeof x === 'string' || Array.isArray(x)) {
    return x.length; // Access length only if x is a string or array
  } else {
    return -1; // Or throw an error: throw new Error('Invalid input type');
  }
}

console.log(foo([1, 2, 3])); // 3
console.log(foo(null)); // 0
console.log(foo(undefined)); // 0
console.log(foo(5)); // -1
console.log(foo('hello')); // 5