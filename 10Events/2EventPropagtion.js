div=document.getElementById("div");

let button3=document.getElementById("btn 3");

if (div && button3) {
    div.addEventListener("click", (e) => {console.log("Div Clicked");console.log(e);}, false);
    button3.addEventListener("click", (e) => {console.log("button 3 Clicked");console.log(e);}, false);
} else {
    console.error("Element not found");
}