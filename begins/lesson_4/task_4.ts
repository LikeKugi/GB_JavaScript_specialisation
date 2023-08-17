// Создать массив `[2, 5, 9, 15, 1, 4]`.
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

const t4arr1 = [2, 5, 9, 15, 1, 4];
console.log(t4arr1.filter(el => el > 3 && el < 10))

// Найдите сумму четных чисел от 2 до 100.

let sum = 0;
for (let i = 2; i <= 100; i+=2) {
  sum += i;
}

console.log(sum);

// Создать массив `[2, 5, 9, 3, 1, 4]`.
// Найдите сумму элементов этого массива.

const t4arr2 = [2, 5, 9, 3, 1, 4];
console.log(t4arr2.reduce((a, x) => a + x, 0));

// С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

let str = '-';
for (let i = 1; i < 10; i+=1) {
  str += `${i}-`
}
console.log(str);

// Создать массив `[2, 5, 9, 0, 3, 1, 4]`.
// Запустите цикл, который будет по очереди выводить элементы этого массива в
// консоль до тех пор, пока не встретится элемент со значением 0. После этого
// цикл должен завершить свою работу.

const t4arr3 = [2, 5, 9, 0, 3, 1, 4];

for (const number of t4arr3) {
  if (!number) break;
  console.log(number);
}