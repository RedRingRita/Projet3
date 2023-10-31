//ouverture et fermeture de la modal1

const openModal1 = function(e) {
    e.preventDefault
    modal1.style.display = null
    modal1.addEventListener("click", closeModal1)
    //Bouton croix qui ferme la modal 1
    modal1.querySelector(".js-modal1-close").addEventListener("click", closeModal1)
    //Fermer la modal 1 quand on clic à l'exterieur
    modal1.querySelector(".js-modal1-stop").addEventListener("click", stopPropagation)
}

//Fonction de fermeture de la modal 1
const closeModal1 = function (e) {
    if (modal1 === null) return
    e.preventDefault
    modal1.style.display = "none"
    modal1.removeEventListener("click", closeModal1)
    modal1.querySelector(".js-modal1-close").removeEventListener("click", closeModal1)
    modal1.querySelector(".js-modal1-stop").removeEventListener("click", stopPropagation)
}

const stopPropagation = function (e) {
    e.stopPropagation()
}

//Ouverture de la modal1 avec le bouton Modifier
let ouvrirModal1 = document.querySelector(".js-modal1")
ouvrirModal1.addEventListener("click", openModal1)

window.addEventListener("keydown" , function(e){
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal1(e)
    }
})

//Partie qui permet de gérer la modal2

let preview = document.querySelector(".preview")

//Bouton ajouter photo qui ferme la modal1 et ouvre la modal2
let ajoutPhoto = document.querySelector(".js-ajoutPhoto")
ajoutPhoto.addEventListener("click", (event) =>{

    event.preventDefault
    modal1.style.display = "none"
    modal2.style.display = null

    modal2.addEventListener("click", closeModal2)
    //Bouton croix qui ferme la modale 2
    modal2.querySelector(".js-modal2-close").addEventListener("click", closeModal2)
    //Fermer la modal2 quand on clic à l'exterieur
    modal2.querySelector(".js-modal2-stop").addEventListener("click", stopPropagation)
})

//Bouton de retour arrière
let backButton = document.querySelector(".backButton")
backButton.addEventListener("click", () => {

    preview.innerHTML = ` <i class="fa-regular fa-image fa-6x"></i> `

    try{
        let msgErreur = document.querySelector(".msgErreur")
        let parentError = msgErreur.parentNode
        
        if(msgErreur){
            parentError.removeChild(msgErreur)
        }
    }catch{}

    modal1.style.display = null
    modal2.style.display = "none"
    reset.click()
})

//Fonction qui s'occupe de fermer la modal2
const closeModal2 = function (e) {
    if (modal2 === null) return
    e.preventDefault
    
    preview.innerHTML = `<i class="fa-regular fa-image fa-6x"></i>`

    try{
        let msgErreur = document.querySelector(".msgErreur")
        let parentError = msgErreur.parentNode
        
        if(msgErreur){
            parentError.removeChild(msgErreur)
        }
    }catch{}

    modal2.style.display = "none"
    modal2.removeEventListener("click", closeModal1)
    modal2.querySelector(".js-modal2-close").removeEventListener("click", closeModal1)
    modal2.querySelector(".js-modal2-stop").removeEventListener("click", stopPropagation)
    reset.click()
}