const allbtn = document.querySelectorAll(".btn");
// console.log(allbtn);
allbtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        alert("敬請期待");
    })
})