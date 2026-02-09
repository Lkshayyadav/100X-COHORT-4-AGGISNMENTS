// Problem 4: Write a JavaScript program to demonstrate logical operators in a conditional statement.

let age = 20;
let hasID = true;
let isHoliday = false;


if (age >= 18 && hasID) {
    console.log("Person is eligible to enter.");
} else {
    console.log("Person is not eligible to enter.");
}

if (age < 18 || isHoliday) {
    console.log("Special permission granted.");
} else {
    console.log("No special permission.");
}


let isLoggedIn = false;
if (!isLoggedIn) {
    console.log("Please log in first.");
}