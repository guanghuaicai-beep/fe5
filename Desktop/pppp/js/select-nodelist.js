const listitems = document.querySelectorAll(".item");
console.log(listitems);
// listitems[0].style.color="red";
console.log(listitems[0].innerText);
listitems[0].style.color="red";
listitems.forEach((item,index)=>{
    item.style.color="blue";
    if(index===1){
        item.remove();
    }
    if(index===0){
        item.innerText="orange";
        item.innerHTML=`Orange
                    <button class="remove-item btn-link text-red"><i class="fa-brands fa-docker"></i></button>`;
    }
});