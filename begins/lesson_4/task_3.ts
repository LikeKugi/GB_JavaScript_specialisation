for (let i = 11; i < 34; i+=1) {
  console.log(i);
}

for (let i = 0; i < 101; i++) {
  (i % 2) ? console.log(i) : null;
}

// Создать переменную с заданным числом. Умножайте число на 3 столько раз,
// пока результат умножения не станет больше 1000. Какое число получится?
// Посчитайте количество итераций, необходимых для этого.
//

let a = 5;
let count = 0;
while (a <= 1000) {
  count += 1;
  a *= 3;
}

console.log(count, a);
