
let div=document.getElementById("div1");
console.log(div);

function fun(e){
    console.log("clicked");
}

div.addEventListener("click",fun,false)

//due to event propagtion we just added event listner to parent element but it got added to all child elements
//it is an optimized way to add and handle events to various elemnts if nesting is there