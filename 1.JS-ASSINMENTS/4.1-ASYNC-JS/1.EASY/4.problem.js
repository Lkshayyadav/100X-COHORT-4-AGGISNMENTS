// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname,'b.txt');

fs.writeFile(filePath, 'bhai moj kardi mje aa gye', (err) => {
    if (err){
        console.log("An error occured check you code")
    }else{
        console.log("Code worked as it has to")
    }
});
