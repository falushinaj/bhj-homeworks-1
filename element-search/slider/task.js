const prevBut = document.querySelector('.slider__arrow_prev');
const nextBut = document.querySelector('.slider__arrow_next');
const sliderItems = document.querySelectorAll('.slider__item');

let activeSlideIndex = 0;

// Функция, которая изменяет активный слайд и переключает классы 
function changeActiveSlide(ind) {
    sliderItems.forEach(item => {
        item.classList.remove('slider__item_active'); 
    });
    sliderItems[ind].classList.add('slider__item_active');
}

prevBut.addEventListener('click', () => {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
        activeSlideIndex = sliderItems.length - 1;
    }
    changeActiveSlide(activeSlideIndex);
});

nextBut.addEventListener('click', () => {
    activeSlideIndex++;
    if (activeSlideIndex >= sliderItems.length) {
        activeSlideIndex = 0;
    }
    changeActiveSlide(activeSlideIndex);
});
