const showCurrencies = async () => {
    const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
    const data = await response.json();
  
    const currencies = data.response.Valute;
  
    const items = document.querySelector('#items');
  
    for (let currency in currencies) {
      const item = document.createElement('div');
      item.classList.add('item');
  
      const code = document.createElement('div');
      code.classList.add('item__code');
      code.innerText = currencies[currency].CharCode;
  
      const value = document.createElement('div');
      value.classList.add('item__value');
      value.innerText = currencies[currency].Value;
  
      const currencyElem = document.createElement('div');
      currencyElem.classList.add('item__currency');
      currencyElem.innerText = 'руб.';
  
      item.appendChild(code);
      item.appendChild(value);
      item.appendChild(currencyElem);
  
      items.appendChild(item);
    }
  
    const loader = document.querySelector('#loader');
    loader.classList.remove('loader_active');
  };
  
  showCurrencies();

  