
const tabs = document.querySelectorAll('.tabs');

tabs.forEach(function(elem) {

  const tabNavigation = elem.querySelector('.tab__navigation');
  const tabContents = elem.querySelector('.tab__contents');
  const tabLinks = tabNavigation.querySelectorAll('.tab');

  tabLinks.forEach(function(tabLink) {
    tabLink.addEventListener('click', function(event) {
      event.preventDefault();

      const tabIndex = Array.from(tabLinks).indexOf(event.target); // поиск индекса вкладки

      tabLinks.forEach(function(link) {
        link.classList.remove('tab_active');
      });
      event.target.classList.add('tab_active');

      const tabContent = tabContents.querySelector(`.tab__content:nth-child(${tabIndex + 1})`);
      const tabContentsAll = tabContents.querySelectorAll('.tab__content');
      tabContentsAll.forEach(function(content) {
        content.classList.remove('tab__content_active');
      });
      tabContent.classList.add('tab__content_active');
    });
  });
});

