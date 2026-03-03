const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title","My element");
// div.innerText = "hello world";
const text = document.createTextNode("Hello world");
div.appendChild(text);
document.querySelector("ul").appendChild(div);
function createListItem(item){
    const li = document.createElement("li");
    li.innerHTML = `${item}
                    <button class="remove-item btn-link text-red"><i class="fa-brands fa-docker"></i></button>`;
    document.querySelector(".items").appendChild(li);
}
createListItem("egg");
function createNewItem(item){
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    // const button = createButton("remove-item btn-link text-red");
    // const icon = createIcon("fa-solid fa-xmark");
    const button = createItem("remove-item btn-link text-red");
    const icon = createItem("fa-solid fa-xmark")
    button.appendChild(icon);
    li.appendChild(button);
    document.querySelector(".items").appendChild(li);
}
function createItem(classes, element){
    const item=document.createElement(element);
    item.className = classes;
    return item;
}
function createIcon(classes){
    const icon = document.createElement("i");
    icon.className=classes;
    return icon;
}
function createButton(classes){
    const button = document.createElement("button");
    button.className=classes;
    return button;
}
createNewItem("button2");