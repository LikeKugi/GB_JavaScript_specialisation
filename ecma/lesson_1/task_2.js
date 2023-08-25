const getEvenNumbers = (arr) => arr.filter(el => !(el % 2));
console.log(getEvenNumbers([1, 2, 3, 2, 4, 1, 5]));

const calculateAverage = (arr) => arr.reduce((a, x) => a + x, 0) / arr.length;
console.log(calculateAverage([1, 2, 3, 2, 4, 1, 5]));

const capitalizeFirstLetter = (str) => str.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ');

console.log(capitalizeFirstLetter("capitalize first letter"));
