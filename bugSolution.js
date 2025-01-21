function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Parameters must be numbers.');
  }
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0

// Demonstrating error handling
try {
  console.log(foo('a', 2)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Invalid input: Parameters must be numbers.
}

