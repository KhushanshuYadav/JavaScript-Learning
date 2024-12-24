()=>{};

const xyz=()=>{};
console.log(xyz); //[Function: xyz]
console.log(xyz()); //undefined

const add=(num1,num2,num3) => num1+num2+num3;
console.log(add(1,2,3)); //6

const add1=(num1,num2,num3) => {
    //for multiline code
    return num1+num2+num3;
}
console.log(add1(1,2,3)); //6

const add2=(num1,num2,num3) => (num1+num2+num3);
console.log(add2(1,2,3)); //6

const f=()=>({a:1,b:2});  //to return object use () to avoid confusion with function body.
console.log(f());

//arrow function cannot be used as constructor.



// arrow function does not have its own this, arguments, super, or new.target. These are inherited from the containing scope.