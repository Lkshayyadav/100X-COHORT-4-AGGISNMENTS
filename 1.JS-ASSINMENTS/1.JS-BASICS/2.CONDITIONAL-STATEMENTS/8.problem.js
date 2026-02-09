// Question-8:   WAP to categorize a given temperature into "low," "medium," or "high" ranges.

let temperature = 3;
if (temperature >=  70 && temperature< 100){
    console.log("High");
}
else if (temperature >= 40 && temperature < 70){
    console.log("Medium");
}
else if  (temperature >= 0 && temperature < 40) {
    console.log("Low");
}
else {
    console.log("Wrong value")
}