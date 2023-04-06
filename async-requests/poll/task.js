const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');

fetch('https://students.netoservices.ru/nestjs-backend/poll')   // GET-запрос на сервер 
  .then(response => response.json())
  .then(data => {
    
    title.textContent = data.data.title; // заголовок опроса
   
    for (const answer of data.data.answers) {    // кнопки для ответов
      const button = document.createElement('button');
      button.className = 'poll__answer';
      button.textContent = answer;

      button.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      });

      answers.appendChild(button);  // добавляем кнопку на страницу
    }
  })
  .catch(error => console.error(error));





