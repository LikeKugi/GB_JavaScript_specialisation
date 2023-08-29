interface ICalc {
  add: (a: number, b: number) => number
  subtract: (a: number, b: number) => number
  multiply: (a: number, b: number) => number
}

const calculator: ICalc = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a + b,
}

console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2
