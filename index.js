let Toast_btn = document.querySelector(".show-toast-btn")

let horizontalPosition = document.querySelector("#horizontal-position")
let verticalPosition = document.querySelector("#vertical-position")
console.log(verticalPosition.value)
let toast_container = document.querySelector(".tost-container")
Toast_btn.addEventListener("click", (e)=>{

    toast_container.classList.remove("left", "right", "bottom");
   
    if(horizontalPosition.value === "left" && verticalPosition.value === "top"){
        toast_container.classList.add("left")
    }
  
    else if (horizontalPosition.value === "right"  && verticalPosition.value === "top"){
        toast_container.classList.remove("left")
        toast_container.classList.add("right")
    }

    else if (horizontalPosition.value === "left"  && verticalPosition.value === "bottum"){
        toast_container.classList.add("bottom")
    }

    else if (horizontalPosition.value === "right" && verticalPosition.value === "bottum"){
        toast_container.classList.add("right");
        toast_container.classList.add("bottom")
        
    }
   

    
})



