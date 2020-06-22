const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards) {
  card.addEventListener("click", function(){
    // PEGA O ID DO CARD
    const cardID = card.getAttribute("id")
    // ATIVA O MODAL 
    modalOverlay.classList.add('active')

    modalOverlay.classList.add('modal-content')     
    // modalOverlay.querySelector('modal-content') = cardID
  })
}




// FECHAR MODAL 
document.querySelector(".close-modal").addEventListener("click", function(){
  modalOverlay.classList.remove('active')  
})

