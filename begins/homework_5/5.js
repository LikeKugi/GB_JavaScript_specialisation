'use strict';

/*
Необходимо создать объект, в котором будут объединены два массива en и ru
так, чтобы в объекте ключами выступали значения из массива en, а значениями
объекта являлись значения из массива ru.
*/

const en = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const ru = [
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота',
  'воскресенье',
];

// Здесь пишем решение, данный комментарий необходимо стереть.

const obj = en.reduce((accum, kei, idx) => ({ ...accum, [kei]: ru[idx] }), {});
console.log(obj);
