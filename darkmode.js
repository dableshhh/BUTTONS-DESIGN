const inpute=document.querySelector(".input")

const bodye=document.querySelector("body")
updatebody()

function updatebody(){
    if(inpute.checked){
        bodye.style.background="black"
    }
    else{
        bodye.style.background="white"
    }
}

inpute,addEventListener("input",()=>{
    updatebody()
})
