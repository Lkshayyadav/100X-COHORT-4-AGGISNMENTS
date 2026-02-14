const countCharacters = (statement) => {
  let result = {};
  for (let i = 0; i < statement.length; i++) {
    let char = statement[i];
    // if (result[char]) {
    //   result[char]++;x
    // } else {
    //   result[char] = 1;
    // }
    if (result[char]){
        result[char]++;
    }else{
        result[char]=1; 
    }
// (result[char]++);
// (result[char]=1);  

}
  return result; 

};

console.log(countCharacters("Hello"));