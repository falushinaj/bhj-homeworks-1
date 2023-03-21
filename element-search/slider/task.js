
const prevBut = document.querySelector('.slider__arrow_prev');
const nextBut = document.querySelector('.slider__arrow_next');
const sliderItems = document.querySelectorAll('.slider__item');

function changeActiveSlide(ind) {
    sliderItems.forEach(item => {
        item.classList.remove('slider__item_active'); 
    });
    sliderItems[ind].classList.add('slider__item_active');
}

prevBut.addEventListener('click', () => {
  let activeIndex = (sliderItems.findIndex(item => item.classList.contains('slider__item_active')) - 1 + sliderItems.length) % sliderItems.length;
  if (activeIndex < 0) {
    activeIndex = sliderItems.length - 1;
  }
  changeActiveSlide(activeIndex);
});

nextBut.addEventListener('click', () => {
  let activeIndex = (sliderItems.findIndex(item => item.classList.contains('slider__item_active')) + 1) % sliderItems.length;
  if (activeIndex >= sliderItems.length) {
    activeIndex = 0;
  }
  changeActiveSlide(activeIndex);
});
