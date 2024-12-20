var x=1;
let y=2;
const z=3;
/*const z;
  z=3; 
  This will throw an error
*/
console.table([x,y,z]);



{
    let y=3;
    x=2; //var x=2; //This will not throw an error
    const z=4;
    console.table([x,y,z]);
}

y=5;
//z=6; //This will throw an error

//var hoisting
t=13
var t;
console.table([x,y,z,t]);