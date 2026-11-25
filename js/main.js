const burger = document.querySelector("#burger")
const menu = document.querySelector("#menu")
const nightModButton = document.querySelector("#night-mod-button")

burger.addEventListener("click", function(){
    menu.classList.toggle("open")
})
nightModButton.addEventListener("click", function(){
    document.body.classList.toggle("night")
})