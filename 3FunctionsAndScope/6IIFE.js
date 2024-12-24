(
    function(){
        console.log("IIFE 1 ");
    }
)();

(
    function(name){
        console.log(`IIFE 2 ${name}`);
    }
)("John");

(
    ()=>console.log("IIFE 3")
)();


//for exexuting multiple IIFFs we need to have a semicolon at the end of each IIFE.