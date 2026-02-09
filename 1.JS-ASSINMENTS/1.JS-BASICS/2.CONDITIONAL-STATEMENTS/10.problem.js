// Question-10:  WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters,
//  log "Username too long"; otherwise, log "Username accepted."

let username  =  "Lass";

if(username.length < 6){
    console.log("Username too short")
}
else if (username.length > 15 ){
    console.log("Username too long")
}
else{
    console.log("Username accepted")
}