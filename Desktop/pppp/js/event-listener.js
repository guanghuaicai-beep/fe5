const clearBtn = document.querySelector("#clear");

function onClear(){
    const itemList = document.querySelector("ul");
    const items = itemList.querySelector("li");
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
}
clearBtn.onclick=()=>alert("clear Items");
clearBtn.onclick=()=>console.log("Clear Items");

clearBtn.addEventListener("click",()=>console.log("Clear Items"));

clearBtn.addEventListener("click",onClear);

for(let i=0;i<10;i++){
    setTimeout(()=>clearBtn.click(),5000);
}
setTimeout(()=>clearBtn.removeEventListener("click",onClear),5000);
