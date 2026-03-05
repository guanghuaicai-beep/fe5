const logo = document.querySelector("header");
logo.addEventListener("click",(e)=>{
    console.log(e);
    console.log(e.currentTarget);
})
function onClick(e){
    console.log(e.target);
    console.log(e.currentTarget);
    e.target.style.background = "red";
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.offsetX);
    console.log(e.offsetY);
}
document.querySelector("a").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("link is clicked");
});
logo.addEventListener("click",onClick);
function onDrag(e){
    document.querySelector("h1").textContent = `x:${e.clientX},y:${e.clientY}`;
}
logo.addEventListener("drag",onDrag);
