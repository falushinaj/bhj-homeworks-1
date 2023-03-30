
const rotators = document.querySelectorAll('.rotator');


rotators.forEach(rotator => {
  const cases = rotator.querySelectorAll('.rotator__case');
 
  let currentCaseIndex = 0;  //счетчик индекса текущего блока

  setInterval(() => {
    
    const currentCase = cases[currentCaseIndex]; // текущий блок
    currentCase.classList.remove('rotator__case_active'); // удаляем класс 
    currentCaseIndex = (currentCaseIndex + 1) % cases.length; // увеличиваем счетчик индекса
    const nextCase = cases[currentCaseIndex]; // Получаем следующий блок
    nextCase.classList.add('rotator__case_active'); // добавляем класс 
  }, 1000);
});
