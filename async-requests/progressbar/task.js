const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  try {
    const answer = await fetch('https://students.netoservices.ru/nestjs-backend/upload', {
      method: 'POST',
      body: formData,
      onUploadProgress: (progressEvent) => {
        const percent = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        progress.value = percent;
      }
    });

    if (answer.ok) {
      alert('Файл успешно загружен');
    } else {
      alert('Произошла ошибка');
    }
  } catch (error) {
    console.error(error);
    alert('Произошла ошибка при загрузке файла');
  }
});
