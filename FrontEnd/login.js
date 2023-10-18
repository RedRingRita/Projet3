// Fonction permettant de vérifier les accréditations entrées dans le formulaire de login
function validerLogin(email, mdp){
    if (email !== "sophie.bluel@test.tld"){
        throw new Error ("Email ou mot de passe incorrect")
    }

    if(mdp !== "S0phie"){
        throw new Error ("Email ou mot de passe incorrect")
    }
}

// Fonction d'intégration du message d'erreur dans le HTML
function afficherMessageErreur(message){
    let erreurMessage = document.getElementById("erreurMessage")

    if (!erreurMessage){
        let sectionLogin = document.getElementById("login")
        erreurMessage = document.createElement("p")
        erreurMessage.id = "erreurMessage"

        sectionLogin.append(erreurMessage)
    }
    erreurMessage.innerText = message
}

// Fonction qui s'occupe de gérer les valeurs entrées dans le formulaire
function gererLogin(){
    try{
        let champsMail = document.getElementById("mail")
        let mail = champsMail.value

        let champsMdp = document.getElementById("passw")
        let mdp = champsMdp.value
        validerLogin(mail, mdp)    
    } catch(erreur){
        afficherMessageErreur(erreur.message)
    }
}

let formLogin = document.querySelector("form")
formLogin.addEventListener("submit", (event) =>{
    event.preventDefault()
    gererLogin()
})