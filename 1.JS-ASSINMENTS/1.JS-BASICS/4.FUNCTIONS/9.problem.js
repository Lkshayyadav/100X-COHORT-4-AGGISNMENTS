// Question-9:  Write a recursive function to calculate the factorial of a given number.

function factorial(a){
    let value = 1;
    for (let i =1 ; i<=a ; i++){
 value *= i;
    }
    console.log(value);


}

factorial(10);