const name = "John"; //creates string primitive stack memory
const age=25;
const city= new String("New York");//creates string object heap memory

console.log(name);
console.log(city);
console.log(`My name is ${name.toUpperCase()} and age is ${age}`);

console.log(typeof(name[1]));  //not a char but a string
console.log(typeof(name.charAt(0)));  //not a char but a string
/*
In JavaScript, the String.prototype is an object that contains methods and properties available to all String instances. 
It allows you to extend or modify the behavior of string objects in JavaScript.
*/

console.log(name.toUpperCase()); //cretaes a new string does not modify the original string
console.log(name);