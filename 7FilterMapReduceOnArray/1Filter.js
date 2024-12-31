const arr=[
    {name:"John",age:25,city:"New York"},
    {name:"Doe",age:30,city:"London"},
    {name:"Jane",age:35,city:"Paris"},
    {name:"Smith",age:40,city:"Paris"},
];

//filter
//SYNTAX ===> array.filter(callback(element, index, array), thisArg);

//it includes the element if callback returns truthy value
//it returns a new array with the elements that satisfy the condition

const newArr=arr.filter((person,index,arr)=>(person.age>30 && person.city==="Paris"));
//index and arr are optional parameters
console.log(arr);
console.log(newArr);