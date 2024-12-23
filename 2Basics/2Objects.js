//object literals

const idSymbol=Symbol('id');
const idSymbol2=Symbol('id');
console.log(idSymbol);

const user={
    name:"John",
    "last name":"Doe",    //explicitly defining a property with space by using string.
    age:25,
    //idSymbol:123,       //if we wrote idSymbol:123, it (idSymbol) will be treated as a string.
    [idSymbol] : 123,     //using symbol as a key. only way ,if we wrote idSymbol:123, it (idSymbol) will be treated as a string.
    idSymbol2:456         //idSymbol2 will be treated as a string.


}

console.log(user);

//Access
console.log(user.name);
console.log(user["age"]);
console.log(user["last name"]);   //only way to access property with space.
console.log(user[idSymbol]);      //only way to access property with symbol. if used . notation, it will be treated give undefined.

//when we use square braket we write key name as per datatype of key.

//modify
user.name="Alice";
console.log(user);

//add
user.address="123, Main Street";
console.log(user);

user.greeting=function(){
    console.log(`hello ${this.name}`);
    //this keyword is used to refer the object itself.
}
console.log(user);
user.greeting();
console.log(user.greeting);    //it will give the function definition. it return reference to the function. basically we are accessing a prperty without execution
console.log(user.greeting());


Object.freeze(user);    //it will freeze the object. we can't add, modify or delete any property. any change in object will be ignored. 
user.age=30;
console.log(user.age);


//important methods
//Object.keys() , Object.values(), Object.entries()
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log(Object.keys(user));
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

console.log(Object.values(user));
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

console.log(Object.entries(user));