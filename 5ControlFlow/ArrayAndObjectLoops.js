//for of loop
console.log("for of loop")

//array
const arr=[1,2,3,4,5,6];
for(const num of arr){
    console.log(num);
}

//object
// const obj={
//     india:"Delhi",
//     china:"Beijing",
//     japan:"Tokyo"
// }
// for(const key of obj){
//     console.log(key);
// }

//map
const map=new Map();
map.set("india","Delhi");
map.set("china","Beijing"); 
map.set("japan","Tokyo");
for(const [key] of map){
    console.log(key);
}
for(const [,value] of map){
    console.log(value);
}
for(const [key,value] of map){
    console.log(key,value);
}

//for in loop
console.log("for in loop")
//array
const arr1=[1,2,3,4,5,6];
for(const index in arr1){
    console.log(index);
    //as indexes are in built key of array in internal implemntation of array in javascript
    console.log(arr1[index]);
}

//object
const obj1={
    india:"Delhi",
    china:"Beijing",
    japan:"Tokyo"
}
for(const key in obj1){
    console.log(key);
    console.log(obj1[key]);
}


//for each loop 
// it takes a anonymous(no name function) callback(passed as an argument) function as a parameter ot named function and it is called for each element of the array.
console.log("for each loop");
//array
const arr2=[1,2,3,4,5,6];
arr2.forEach((num,index)=>{
    console.log(num,index);
    console.log(num+index);
})
console.log("++++++++++++++++++++++++++++++++");
arr2.forEach(function (num,index){
    console.log(num,index);
    console.log(num-index);
})
console.log("++++++++++++++++++++++++++++++++");
function xyz(num){console.log(num);}
arr2.forEach(xyz);

//array of objects
const arr3=[
    {
        name:"John",
        age:25
    },
    {
        name:"Doe",
        age:30
    },
    {
        name:"Jane",
        age:35
    }
];
console.log("++++++++++++++++++++++++++++++++");
arr3.forEach((person,index,arr)=>{console.log(person.name,person.age,index,arr)});