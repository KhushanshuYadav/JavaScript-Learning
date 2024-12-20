//1 conversion of anything to number
let numString="123";
let num=Number(numString);
// console.log(num);
// console.log(typeof num);

let numString2="12hello";
let num2=Number(numString2);
// console.log(num2);
// console.log(typeof num2);
//NaN === Not a Number it of type number and used to represent an unrepresentable value i.e values which cannot be be converted to a valid number

let numNull=Number(null);
// console.log(numNull);
// console.log(typeof numNull);

let numUndefined=Number(undefined);
// console.log(numUndefined);  

//"avx12"===NaN
//"13"===13
//null===0
//undefined===NaN






//2 conversion of anything to boolean
let v1=Boolean(undefined);
// console.log(v1);

//"" or 0 or null or undefined == false
//"xyz" or 1 or any number or any object == true



//3 conversion of anything to string
let str=String(undefined);
console.log(typeof(str));

//null=="null"
//undefined=="undefined"
//true=="true"
//false=="false"

/*

In JavaScript, type conversion refers to the process of converting one data type to another. There are two main types of conversion: implicit and explicit.

1. Implicit Type Conversion (Type Coercion):

This happens automatically when JavaScript tries to convert one data type to another, usually during operations between different types.

For example:

let result = '5' + 2;  // Result is '52', because 2 is coerced to a string and concatenated.

Here, the number 2 is automatically converted to a string, and the result is '52'.

2. Explicit Type Conversion (Type Casting):

This occurs when you manually convert one type to another using functions like Number(), String(), Boolean(), etc.

For example:

let num = '10';
let convertedNum = Number(num);  // Explicit conversion from string to number.
console.log(convertedNum);  // Outputs: 10

Common Type Conversion Functions:

String(): Converts a value to a string.

String(123);  // "123"

Number(): Converts a value to a number.

Number('123');  // 123
Number('abc');  // NaN (Not a Number)

Boolean(): Converts a value to a boolean.

Boolean(1);    // true
Boolean(0);    // false
Boolean('');   // false
Boolean('Hello');  // true


Special Case: Null and Undefined

null is automatically converted to 0 in numeric contexts.

undefined is converted to NaN when used in numeric contexts.


Example:

let a = null + 1;  // 1, because null is coerced to 0
let b = undefined + 1;  // NaN, because undefined is coerced to NaN

Note: Be careful when using type conversion, as it can sometimes lead to unexpected results. Always make sure to test your code thoroughly to avoid any issues.
*/
