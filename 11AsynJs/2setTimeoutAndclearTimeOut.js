const fun=function changeText(text,id){
    document.getElementById(id).innerHTML=text;
    console.log("p1 content changed");
}

//rest sync code will node be affectd by asyn ones 

const t1=setTimeout(fun,5000,"Changed Text","txt");
document.getElementById("btn").addEventListener("click",()=>{clearTimeout(t1);console.log("Stopped");});