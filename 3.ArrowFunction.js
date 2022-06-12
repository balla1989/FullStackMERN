
// Lates changes in JS allows users to not type word 'function' completely. 
//arrow functions






// Traditional anonymous fucntion

let sum = function(a,b) {
    return a + b;
}
console.log(sum(5,3));

//Arrow function- this eliminates
//i) Keyword 'function'
//ii) return keyword
//iii) removes {}
//iv) adds arrow("=>")
let sum1 = (a,b) =>a+b;
console.log(sum1(3,2));


//arrow function syntax is even consise  when function takes in 
// one argument &
// one line to return
const square = a=>a*a;


//New feature: defining a fuction as a property in an object

let util={
    //old way
        //square: function(a)

    //new way
        square(a){
            return a*a;
        }
    }

console.log(util.square(3));

//arrow fucntctions are lexically scoped.ie. 
//they close over the 'this' keyword available on their parent.
//while the regular functions use the caller to determine what's inside their
//'this' keyword. 

