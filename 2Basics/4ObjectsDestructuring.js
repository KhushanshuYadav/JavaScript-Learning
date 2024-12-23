const Employee ={
    name:"John",
    age:25,
    anchorDays:["Monday","Tuesday","Wednesday"],
}

//Destructuring
const {age,name:eName,anchorDays:days} = Employee;  //order doesn't matter. we can use any name for the variable. we can also use default value.
console.log(age);
console.log(eName);
console.log(days);
days[0]="Sunday";
console.log(Employee); //destructuring can change the original object. so be careful while using it. if data is reference type, it will change the original object.
