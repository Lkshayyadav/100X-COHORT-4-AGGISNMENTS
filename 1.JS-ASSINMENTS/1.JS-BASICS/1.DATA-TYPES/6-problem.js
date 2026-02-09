// WAP to input n numbers and log the average of those number.

let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

for (i=0; i<arr.length; i++){
    sum = sum+arr[i];

}

console.log(sum/arr.length);