// Question-8: WAP that use the break statement to exit the loop when the counter reaches 5. 
// Also, use continue to skip printing the value 3 ( Note : Loop Starts from 0).


for (let i = 0; i <= 10; i++) {
  if (i === 3) continue; // skip 3
  if (i === 9) break;    // stop at 5
  console.log(i);
}
