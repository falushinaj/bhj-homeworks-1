
const menuLink = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', function(event) {
    event.preventDefault(); // отменяем стандартное действие ссылки, чтобы страница не перезагружалась.

    const subMenu = this.closest('.menu__item').querySelector('.menu_sub'); // ищем элемент-родитель с классом menu_sub
    
    if (subMenu) { // если меню, то переключаем у него класс menu_active с помощью toggle
      subMenu.classList.toggle('menu_active');
    }
  });
}