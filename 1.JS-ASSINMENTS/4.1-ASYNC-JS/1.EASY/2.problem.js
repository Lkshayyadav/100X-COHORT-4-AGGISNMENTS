// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)
let counter = 0;
const timer = () => {
    console.log(counter);
    counter++;

    setTimeout(timer, 3000);
}
timer();