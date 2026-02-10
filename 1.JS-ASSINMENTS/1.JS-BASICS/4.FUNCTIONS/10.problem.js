// Question-10: Write two functions, and then compose them into a third function. For example, if f(x) = x + 2 and g(x) = 2x, then 
// the composed function should be h(x) = f(g(x)).

 function add(a){
    return a + 2;
 }
 function multiply(a){
    return a * 2 ;
 }

 function result(x){
   return  add(multiply(x));
 };


 console.log(result(5));