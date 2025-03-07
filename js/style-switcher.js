const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("style-switcher-open");
})


window.addEventListener("scroll", () => {

    if (document.querySelector(".style-switcher").classList.contains("style-switcher-open")){
        document.querySelector(".style-switcher").classList.remove("style-switcher-open");
    }   
})


const  alternatestyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternatestyle.forEach((style) => {
         if(color=== style.getAttribute("title")){
             style.removeAttribute("disabled")
         }
         else{
            style.setAttribute("disabled","true")
         }
    })
}


const dayNight = document.querySelector(".day-night");
 dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
 })

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-regular fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})