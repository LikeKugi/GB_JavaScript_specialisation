const createCalculator = (initialValue) => {
  let current = initialValue;
  return {
    add: (a) => {
      current += a;
    },
    subtract: (a) => {
      current -= a;
    },
    valueOf() {
      return current;
    }
  }
}

const calc = createCalculator(5);
calc.add(1);
console.log(+(calc));
calc.subtract(2);
console.log(+(calc))
