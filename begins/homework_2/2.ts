const form = document.querySelector('.form');
const resultField = document.querySelector('#result') as HTMLSpanElement;

if (form instanceof HTMLFormElement) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const result: boolean = form.money.value === 'true';
    resultField.textContent = result ? 'Скоро будем у вас ;)' : 'До свидания.';
  });
}
