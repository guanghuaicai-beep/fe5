function insertElement(){
    const fliter = document.querySelector(".filter");
    const h1 = document.createElement("h1");
    h1.textContent = "insertAdjacementElement";
    fliter.insertAdjacentElement("beforebegin",h1);
    const h1after = document.createElement("h1");
    h1after.textContent = "insertAdjacementElement";
    const filter1 = document.querySelector(".filter");
    filter1.insertAdjacentElement("afterend",h1after);
    // fliter.insertAdjacentElement("afterend",h1);
}
insertElement();

function insertText(){
    const item = document.querySelector("li:first-child");
    item.insertAdjacentText("beforebegin","before-begin");
    item.insertAdjacentText("afterbegin","after-begin");
}
insertText();

function insertHTML(){
    const clearBtn = document.querySelector("#clear");
    clearBtn.insertAdjacentHTML("beforebegin","<h2>before-begin</h2>");
    clearBtn.insertAdjacentHTML("afterend","<h2>after-end</h2>");
}
insertHTML();

function insertBeforeItem(){
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = "insert-Before";
    const thirdItem = document.querySelector("li:nth-child(3)");
    ul.insertBefore(li,thirdItem);
}
insertBeforeItem();

function insertAfter(newEl,existingEl){
    existingEl.parentElement.insertBefore(newEl,existingEl.nextSibling);
}
function insertAfterItem(){
    const li = document.createElement("li");
    li.textContent = "insert-After";
    const thirdItem = document.querySelector("li:first-child");
    insertAfter(li,thirdItem);
}
insertAfterItem();

