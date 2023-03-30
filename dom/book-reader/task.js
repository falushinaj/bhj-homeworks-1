let fontSizes = document.querySelectorAll(".font-size"); 
let book = document.getElementById("book");


for (let i = 0; i < fontSizes.length; i++) {
  fontSizes[i].addEventListener("click", function(event) { 
    event.preventDefault(); 

  
    for (let j = 0; j < fontSizes.length; j++) {
      fontSizes[j].classList.remove("font-size_active"); // Удаляем класс
    }

    let size = event.target.dataset.size; // Получаем значение элемента, на который кликнули

    // добавляем соответствующий класс элементу ("book")
    if (size === "small") {
      book.classList.remove("book_fs-big");
      book.classList.add("book_fs-small");
    } else if (size === "big") {
      book.classList.remove("book_fs-small");
      book.classList.add("book_fs-big");
    } else {
      book.classList.remove("book_fs-big", "book_fs-small");
    }

    // Добавляем класс (font-size_active) элементу, на который кликнули
    event.target.classList.add("font-size_active");
  });
}
