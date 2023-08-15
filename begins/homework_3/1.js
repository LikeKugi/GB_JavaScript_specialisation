"use strict";

const cube = (num) => num ** 3;

const btn1 = document.querySelector('#calcFirst');
const input1 = document.querySelector('#first');
const resultFirst = document.querySelector('#resultFirst');

if (btn1 instanceof HTMLButtonElement) {
  btn1.addEventListener('click', () => {
    const num = +input1.value;
    if (!Number.isFinite(num)) return;
    resultFirst.innerHTML = cube(num);
  })
}

/*
Создайте функцию которая принимает число, возводит переданное число в куб и
возвращает полученное значение.
Необходимо продемонстрировать вызов данной функции, с выводом результата,
который получаем от функции, в консоль.
*/

// Здесь пишем решение, данный комментарий необходимо стереть.
