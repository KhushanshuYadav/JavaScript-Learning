function fun(e){

    window.alert("button clicked 0");
    console.log(e);


}
function fun1(e){

    console.log("button clicked 1");
    console.log(e);


}
let button =document.getElementById("btn");
button.addEventListener("click",fun,false);
button.addEventListener("click",fun1,false);