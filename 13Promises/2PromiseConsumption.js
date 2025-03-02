let p1=new Promise(

    (resolve,reject)=>{

        let success =true;

        if(success) resolve("Promise Resolved");

        else reject("Promise Rejected");

    }
);

//we will use .then(),.catch(),.finally

p1.then((value)=>console.log(value))                  
 .catch((reason)=>console.log(reason))
 .finally(function(){console.log("Inside Finaally")});


//.then() chaining
//we can chain multiple .then() now each .then() always returns a promise if return value is not a promise then it will be converted to a promise
//.then() chaining is done by linking multiple .then() using a .then() method
//if .then() return nothing undefined is returned

//each .then() returned promise is passed to next .then() in chain as argument;

let p2=new Promise(

    function(resolve,reject){

        let win=true;
        
        if(win) resolve(2);
 
        else reject("failed")
       

    }
)

p2
.then(
   function(x){
    return x*2;    //this will be wrapped inside a promise and passed down the chain
   }
)
.then(
    (x)=>x*2  
)
.then(
    (x)=>console.log(x)  //we get 8 
)


//error handling in .then() chaining

