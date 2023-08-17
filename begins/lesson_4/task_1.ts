const t1arr = [1, 2, 3];

t1arr.forEach(el => console.log(el));

const t1arr2 = [1, 5, 2, 'fer', 4];
console.log('Length --> ', t1arr2.length);

const t1arr3: Array<number | string> = ['a', 'b', 'c'];

console.log(t1arr3);
t1arr3[0] = 1;
t1arr3[1] = 2;
t1arr3[2] = 3;
console.log(t1arr3);
