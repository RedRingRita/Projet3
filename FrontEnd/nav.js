//Bouton projets
let btnProjets = document.querySelector(".projets")
btnProjets.addEventListener("click", () => {
    login.style.display="none"
    contact.style.display= null
    introduction.style.display= null
    portfolio.style.display= null
})

//Bouton contact
let btnContact = document.querySelector(".contact")
btnContact.addEventListener("click", () => {
    login.style.display="none"
    contact.style.display= null
    introduction.style.display= null
    portfolio.style.display= null
})

//Bouton login
let btnLogin = document.querySelector(".login")
btnLogin.addEventListener("click", () => {
    login.style=null
    contact.style.display= "none"
    introduction.style.display= "none"
    portfolio.style.display= "none"
})

//Pour se déconnecter on vide le cache en appuyant sur logout
let logout = document.querySelector(".logout")
logout.addEventListener("click", () => {
    window.localStorage.clear()
    document.location.href="index.html"
    console.log("Déconnecté")
})