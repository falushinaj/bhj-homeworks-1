const modal = document.getElementById('subscribe-modal');
const closePopup = modal.querySelector('.modal__close');

function showModal() {
  modal.classList.add('modal_active');  // показ окна
}

function closeModal() {   // закрыть окно и сохр cookie
  modal.classList.remove('modal_active'); 
  document.cookie = "modalClosed=true";
}

if (document.cookie.indexOf("modalClosed") === -1) {  // проверяем есть ли эти cookie
  showModal(); // показ окно
}

closePopup.addEventListener('click', closeModal); //закрыть окно
