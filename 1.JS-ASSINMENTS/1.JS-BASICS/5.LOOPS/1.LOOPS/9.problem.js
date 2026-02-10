// Question-9: WAP that logs numbers from 1 to 30.
//  For multiples of 3, log "Fizz" instead of the number, 
// and for multiples of 5, log "Buzz." 
// For numbers which are multiples of both 3 and 5, log "FizzBuzz."



for (i = 1; i<= 30; i++){
    
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz")
    }
    else if (i%3===0){
        console.log("Fizz")
    }
    else if (i%5===0){
        console.log("Buzz")
    }
    else {
        console.log(i);
    }
}
