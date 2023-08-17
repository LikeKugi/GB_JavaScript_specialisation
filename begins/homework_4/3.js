"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const randint = (min = 0, max = 10) => (Math.floor(Math.random() * (max - min) + min));
const t3arr = [...Array(5)].map(() => randint());

console.log("Сгенерировать массив, содержащий 5 цифр в диапазоне [0, 9]: ", t3arr);
console.log("Сумму элементов массива: ", t3arr.reduce((a, x) => a + x, 0));
console.log("Минимальное значение в массиве: ", Math.min(...t3arr));

const t3arr2 = t3arr.map((x, idx) => x === 3 ? idx : null).filter((x) => Number.isFinite(x));

console.log("Новый массив, содержащий индексы сгенерированного выше массива, в которых значение равно 3: ", t3arr2);

