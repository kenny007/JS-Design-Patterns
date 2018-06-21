function myFunc(a,b,c){
 return a+b+c;
}
console.log(myFunc(1,2,3)); 
console.log(myFunc(1,2,3,4));//this won't result in a runtime error
console.log(myFunc(1,2)); //this will likely return undefined or NaN as the 3rd isn't supplied

/*
Javascript has an argument object which is available in every function that is why you can assign argument
dynamically, it is kinda like an array but not really an array. The argument object has a length property and
you can iterate through it like an array but since it's not exactly an array object u can't do things like
sorting and filtering.
*/

function myFunc(){
var x = 0;
for(var i = 0;i < arguments.length; i++){
    x = x + arguments[i];
}
return x;
}

console.log(myFunc(2,3,4));
/* This concept is used a lot in many libraries like jQuery */
