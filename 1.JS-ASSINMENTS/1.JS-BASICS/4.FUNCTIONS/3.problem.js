// Question-3:  Write a function that takes the current hour as a parameter and logs a different greeting message based on whether it's morning, afternoon, or evening.
function greet (hour){
    if(hour >= 5 && hour < 12){
        console.log("goog moring");
    }
    else if (hour >= 12 && hour < 17){
        console.log("Good afternoon");
    }
    else if (hour >= 17 && hour < 21 ){
        console.log("Good evening");

    }
    else if (hour >= 21 || hour < 5){
        console.log("Good night");
    }
else{
    console.log("The valur of time is wrong");
}
};

greet(22);