// Question-7:  Write a function that has a local variable and another function that has a global variable. Demonstrate the difference between global and local scope.
let globalVariable = "I am a global variable";
function variableScope(){
console.log(globalVariable);

}

function localVariableScope(){
    let varuZ = "IIIII";
    console.log(varuZ);
}

console.log(globalVariable);
// console.log(varuZ); // we can access it because it is a local variable declared inside the fucntion but global variable s declared outside so we can access it outside also.



