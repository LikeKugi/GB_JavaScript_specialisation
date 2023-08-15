"use strict";

const calcSalaryWithoutTaxes = (num) => num * 0.87;

const btn2 = document.querySelector('#calcSecond');
const input2 = document.querySelector('#second');
const resultSecond = document.querySelector('#resultSecond');

if (btn2 instanceof HTMLButtonElement) {
  btn2.addEventListener('click', () => {
    const num = +input2.value;
    if (!Number.isFinite(num)) {
      resultSecond.innerHTML = "Значение задано неверно";
    } else {
      resultSecond.innerHTML = calcSalaryWithoutTaxes(num);
    }
  })
}

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию
(нужно будет ее создать), которая будет принимать введенное пользователем
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

// Здесь пишем решение, данный комментарий необходимо стереть.
