//Creates a Singleton Object
const obj1=new Object();
console.log(obj1);

obj1.a=1;
obj1.b=2
console.log(obj1);

const obj2={3:"c",4:"d"};
const obj3={5:"e",6:"f"};

const obj4=Object.assign({},obj1,obj2,obj3);
console.log(obj4);

const obj5={...obj1,...obj2,...obj3};   //spread operator
console.log(obj5);


console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
//object nesting

const perosn={

    age:66,

    name:{
        first:"John",
        last:"Doe",
        familyName:{
            father:"John Doe Sr.",
            mother:"Alice Doe"
        }
    },
}
console.log(perosn);
console.log(perosn.name.familyName?.father);