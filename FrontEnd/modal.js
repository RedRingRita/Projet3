let modal = null
let contenuModal = document.querySelector(".modal-wrapper")

const openModal = function(e) {
    e.preventDefault
    const target = document.querySelector(e.target.getAttribute("href"))
    target.style.display = null
    target.removeAttribute("aria-hidden")
    target.setAttribute("aria-modal", "true")
    modal = target
    modal.addEventListener("click", closeModal)
    modal.querySelector(".js-modal-close").addEventListener("click", closeModal)
    modal.querySelector(".js-modal-stop").addEventListener("click", stopPropagation)
}

const closeModal = function (e) {
    if (modal === null) return
    e.preventDefault
    modal.style.display = "none"
    modal.setAttribute("aria-hidden", "true")
    modal.removeAttribute("aria-modal")
    modal.removeEventListener("click", closeModal)
    modal.querySelector(".js-modal-close").removeEventListener("click", closeModal)
    modal.querySelector(".js-modal-stop").removeEventListener("click", stopPropagation)
    modal = null
    
}

const stopPropagation = function (e) {
    e.stopPropagation()
}

document.querySelectorAll(".js-modal").forEach(a => {
    a.addEventListener("click", openModal)
})

window.addEventListener("keydown" , function(e){
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal(e)
    }
})

let boutonAjouter = document.querySelector(".addPhotoButton")
boutonAjouter.addEventListener("click", () =>{
    console.log("Bouton ajouter photo clicked")
    contenuModal.innerHTML = `
        <button class="closeButton js-modal-close">
        <i class="fa-solid fa-xmark fa-xl"></i>
    </button>
    <h3>Ajout photo</h3>
    <div class="galleryContent">
        <div class="glisserPhoto">
            <div>+ Ajouter photo</div>
            <div>jpg, png : 4mo max</div>
        </div>
        <section id="ajout">
            <form action="#" method="post">
                <label for="titre">Titre</label>
                <input type="text" name="titre" id="titre">
                <label for="categorie">Catégorie</label>
                <input type="text" name="categorie" id="categorie">
            </form>
        </section>
    </div>

    <div class="valider">
        <button>Valider</button>
    </div>
    `
})

