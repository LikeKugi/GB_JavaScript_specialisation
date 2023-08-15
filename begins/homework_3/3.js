"use strict";

const findMaxOfNumbers = (...numbers) => Math.max(...numbers);

const btn3 = document.querySelector('#calcThird');
const input31 = document.querySelector('#third1');
const input32 = document.querySelector('#third2');
const input33 = document.querySelector('#third3');
const resultThird = document.querySelector('#resultThird');

if (btn3 instanceof HTMLButtonElement) {
  btn3.addEventListener('click', () => {
    const num1 = +input31.value;
    const num2 = +input32.value;
    const num3 = +input33.value;
    if (!Number.isFinite(num1) || !Number.isFinite(num2) || !Number.isFinite(num3)) return;
    resultThird.innerHTML = findMaxOfNumbers(num1, num2, num3).toString();
  })
}

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения,
три числа. Проверять их не нужно.
*/

// Здесь пишем решение, данный комментарий необходимо стереть.
