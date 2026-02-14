/*
  Write a function `findDuplicates` which takes an array as input and returns an array containing all the duplicate elements.

  What are duplicates?
  - Elements that appear more than once in the array are considered duplicates.

  Example:
  - Input: [10, 20, 30, 10, 40]
  - Output: [10]

  - Input: [1, 2, 3, 4, 5]
  - Output: []

  - Input: []
  - Output: []

  Once you've implemented the logic, test your code by running
  - `npm run test-duplicates`
*/


const findDuplicates = (array) => {
  let count = {};
  let result = [];
 for ( let i =0; i < array.length; i++){
  let element = array[i];

if (count[element]){
  count[element]++;
 if (count[element] == 2){
  result.push(element);
}
}else if (count[element] == 2){
  result.push(element);
}
else {
  count[element] = 1;
} }return result;
}
console.log(findDuplicates([1, 2, 3, 4, 5, 9, 9, 9, 3, 4, 5]));