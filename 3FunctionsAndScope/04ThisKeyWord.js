//'use strict';
console.log(this);  //{} global object in nodejs

const obj={
    f: function(){
        console.log(this);  //{ f: [Function: f] } //refer to the object in which it is called.
    }
}
obj.f();           //refer to the object in which it is called.


function xyz(){
    console.log(this);  //{......} //global object in nodejs in strict mode this is undefined. 
    console.log(this.name);
}
xyz();