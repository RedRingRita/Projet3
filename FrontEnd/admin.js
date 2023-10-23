//Récupération du token lors du login (format 'string')
let tokenStored = window.localStorage.getItem("token")
//Transformation du string tokenStored en objet JSON
let token = JSON.parse(tokenStored)

if (token.token !== null){
    const loginOut = document.querySelector(".loginOut")
    loginOut.innerHTML= `
    <a href="index.html">logout</a>
    `

    // const projectsModif = document.querySelector("hidden")
    // console.log(projectsModif)
    // projectsModif.removeAttribute("hidden")
}




