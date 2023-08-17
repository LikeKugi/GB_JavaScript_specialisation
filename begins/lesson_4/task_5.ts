// Создать массив из 10 случайных чисел от 0 до 100 включительно.
// Необходимо вывести в консоль все числа, которые делятся и на 2, и на 3.

const randint = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1) + min);

const arr = [...Array(10)].map(() => randint());
console.log(arr);
console.log(arr.filter(el => !(el % 6)));

// Дан массив: `[1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]`. Подсчитайте количество
// цифр 3 в этом массиве.
const arr1 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
console.log(arr1.filter(el => el === 3).length);
