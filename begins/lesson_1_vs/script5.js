// Задание 5:
// 1. Запишите в переменную `a` число `0.1`, а в переменную `b` - число `0.2`. Найдите сумму значений этих переменных и выведите ее на экран.
// 2. Создайте переменную `c`, запишите в нее какое-нибудь положительное или отрицательное число. Выведите на экран это число с обратным знаком.
// Тайминг: 5 минут.

const a = 0.1;
const b = 0.2;

const sum = a + b;
console.log(sum);

const variable = 55.523;
console.log('VARIABLE >>> ', variable);

console.log('FLOOR >>> ', Math.floor(variable));
console.log('ROUND >>> ', Math.round(variable));
console.log('CEIL >>> ', Math.ceil(variable));
console.log('TRUNC >>> ', Math.trunc(variable));
console.log('toFixed >>> ', +variable.toFixed(2));
console.log(Math.floor(variable * 100) / 100);

console.log(('b' + 'a' + +'a' + 'a').toLowerCase());

const c = 55555;
console.log('C >>> ', c);
console.log('-C >>> ', -c);
console.log('-C >>> ', `${-c}`);
