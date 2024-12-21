//DATES

/*
A JavaScript Date object stores a specific point in time, represented as the number of milliseconds 
elapsed since the Unix Epoch (January 1, 1970, 00:00:00 UTC).
*/
const date=new Date();
const date1=new Date('22-06-2021');

console.log(date);
console.log(date1.toString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toTimeString());

console.log(date.getFullYear());
console.log(date.getMonth()+1); //0 based index



//++++++++++++++++++++++++++++++++++++++++TimeStamp++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const timeStamp=date.getTime();
console.log(timeStamp);

const stamp=Date.now(); 
date.toLocaleString("deafult",{weekday:"long"});
console.log(date.toLocaleString("deafult",{weekday:"long"}));