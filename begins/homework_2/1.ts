const form = document.querySelector('.form');
const resultField = document.querySelector('#result') as HTMLSpanElement;

if (form instanceof HTMLFormElement) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let resultText = 'Одно или более значений некорректно.';
    const firstNumber = (form[0] as HTMLInputElement).value;
    const secondNumber = (form[1] as HTMLInputElement).value;
    const isValidFirst = !Number.isNaN(firstNumber) && +firstNumber > 0;
    const isValidSecond = !Number.isNaN(secondNumber) && +secondNumber < 0;
    if (isValidFirst && isValidSecond) {
      resultText = 'Все значения верные.';
    }
    resultField.textContent = resultText;
  });
}
