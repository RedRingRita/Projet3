// Query selectors
let btnProjets = document.querySelector(".projets")
let btnContact = document.querySelector(".contact")
let btnLogin = document.querySelector(".login")
let logout = document.querySelector(".logout")

//Bouton projets
btnProjets.addEventListener("click", () => {
    login.style.display="none"
    contact.style.display= null
    introduction.style.display= null
    portfolio.style.display= null
})

//Bouton contact
btnContact.addEventListener("click", () => {
    login.style.display="none"
    contact.style.display= null
    introduction.style.display= null
    portfolio.style.display= null
})

//Bouton login
btnLogin.addEventListener("click", () => {
    login.style=null
    contact.style.display= "none"
    introduction.style.display= "none"
    portfolio.style.display= "none"
})

//Pour se déconnecter on vide le cache en appuyant sur logout
try{
    logout.addEventListener("click", () => {
        window.localStorage.clear()
        document.location.href="index.html"
        console.log("Déconnecté")
    })
}catch{}