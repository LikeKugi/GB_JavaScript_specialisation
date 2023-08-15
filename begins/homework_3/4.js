"use strict";

const sum = (a, b) => a + b;
const dif = (a, b) => Math.max(a, b) - Math.min(a, b);
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const btnSum = document.querySelector('#sumFourth');
const btnDif = document.querySelector('#difFourth');
const btnMul = document.querySelector('#mulFourth');
const btnDiv = document.querySelector('#divFourth');
const input41 = document.querySelector('#fourth1');
const input42 = document.querySelector('#fourth2');
const resultFourth = document.querySelector('#resultFourth');

if (btnSum instanceof HTMLButtonElement) {
  btnSum.addEventListener('click', () => {
    const num1 = +input41.value;
    const num2 = +input42.value;
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) return;
    resultFourth.innerHTML = sum(num1, num2).toString();
  })
}

if (btnDif instanceof HTMLButtonElement) {
  btnDif.addEventListener('click', () => {
    const num1 = +input41.value;
    const num2 = +input42.value;
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) return;
    resultFourth.innerHTML = dif(num1, num2).toString();
  })
}

if (btnMul instanceof HTMLButtonElement) {
  btnMul.addEventListener('click', () => {
    const num1 = +input41.value;
    const num2 = +input42.value;
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) return;
    resultFourth.innerHTML = mul(num1, num2).toString();
  })
}

if (btnDiv instanceof HTMLButtonElement) {
  btnDiv.addEventListener('click', () => {
    const num1 = +input41.value;
    const num2 = +input42.value;
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) return;
    resultFourth.innerHTML = div(num1, num2).toString();
  })
}


/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

// Здесь пишем решение, данный комментарий необходимо стереть.
