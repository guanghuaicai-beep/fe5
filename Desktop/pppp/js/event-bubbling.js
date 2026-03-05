const button = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(2)");
const form = document.querySelector("form");
button.addEventListener("clicl",(e)=>{
    alert("button was clicked");
    e.stopPropagation();
})
div.addEventListener("click",(e)=>{
    alert("div was clicked");
})
form.addEventListener("click",(e)=>{
    alert("form was clicked");
})
document.body.addEventListener("click",(e)=>{
    alert("body was clicked");
})
const listItem  = document.querySelectorAll("li");
listItem.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        e.target.remove();
    });
});