/**
 * Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
 * найти минимальное число в массиве, решение задание должно состоять из одной строки
 * @param {number[]} arr
 */
const minInArr = (arr) => Math.min(...arr);
const arr = [1, 5, 7, 9];
console.log(minInArr(arr));

/**
 * Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement.
 * Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1.
 * Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
 * @param {number} value
 * @returns {{decrement(): void, valueOf(): *, increment(): void}}
 */
const createCounter = (value) => {
  const obj = {
    increment() {
      value += 1;
      return obj;
    },
    decrement() {
      value -= 1;
      return obj;
    },
    valueOf() {
      return value;
    }
  };
  return obj;
};

const counter = createCounter(1);
console.log(+(counter.increment().increment().decrement().increment().increment()));


/**
 * Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса
 * в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
 * @param {HTMLElement} rootElement
 * @param {string} className
 */
function findElementByClass(rootElement, className) {
  if (rootElement.classList.contains(className)) {
    return rootElement;
  }
  if (rootElement.children.length === 0) return;
  for (const child of rootElement.children) {
    const el = findElementByClass(child, className);
    if (el) return el;
  }
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
