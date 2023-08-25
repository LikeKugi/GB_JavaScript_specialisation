const mergeArrays = (...arrs) => arrs.reduce((total, x) => [...total, ...x], []);

console.log(mergeArrays([1, 2, 3], [4, 5, 6]) )

const removeDuplicates = (...arr) => [...new Set(arr)];

console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));
