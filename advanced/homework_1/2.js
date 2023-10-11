"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

Необходимо создать систему управления этими заказами, которая позволит:

Отслеживать, какой повар готовит какое блюдо.
Записывать, какие блюда заказал каждый клиент.
Используйте коллекции Map для хранения блюд и их поваров, а также для хранения
заказов каждого клиента. В качестве ключей для поваров и клиентов используйте
объекты.

Повара и их специализации:
Виктор - специализация: Пицца.
Ольга - специализация: Суши.
Дмитрий - специализация: Десерты.

Блюда и их повара:
Пицца "Маргарита" - повар: Виктор.
Пицца "Пепперони" - повар: Виктор.
Суши "Филадельфия" - повар: Ольга.
Суши "Калифорния" - повар: Ольга.
Тирамису - повар: Дмитрий.
Чизкейк - повар: Дмитрий.

Заказы:
Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк.
*/

/**
 *
 * @param {string} name
 * @param {string} specialisation
 * @constructor
 */
function Employee(name, specialisation) {
  this.name = name;
  this.specialisation = specialisation;
}

/**
 *
 * @param {string} name
 * @param {string[]} order
 * @constructor
 */
function Client(name, order=[]) {
  this.name = name;
  this.order = order;
}

/**
 *
 * @param {string} dish
 */
Client.prototype.addOrder = function (...dish) {
  this.order.push(...dish)
}

const victor = new Employee("Виктор", "Пицца");
const olga = new Employee("Ольга", "Суши");
const dzmitry = new Employee("Дмитрий", "Десерты");

const dishes = new Map([["Пицца \"Маргарита\"", victor], ["Пицца \"Пепперони\"", victor], ["Суши \"Филадельфия\"", olga], ["Суши \"Калифорния\"", olga], ["Тирамису", dzmitry], ["Чизкейк", dzmitry]]);


const alexey = new Client('Алексей');
alexey.addOrder("Пицца \"Пепперони\"", "Тирамису")

const maria = new Client('Мария');
maria.addOrder("Суши \"Калифорния\"", "Пицца \"Маргарита\"")

const irina = new Client('Ирина');
irina.addOrder("Чизкейк")

const orders = new Map()
Array.prototype.forEach.call([alexey, maria, irina], client => orders.set(client.name, client.order.map(dish => ({[dish]: dishes.get(dish).name}))));

console.log(orders)
