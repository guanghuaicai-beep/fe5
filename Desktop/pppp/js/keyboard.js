const itemInput = document.getElementById("item-input");
const onKetPress = (e) => console.log("keypress");
itemInput.addEventListener("keypress",onKetPress);
const onKeyUp = e => console.log("keyup");
itemInput.addEventListener("keyup",onKeyUp);
const onKeyDown = (e) =>{
    console.log(123);
    if(e.key === "Enter"){
        console.log("keydown");
    }
    if(e.keyCode === 13){
        alert("enter");
    }
    if(e.code === "digit1"){
        console.log("1 is pressed");
    }
    if(e.repeat){
        console.log(e.key + "is being held down");
    }
    console.log("shift : "+e.shiftKey);
    console.log("ctrl : "+e.ctrlKey);
    console.log("alt : "+e.altKey);
    if(e.shiftKey && e.key === "K"){
        console.log("shift + k is pressed");
    }
}
itemInput.addEventListener("keydown",onKeyDown);    