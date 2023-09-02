/**
 * Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
 *
 * Свойство name (имя) - строка, имя сотрудника.
 * Метод displayInfo() - выводит информацию о сотруднике (имя).
 * Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
 *
 * Свойство department (отдел) - строка, отдел, в котором работает менеджер.
 * Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
 */

class Employee {
  #name;

  constructor(name) {
    this.name = name;
  }

  set name(value) {
    this.#name = typeof value === "string" ? value : "Employee";
  }

  get name() {
    return this.#name;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
  }
}

const employee = new Employee("John Smith");
employee.displayInfo();

class Manager extends Employee {
  #department;

  constructor(name, department) {
    super(name);
    this.#department = department;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Department: ${this.#department}`);
  }
}

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
