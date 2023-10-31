//Récupération du token lors du login (format 'string')
let tokenStored = window.localStorage.getItem("token")
//Transformation du string tokenStored en objet JSON
let token = JSON.parse(tokenStored)


try{
    if (token.token !== null){
        const logout = document.querySelector(".login")
        logout.textContent = "logout"
        logout.classList.add("logout")
        // logout.classList.remove("login")

        let modeEdition = document.querySelector(".modeEdition")
        modeEdition.style.display = null
        
        const filtres = document.querySelector(".filtres")
        filtres.style.display="none"
        
        const jsModal = document.querySelector(".js-modal1")
        jsModal.style.display=null
    }else{
        let modeEdition = document.querySelector(".modeEdition")
        modeEdition.style.display = "none"
        
        const filtres = document.querySelector(".filtres")
        filtres.style.display=null
        
        const jsModal = document.querySelector(".js-modal1")
        jsModal.style.display="none"
    }
}catch{
    console.log("Déconnecté")
}