// Question-5:  Write a function that takes a base and an exponent as parameters and returns the result of raising the base to the exponent.
function powerFinder (base,exponent){

let number = 1;
for (i =1 ; i<=exponent; i++){
    number *= base;
}
return number;




}
console.log(powerFinder(2,5));