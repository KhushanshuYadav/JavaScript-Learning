const arr1=[0,1,2,3,4,5,6,7,8,9];
arr1.pop();
arr1.push(10);
arr1.shift();
arr1.unshift(-1);


console.log(arr1,arr1[2]);

const arr2=new Array(5,4,null);
console.log(arr2);

const arr3=arr2;
console.log("TEST");
console.log(arr3);
arr3[2]=100;
console.log(arr3);
console.log(arr2);



//slice
console.log("SLICE");

console.log(`org arr1 1 = `,arr1);
const slicedArr1=arr1.slice(2,5);
console.log(`sliced Arr1 ${slicedArr1}`);
console.log(`org arr1 2 = ${arr1}`);

//Splice
console.log("Splice");

console.log(`org arr1 1 = `,arr1);
const splicedArr1=arr1.splice(2,2,100);
console.log(`spliced Arr1 ${splicedArr1}`);
console.log(`org arr1 2 = ${arr1}`);

/*
1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7.Join = converts to string.
*/



//Spread operator ...

//it unpacks the values of an iterable objects and helps them to covert into array.;

let str="Hello";
const mergedArr=[...arr1,...arr2,...str];
console.log(mergedArr);
const concatArr=arr1.concat(arr2,arr3);
console.log(concatArr);
console.log(arr1);
//Intresting methods, isArray(), from() and of()






