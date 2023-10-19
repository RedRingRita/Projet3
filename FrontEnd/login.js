// Fonction d'intégration du message d'erreur dans le HTML
function afficherMessageErreur(message){
    let erreurMessage = document.querySelector(".erreurMessage")

    if (!erreurMessage){
        let sectionLogin = document.querySelector(".formulaire")
        erreurMessage = document.createElement("p")
        erreurMessage.classList = "erreurMessage"

        sectionLogin.prepend(erreurMessage)
    }
    erreurMessage.innerText = message
}

// Fonction affichant un message d'erreur si mauvaise accréditation
function gererLoginV2(log){
    try{
        if(log.email !== "sophie.bluel@test.tld" || log.password !== "S0phie"){
            throw new Error ("Email ou mot de passe incorrect")
        }
    }catch(erreur){
        afficherMessageErreur(erreur.message)
    }
}

//Ajout d'un listener sur le bouton submit
let formLogin = document.querySelector("form")
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
    const token = await reponse.json()

    console.log(token)
    gererLoginV2(log)
})