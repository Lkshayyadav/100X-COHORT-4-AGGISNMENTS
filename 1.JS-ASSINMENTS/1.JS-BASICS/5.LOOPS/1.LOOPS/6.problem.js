// Question-6:  WAP to Develop a do-while loop for a simple number guessing game. 
// Ask the user to guess a number between 1 and 10, and keep prompting until they guess correctly.


let secretnumber = 69;  // number to guess
let guess;

do {
  guess = parseInt(prompt("Guess"));

  if (guess < secretnumber) {
    console.log("Too low!");
  } else if (guess > secretnumber) {
    console.log("Too high!");
  } else {
    console.log("Correct! 🎉");
  }

} while (guess !== secretnumber);
