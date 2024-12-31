//same as filter but it returns a new array with the modified elements
const arr=[1,2,3,4,5,6];
//const newArr=arr.map((num,index,arr)=>num*2);
const newArr=arr.map(
    

    (num,index)=>
    {
        console.log(`index: ${index} and num: ${num}`); 
        return num*2;
    }     
);
console.log(arr);
console.log(newArr);