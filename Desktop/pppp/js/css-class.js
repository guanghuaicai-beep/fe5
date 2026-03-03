const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = document.querySelectorAll("li");
function run(){
    console.log(itemList.className);
    text.className = "card dark";
    console.log(itemList.classList);
    itemList.classList.forEach((c)=>console.log(c));
    text.classList.toggle("hidden");
    text.classList.remove("card");
    text.style.lineHeight = "3";
    items.forEach((item,index)=>{
        item.style.color = "red";   
        if(index === 2){
            item.style.color = "blue";
        }
    });
}
document.querySelector("button").onclick = run;