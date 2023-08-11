const form = document.querySelector('.form');
const resultField = document.querySelector('#result') as HTMLSpanElement;

if (form instanceof HTMLFormElement) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();


    const givenNumber = Math.trunc(+(form[0] as HTMLInputElement).value);

    let resultText = 'Неверное значение';
    if (Number.isFinite(givenNumber)) {
      const num = Math.abs(givenNumber);
      const units = num % 10;
      const decades = Math.trunc(num / 10) % 10;
      const hundreds = Math.trunc(num / 100) % 100 > 9 ?
        Math.trunc(num / 100) % 100 % 10 :
        Math.trunc(num / 100) % 100;

      resultText = `В числе ${givenNumber} количество сотен: ${hundreds}, десятков: ${decades}, единиц: ${units}`;
    }

    resultField.textContent = resultText;
  });
}
