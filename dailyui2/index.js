const button1 = document.querySelector("#card");
const button2 = document.querySelector("#paypal")
const choosetext = document.querySelector("#choosetext")
const allInformation = document.querySelector("#cardInformation")



button1.addEventListener("click", function() {
    choosetext.classList.add("choosetextPhase2");
    button1.classList.add("buttonsPhase2")
    button2.classList.add("buttonsPhase2")
    allInformation.classList.toggle("cardInformationPhase2")
    allInformation.classList.toggle("cardInformationFadeIn")
    allInformation.style.visibility = "visible"
})

button2.addEventListener("click", function() {
    choosetext.classList.add("choosetextPhase2");
    button1.classList.add("buttonsPhase2")
    button2.classList.add("buttonsPhase2")
    allInformation.classList.toggle("fadeOutClass")
    // allInformation.style.visibility = "visible"
    // allInformation.classList.add("cardInformationFade")
})
