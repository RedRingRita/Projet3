// Récupération des travaux depuis l'API
const reponse = await fetch("http://localhost:5678/api/works")
const travaux = await reponse.json()

//Récupération du token lors du login (format 'string')
let tokenStored = window.localStorage.getItem("token")
//Transformation du string tokenStored en objet JSON
let token = JSON.parse(tokenStored)

// Génération des différents éléments pour afficher les travaux

function genererTravaux(travaux){
    for (let i = 0 ; i < travaux.length ; i++){
    
        const figure = travaux[i]
        
        //Création de la balise figure
        const fiche = document.createElement("figure")
    
        //Création de la balise img avec la source et le alt
        const imageElement = document.createElement("img")
        imageElement.src = figure.imageUrl
        imageElement.alt = figure.title
        
        //Création de la balise figcaption avec la source
        const figcaptionElement = document.createElement("figcaption")
        figcaptionElement.innerText = figure.title
        
        // Attribution des Figures à la div "gallery"
        const gallery = document.querySelector(".gallery")
        // const modalGallery = document.querySelector(".modal-gallery")
        
        gallery.appendChild(fiche)
        // modalGallery.appendChild(fiche)
        
        fiche.appendChild(imageElement)
        fiche.appendChild(figcaptionElement)
    }
}

function genererTravauxModale(travaux){
    for (let i = 0 ; i < travaux.length ; i++){
    
        const figure = travaux[i]
        
        //Création de la balise figure
        const fiche = document.createElement("figure")
    
        //Création de la balise img avec la source et le alt
        const imageElement = document.createElement("img")
        imageElement.src = figure.imageUrl
        imageElement.alt = figure.title

        //Création de l'icone poubelle pour supprimer des travaux
        let btnDelete = document.createElement("button")
        btnDelete.classList.add("delete")
        btnDelete.id = i+1
        let trashElement = document.createElement("i")
        trashElement.classList.add("fa-solid")
        trashElement.classList.add("fa-trash-can")

        //Gestion de la suppression des travaux
        btnDelete.addEventListener("click", ()=>{
            console.log(btnDelete.id, figure.id)
            fetch(`http://localhost:5678/api/works/${figure.id}`, {
                method : "DELETE",
                headers: {"Authorization" : `Bearer ${token.token}`},
            })
            .then((response) => {
                if(response.ok) {
                    console.log("Projet supprimé")
                    fiche.remove()
                }
            })
        })
        
        // Attribution de Figure à la div "modal-gallery"
        const modalGallery = document.querySelector(".modal-gallery")
        
        modalGallery.appendChild(fiche)
        btnDelete.appendChild(trashElement)
        fiche.appendChild(btnDelete)
        fiche.appendChild(imageElement)
        fiche.classList = figure.id
    }
}

genererTravaux(travaux)
genererTravauxModale(travaux)

// Les différents boutons filtre

const btnFiltreTous = document.querySelector(".btn-tous")
btnFiltreTous.addEventListener("click", ()=>{
    const tousFiltre = travaux.filter(function (travaux){
        return travaux
    })
    document.querySelector(".gallery").innerHTML=""
    genererTravaux(tousFiltre)
})

const btnFiltreObjets = document.querySelector(".btn-objets")
btnFiltreObjets.addEventListener("click", () =>{
    const objetsFiltre = travaux.filter(function (travaux){
        return travaux.category.name === "Objets"
    })
    document.querySelector(".gallery").innerHTML=""
    genererTravaux(objetsFiltre)
})

const btnFiltreAppartements = document.querySelector(".btn-appartements")
btnFiltreAppartements.addEventListener("click", () =>{
    const appartementsFiltre = travaux.filter(function (travaux){
        return travaux.category.name === "Appartements"
    })
    document.querySelector(".gallery").innerHTML=""
    genererTravaux(appartementsFiltre)
})

const btnFiltreHotels = document.querySelector(".btn-hotels")
btnFiltreHotels.addEventListener("click", () =>{
    const hotelsFiltre = travaux.filter(function (travaux){
        return travaux.category.name === "Hotels & restaurants"
    })
    document.querySelector(".gallery").innerHTML=""
    genererTravaux(hotelsFiltre)
})

