//Query Selectors
let upload = document.querySelector(".parcourirPc")
let customUploadBtn = document.querySelector(".customUploadBtn")
let submit = document.querySelector(".submit")
let erreurMessage = document.querySelector(".erreurMessage")
let validerBtn = document.querySelector(".validerAjoutPhoto")
let preview = document.querySelector(".preview")
let ajoutProjet = document.querySelector(".addProject")

const backendBaseUrl = "http://localhost:5678"

const works = await fetch(backendBaseUrl + "/api/works")
const travaux = await works.json()

customUploadBtn.addEventListener("click", () => {
    upload.click()
})

upload.addEventListener("change", (previewProjet))

//Fonction permettant d'avoir un aperçu de l'image choisie
function previewProjet() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  var curFiles = upload.files //On place dans cette variable l'image choisie

  //Si rien n'est choisie l'icone "image vide" s'affiche
  if (curFiles.length === 0) {
    var para = document.createElement("p")
    para.innerHTML= `<i class="fa-regular fa-image fa-6x">`
    preview.appendChild(para)
  }else {
      //L'image choisie apparait comme une objet dans le script, on parcours celui ci pour vérifier si type est conforme aux types de fichiers accepté.
      for(let i = 0 ; i < curFiles.length ; i++) {
          //Si oui on créé un élément image et on affiche sa miniature
          if (validFileType(curFiles[i])){
              let flexImg = document.createElement("div")
              let image = document.createElement("img");
              image.src = window.URL.createObjectURL(curFiles[i])
              flexImg.appendChild(image)
              preview.appendChild(flexImg)
          }
      }
  }
}
//On vérifie si le type de fichier correspond
var fileTypes = ["image/jpeg", "image/jpg", "image/png"];
function validFileType(file) {
  for (var i = 0; i < fileTypes.length; i++) {
    if (file.type === fileTypes[i]) {
      return true
    }
  }
  return false
}

//Partie permettant la récupération du formulaire d'envoi

//Récupération du token lors du login (format 'string')
let tokenStored = window.localStorage.getItem("token")
//Transformation du string tokenStored en objet JSON
let token = JSON.parse(tokenStored)


infoProjet.addEventListener("submit", (event) => {
  event.preventDefault()

console.log(erreurMessage)

  let projetFormdata = new FormData(event.target)
  console.log(projetFormdata)

  gererForm(projetFormdata)

  fetch(backendBaseUrl + "/api/works", {
      method: "POST",
      body: projetFormdata,
      headers: {"Authorization" : `Bearer ${token.token}`},
  })
  .then(async (response) => {
    //Si la requête est valide, on créé lle nouveua projet dans les galeries, on reset le formulaire et on supprime le message d'erreur s'il existe.
    if (response.ok) {
      alert("Projet envoyé !")
      const newWorkItem = await response.json();
      window.createWorkItemInModal(newWorkItem);
      reset.click()
      if(erreurMessage){
        erreurMessage.remove()
      }
    }
    previewProjet()
  })
})

// Fonction d'intégration du message d'erreur dans le HTML
function afficherMessageErreur(message){
    
  erreurMessage = document.createElement("div")
  erreurMessage.classList = "msgErreur"
  ajoutProjet.appendChild(erreurMessage)
  erreurMessage.textContent = message
}

//Fonction qui gère les informations du formulaire pour afficher ou non le message d'erreur
function gererForm(form){
  try{
    if(form.get("title") === "" || form.get("category") === ""){
          throw new Error ("Formulaire incomplet")
      }
  }catch(erreur){
      afficherMessageErreur(erreur.message)
  }
}