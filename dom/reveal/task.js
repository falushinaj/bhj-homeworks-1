const reveals = document.querySelectorAll('.reveal');

function revealElements() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top; //для кажд элемента получаем координаты с пом этого метода (относит окна браузера)
    const revealPoint = 150; // высота в пикселях появления элемента

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('reveal_active'); // добавляем класс
    }
  }
}

window.addEventListener('scroll', revealElements);
