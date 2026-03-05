const form = document.getElementById
("item-form");
function onSubmit(e){
    e.preventDefault();
    console.log("submit");
    const item = document.getElementById("item-input").value;
    const priority = document.getElementById("priority-input").value;
    console.log(it<em,priority);
    if(item.length<7){
        console.log("input must be least 7 charaters");
    }else{
        form.submit(); 
    }
}
form.addEventListener("submit",onsubmit);
