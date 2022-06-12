// const used to import things from other libraries
//const  fun = require('fs');

//also used to define functions

let squareF= function(a){
    return a*a;
}
console.log(squareF(5));

//traditional  function
function square(a){
    return a*a;
}
console.log(square(6));

//traditional anonymous function. Need to put inside (). The'()' makes it an expression. 
//can use() at the end to call the function. 

(function(){
    console.log("test traditional anonymous function");
})();

//anonymous function is not accessbile after its initial creation. So you often
//need to assign it to a variable(function object). 
let myAnoFunction = function(){
    console.log("test anonymous function and assigned to variable");
};

myAnoFunction();




