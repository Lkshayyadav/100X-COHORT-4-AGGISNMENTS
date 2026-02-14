/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/


// ------> for this given problem i have 2 approch to solve it 
// 1st by using the js built in functions 
// 2nd by using loops and storing it in variables and comparing it 



const  isAnagram =  (s1,s2) => {
    if(s1.length !== s2.length){
        return false;
    }
const sorter = (s) => {
return s.toLowerCase().split('').sort().join();
}

return sorter(s1) === sorter(s2);

}
console.log(isAnagram("lakshay", "yahlaks"))




// function isAnagram(str1, str2) {

//   if (str1.length !== str2.length) {
//     return false;
//   }

//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();

//   let count = {};

//   // Step 1: Count characters from first string
//   for (let i = 0; i < str1.length; i++) {
//     let char = str1[i];

//     if (count[char]) {
//       count[char]++;
//     } else {
//       count[char] = 1;
//     }
//   }

//   // Step 2: Reduce count using second string
//   for (let i = 0; i < str2.length; i++) {
//     let char = str2[i];

//     if (!count[char]) {
//       return false;
//     }
// z
//     count[char]--;
//   }

//   return true;
// }

// console.log(isAnagram("laksll", "ksalll"));
