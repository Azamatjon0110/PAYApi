var elHeader = document.querySelector(".site-header")
var elBars = document.querySelector(".site-header__menu-btn")
var elClose = document.querySelector(".sitenav__close")

elBars.addEventListener("click", ()=> {
    elHeader.classList.add("sitenav-on")
})

elClose.addEventListener("click", ()=> {
elHeader.classList.remove("sitenav-on")
})