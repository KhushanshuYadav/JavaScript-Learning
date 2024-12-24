function xyz(a,b,c=-3){
    
    if(b===undefined) return "hello";
    return 0;


}
console.log(xyz(a=1,c=3));
console.log(xyz());  //not passing any value to function is taken as undefined.
console.log(xyz);

//++++++++++++++++rest operator++++++++++++++++++++++++++++

function sum(a,b,...args){
    console.log(args);
    console.log(a);
    console.log(b);

    return args;
}

console.log(sum(1,2,3,4,5,6,7,8,9,10));

//we can pass objects and arrays as well. in case of object typechecking is resposonsibility of the programmer.
