// Récupération des travaux depuis l'API
const reponse = await fetch("http://localhost:5678/api/works")
const travaux = await reponse.json()

// Génération des Figures dans le html

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
    
    gallery.appendChild(fiche)
    fiche.appendChild(imageElement)
    fiche.appendChild(figcaptionElement)
}