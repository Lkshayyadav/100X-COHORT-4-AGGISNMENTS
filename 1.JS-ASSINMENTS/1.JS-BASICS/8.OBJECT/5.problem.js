// Question-5:  Create a function that merges two objects. 
// If there are conflicts in values, allow for custom logic to determine the merged result. For example:

// object1: { a: 1, b: 2 }
// object2: { b: 3, c: 4 }
// customMerge: (key, val1, val2) => key === 'b' ? val1 * val2 : val2
// output: { a: 1, b: 6, c: 4 }