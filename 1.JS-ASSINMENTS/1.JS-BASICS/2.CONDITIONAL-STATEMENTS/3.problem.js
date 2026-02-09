// Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).
let hindi = 34;
let english = 3;
let science = 10;

let totalMarks = hindi+english+science;



if (totalMarks>=90){
    console.log("Grade is A ")
}
else if (totalMarks>=80){
   console.log("Grade is B ")   
}
else if (totalMarks>=70){
   console.log("Grade is C ")   
}
else if (totalMarks>=60){
   console.log("Grade is D ")   
}
else if (totalMarks>=50){
   console.log("Grade is E ")   
}
else{
    console.log("The grade of student is soo poor ")
}
