/*
1. Создайте две переменные, одна будет хранить ваш возраст (девушкам всегда 18), а другая переменная будет хранить текущий год (все созданные переменные должны быть логично названы).
- Создайте переменную суммы и присвойте сумму чисел из двух переменных.
- Создайте переменную разности и присвойте разность текущего года и вашего возраста.
- Создайте переменную произведения и присвойте произведение чисел двух переменных.
- Создайте переменную частного и присвойте деление чисел текущего года к вашему возрасту.
*/

const currentAge = 27;
const currentYear = new Date().getFullYear();

console.log(currentAge, currentYear);

const sum = currentAge + currentYear;
console.log('sum >>> ', sum);

const difference = currentYear - currentAge;
console.log('difference >>> ', difference);

const multiply = currentAge * currentYear;
console.log('multiply >>> ', multiply);

const divisor = currentYear / currentAge;
console.log('divisor >>> ', divisor);
