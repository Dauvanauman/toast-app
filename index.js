let Toast_btn = document.querySelector(".show-toast-btn")

let horizontalPosition = document.querySelector("#horizontal-position")

let verticalPosition = document.querySelector("#vertical-position")

let toast_container = document.querySelector(".tost-container")

let tosttype = document.getElementById("tost-type")

let toast = document.querySelector(".tost");

Toast_btn.addEventListener("click", (e) => {



    if (tosttype.value === "success") {
        let new_tost = document.createElement("div");
        new_tost.classList.add("tost");
        toast_container.append(new_tost)
        new_tost.innerHTML = "this is a toast Massage"
        new_tost.style.backgroundColor = "#4CAF50"
        setTimeout(() => {
            new_tost.remove()
        }, 3000)

    }
    else if (tosttype.value === "error") {
        let new_tost = document.createElement("div");
        new_tost.classList.add("tost");
        toast_container.append(new_tost)
        new_tost.innerHTML = "this is a toast Massage"
        new_tost.style.backgroundColor = "#f44336"
        setTimeout(() => {
            new_tost.remove()
        }, 3000)

    }
    else if (tosttype.value === "warning") {
        let new_tost = document.createElement("div");
        new_tost.classList.add("tost");
        toast_container.append(new_tost)
        new_tost.innerHTML = "this is a toast Massage"
        new_tost.style.backgroundColor = "#ff9800";
        setTimeout(() => {
            new_tost.remove()
        }, 3000)

    }
    else if (tosttype.value === "info") {
        let new_tost = document.createElement("div");
        new_tost.classList.add("tost");
        toast_container.append(new_tost)
        new_tost.innerHTML = "this is a toast Massage"
        new_tost.style.backgroundColor = "#2196F3";
        setTimeout(() => {
            new_tost.remove()
        }, 3000)

    }
    toast_container.classList.remove("left", "right", "bottom");

    if (horizontalPosition.value === "left" && verticalPosition.value === "top") {
        toast_container.classList.add("left")
    }

    else if (horizontalPosition.value === "right" && verticalPosition.value === "top") {
        toast_container.classList.remove("left")
        toast_container.classList.add("right")
    }

    else if (horizontalPosition.value === "left" && verticalPosition.value === "bottum") {
        toast_container.classList.add("bottom")
    }

    else if (horizontalPosition.value === "right" && verticalPosition.value === "bottum") {
        toast_container.classList.add("right");
        toast_container.classList.add("bottom")

    }
 
})




