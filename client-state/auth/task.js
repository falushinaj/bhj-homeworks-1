
const form = document.querySelector('#signin__form');
const loginInput = document.querySelector('input[name=login]');
const passwordInput = document.querySelector('input[name=password]');
const btnSubmit = document.querySelector('#signin__btn');

form.addEventListener('submit', formSubmit);  // слушаем событие на кнопке войти


async function formSubmit(event) {
    event.preventDefault();   // отменяем отправку по умолчанию
    btnSubmit.disabled = true;   //откл кнопку отправки формы
  
    const formData = new FormData(form);
  
    try {
      const response = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {  //запрос
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {   //если все ок, сохраняем данные пользов и приветствуем
        const data = await response.json();
        const userId = data.user_id;
  
        localStorage.setItem('userId', userId);
  
        welcomeMessage(userId);
      } else {
        throw new Error('Ошибка авторизации'); // если не ок, сообщение об ошибки
      }
    } catch (error) {
      alert(error.message);
    } finally {
      btnSubmit.disabled = false;
    }
  }

  function welcomeMessage(userId) {   //сам блок приветствия
    const welcomeBlock = document.querySelector('#welcome');
    const userIdSpan = welcomeBlock.querySelector('#user_id');
  
    userIdSpan.textContent = userId;
    welcomeBlock.classList.add('welcome_active');
  }
  
  const userId = localStorage.getItem('userId');

if (userId) {    //проверяем если данные пользователя в хранилище и выводим приветствие
  welcomeMessage(userId);
}


