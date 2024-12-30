// Code: Callbacks are functions that are passed as arguments to other functions.
//named callback function
function callback1(){
    console.log("callback1");
}

function caller1(callbackFunction){
    console.log("caller1");
    callbackFunction();
}

caller1(callback1);

//anonymous callback function arrow function
function caller2(callbackFunction){
    console.log("caller2");
    callbackFunction();
}

caller2(  ()=>console.log("callback2")  );

function caller3(callbackFunction){
    console.log("caller3");
    callbackFunction();
}

caller3(  ()=>console.log("callback3")  );