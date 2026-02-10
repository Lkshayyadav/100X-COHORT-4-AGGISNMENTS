// Question-8:  Write a function that returns another function. The inner function should have access to a variable from the outer function.
 

function first (a){
    let count = 3;

    return function mautliply(){
        count *= a; 
        console.log(count);
    }
}

const counter = first(2);
counter();