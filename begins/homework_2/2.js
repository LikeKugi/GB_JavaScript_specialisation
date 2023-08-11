const form = document.querySelector('.form');
const resultField = document.querySelector('#result');
if (form instanceof HTMLFormElement) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const result = form.money.value === 'true';
        resultField.textContent = result ? 'Скоро будем у вас ;)' : 'До свидания.';
    });
}
//# sourceMappingURL=2.js.map