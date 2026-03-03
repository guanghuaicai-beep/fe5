function replaceFirstItem(){
    const firstItem = document.querySelector("li:first-child");
    const li = document.createElement("li");
    li.textContent = "Replace Firsr";
    firstItem.replaceWith(li);
}
replaceFirstItem();

function replaceSecondItem(item){
    const seconItem = document.querySelector(`li:nth-child(${item})`);
    seconItem.outerHTML = `<h1>Replace second</h1>`;
}
replaceSecondItem(2);

function replaceAllItem(){
    const items = document.querySelectorAll("li");
    items.forEach((item,index)=>{
        item.outerHTML = index % 2 ? `<li>Replace All</li>` : `<li>Redplace</li>`;
    });
}
replaceAllItem();

function replaceChildHeading(){
    const header = document.querySelector("header");
    const h1 = document.querySelector("h1");
    const h2 = document.createElement("h2");
    h2.id = "app-title";
    h2.textContent = "Shopping List app";
    header.replaceChild(h2,h1);
}
replaceChildHeading();