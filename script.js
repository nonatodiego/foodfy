const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards) {
  card.addEventListener("click", function(){
    const linkId = card.getAttribute("id")
    modalOverlay.classList.add('active')    
    // modalOverlay.querySelector("iframe").src = ${linkId}
  })
}


document.querySelector(".close-modal").addEventListener("click", function(){
  modalOverlay.classList.remove('active')
  // modalOverlay.querySelector("iframe").src = ""
})

