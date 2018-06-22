/* jQuery('.foo')
    .addClass('bar')
    .fadeIn('slow')
    .html('Hello World');
*/

new Calc(0)
   .add(1)
   .add(2)
   .multiply(3)
   .equals(callback) //this will be something you want to do

// CREATING A CHAINED API
var Calc = function(start){
    var that = this; //this is so as to ensure no one is doing anything unexpected
    this.add = function(x){
       start = start + x;
       return that;
    };
    
    this.multiply = function(x){
        start = start * x;
        return that;
    };

    this.equals = function(callback){
      callback(start)
       return that; 
    };
}

new Calc(0).add(1).add(2).multiply(3)
   .equals(function(result){ 
      console.log(result); 
  }

//we execute the callback that is being passed in the equals invocation call just only reference is passed in

/* The primary aim of chained API is to reduce character size cos JS has to be submitted over the wire and we
want to minimize the amount of data we are providing, if we don't have to assign our objects to variable we
can more optimize the amount of bytes being sent over the wire. 
We are always returning this so that what is return is available to the next caller
*/



/* Javascript has an implicit return value of every function execution, so if you don't specify it returns undefined, in chained API it means every method has to return something that the next method can work on.
In JS 'this' keyword represents the current state this current method is executed of */

/* CHAINING (Used in .NET API as in a fluent API)
 -Useful for creating fluent APIs for working against a mutable object
 -Designed around returning the source object. Popularized by jQuery (Common in LINQ)

*/
