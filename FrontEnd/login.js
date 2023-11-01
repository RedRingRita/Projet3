//Query Selectors
let erreurMessage = document.querySelector(".erreurMessage")
let formLogin = document.querySelector(".formLogin")
let sectionLogin = document.querySelector(".formLogin")

// Fonction d'intégration du message d'erreur dans le HTML
function afficherMessageErreur(message){

    if (!erreurMessage){
        erreurMessage = document.createElement("p")
        erreurMessage.classList = "erreurMessage"

        sectionLogin.prepend(erreurMessage)
    }
    erreurMessage.innerText = message
}

//Un message d'erreur si mauvais login sinon retour à la page d'accueil
function gererLoginV2(reponse){
    try{
        if(reponse !== 200){
            throw new Error ("Email ou mot de passe incorrect")
        }else {
            window.location.href = "index.html";
        }
    }catch(erreur){
        afficherMessageErreur(erreur.message)
    }
}

//Ajout d'un listener sur le bouton submit du formulaire de login
let idToken
try{
    formLogin.addEventListener("submit", async (event) =>{
        event.preventDefault()
        
        const log = {
            email: event.target.querySelector("[name=mail]").value,
            password: event.target.querySelector("[name=passw]").value
        }
        
        const logJson = JSON.stringify(log)

        const reponse = await fetch("http://localhost:5678/api/users/login", {
            method : "POST",
            headers: {"Content-Type": "application/json"},
            body: logJson
        })
        // regarder dans -> reponse.status
        idToken = await reponse.json()
        
        //placement de idToken dans le local storage pour maintenir la connection ensuite
        window.localStorage.setItem("token", JSON.stringify(idToken))
        gererLoginV2(reponse.status)
    })
}catch{}