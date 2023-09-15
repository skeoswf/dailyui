const buttons = document.querySelector("button"); 
const choosetext = document.querySelector("#choosetext")

buttons.addEventListener("click", function() {
    choosetext.classList.add("choosetextPhase2")
})