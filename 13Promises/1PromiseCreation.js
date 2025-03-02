
//creation of promises

const promise=new Promise( //promise constructor

    function(resolve,reject){

        //resolve and reject are inbuilt function provided by javascript to SETTLE promise in either fullfilled or reject state
        //with value and reason respectively;
        //these are passed to executor function (in built)

        let success=true;

        if(success) resolve("Promise resolved");

        else reject("Promise rejected");

    }
);

