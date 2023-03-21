
// const menuLink = document.querySelectorAll('.menu__link');

// for (let i = 0; i < menuLink.length; i++) {
//   menuLink[i].addEventListener('click', function(event) {
//     event.preventDefault(); // отменяем стандартное действие ссылки, чтобы страница не перезагружалась.

//     const subMenu = this.closest('.menu__item').querySelector('.menu_sub'); // ищем элемент-родитель с классом menu_sub
    
//     if (subMenu) { 
//       subMenu.classList.toggle('menu_active');
//     }
//   });
// }




const menuLink = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', function(event) {
    const subMenu = this.closest('.menu__item').querySelector('.menu_sub'); // ищем элемент-родитель с классом menu_sub
    
    if (subMenu) { // если меню с вложением
      event.preventDefault(); // запрещаем переход по ссылке
      subMenu.classList.toggle('menu_active'); // переключаем у него класс menu_active с помощью toggle
    } else {
      // для ссылок без подменю не запрещаем переход по ссылке
      return true;
    }
  });
}




