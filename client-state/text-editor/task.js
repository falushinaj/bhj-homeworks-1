const editor = document.getElementById('editor');

editor.addEventListener('input', () => {  // если что-то изменили,  
    localStorage.setItem('editorValue', editor.value); // сохраняем в localStorage
});

window.addEventListener('load', () => {   // при загрузке 
    const infoStored = localStorage.getItem('editorValue');
    if (infoStored) {
        editor.value = infoStored;  // восстанавливаем данные
    }
});
