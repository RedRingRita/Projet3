// Query selectors
const logout = document.querySelector(".login")
const modeEdition = document.querySelector(".modeEdition")
const filtres = document.querySelector(".filtres")
const jsModal = document.querySelector(".js-modal1")

//Récupération du token lors du login (format 'string')
let tokenStored = window.localStorage.getItem("token")
//Transformation du string tokenStored en objet JSON
let token = JSON.parse(tokenStored)


try{
    if (token.token !== null){
        logout.textContent = "logout"
        logout.classList.add("logout")
        // logout.classList.remove("login")
        modeEdition.style.display = null
        filtres.style.display="none"
        jsModal.style.display=null
    }else{
        modeEdition.style.display = "none"
        filtres.style.display=null
        jsModal.style.display="none"
    }
} catch{
    console.log("Déconnecté")
}