//Stack Memory
let name1="John";
let name2=name1;

console.table({name1,name2});

name2="Marry";
console.table({name1,name2});
//since we got value as stack memory i.e name1 and name2 are pointing to different memory location so if we change the value of name2 it will not change the value of name1

//Heap Memory
let person1={name:"John",age:25};
let person2=person1;

console.table({person1,person2});

person2.age=30;
console.table({person1,person2});

//since we got referece as heap memory i.e person1 and person2 are pointing to same memory location so if we change the value of person2 it will also change the value of person1