function countVowels(str) {
  let result = {};

  // Convert string to lowercase to handle uppercase vowels
 str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if ("aeiou".includes(char)) {
    if (result[char]){
        result[char]++;
    }else{
        result[char]=1; 
    }
    }
  }

  return result;
}



 
console.log(countVowels("lakshay"))
module.exports = { countVowels };
