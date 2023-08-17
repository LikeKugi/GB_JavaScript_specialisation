"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

for (let i = 0; i < 11; i += 1) {
  if (i === 0) {
    console.log(`${i} - is Null`);
  } else if (i % 2) {
    console.log(`${i} - is odd`);
  } else {
    console.log(`${i} - is even`);
  }
}
