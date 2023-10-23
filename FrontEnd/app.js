const openModal = function(e) {
    e.preventDefault
    const target = document.querySelector(e.target.getAttribute("href"))
    console.log(target)
    target.style.display = null
    target.removetAttribute("aria-hidden")
    target.setAttribute("aria-modal", "true")
}

document.querySelectorAll(".js-modal").forEach(a => {
    a.addEventListener("click", openModal)
})