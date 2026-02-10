// Question-10: WAP to identify and log prime numbers within a given range.


function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let start = 1;
let end = 30;

for (let i = start; i <= end; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
