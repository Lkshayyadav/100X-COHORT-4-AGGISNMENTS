// Question-4:   WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).

let time = 15;

if(time >= 0 && time < 12){
    console.log("Good morning")
}
else if (time>= 12 && time < 17){
    console.log("Good afternoon")
}
else if (time >= 17 && time < 21){
    console.log("Good evening")
}
else if (time >= 21 && time < 24){
    console.log("Good night")
}
else{
    console.log("Time is invalid")
}