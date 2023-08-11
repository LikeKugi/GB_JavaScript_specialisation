const form = document.querySelector('.form');
const resultField = document.querySelector('#result') as HTMLSpanElement;

if (form instanceof HTMLFormElement) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let resultText = 'Неверное значение';
    const dayNumber = +(form[0] as HTMLInputElement).value;

    if (Number.isFinite(dayNumber) && dayNumber > 0 && dayNumber < 32) {
      const decade = Math.ceil(dayNumber / 10);
      resultText = `Число ${dayNumber} попадает в ${decade} декаду месяца.`;
    }

    resultField.textContent = resultText;
  });
}
