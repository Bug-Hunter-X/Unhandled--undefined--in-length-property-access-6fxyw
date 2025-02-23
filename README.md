# Unhandled 'undefined' in length property access

This repository demonstrates a common JavaScript error: attempting to access the `length` property of a variable that may not be an array or string.  The `bug.js` file contains the faulty code, while `bugSolution.js` provides a corrected version.

The original code handles the `null` case correctly but fails when an `undefined` value is passed. The solution adds comprehensive type checking to prevent errors.