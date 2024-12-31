const arr=[1,2,3,4,5,6];

//reudce 
//SYNTAX ===> array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);
//it returns a single value
//accumulator stores the result of the previous callback in accumulator parameter 
//and
//currentValue stores the current element of the array
//and
//initialValue is optional parameter but it is the initial value of the accumulator if passed otherwise the first element of the array is taken as the initial value of the accumulator no matter the type
//implicit type coercion is then done by javascript

let sum=arr.reduce((acc,num)=>acc+num,1);
console.log(sum);
//OR
sum=arr.reduce((acc,num)=>{
    acc+=num;
    return acc;

    //or
    //return acc+num
},0);
console.log(sum);

// Yes, in JavaScript's reduce(), the callback function should always return the updated value of the accumulator (acc) in each iteration. 
// If you write the body of the callback using a block ({...}) instead of a concise return, you must explicitly use the return keyword to return the modified accumulator.