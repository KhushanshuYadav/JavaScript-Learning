console.log(addOne(0)); //1  HOISTING
function addOne(num) {
  return num + 1;
}
console.log(addOne(1)); //2

//console.log(addTwo(0)); //ReferenceError: Cannot access 'addTwo' before initialization
var addTwo = function addTwo(num) {
  return num + 2;
};
console.log(addTwo(1)); //3