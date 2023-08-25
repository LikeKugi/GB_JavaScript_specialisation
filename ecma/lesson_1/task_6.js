function sumDigits(num) {
  if (num < 10) return num;
  const digits = num.toString().split('').map(Number).reduce((a, x) => a + x, 0);
  return sumDigits(digits);
}

console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789));
