const   countOccurrences = (arr) =>  {
  let result = {};
  for (let  i = 0 ; i <arr.length; i++){
let number = arr[i];
if (result[number]){
    result[number]++;
}  else{
    result[number] = 1;
}
}

return result;
}

console.log(countOccurrences([10, 20, 10, 30, 20, 20]))
module.exports = countOccurrences;

