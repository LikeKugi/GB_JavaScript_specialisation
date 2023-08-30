class Student {
  #name;
  #age;
  #grade;
  constructor(name, age, grade) {
    this.#name = name;
    this.#age = age;
    this.#grade = grade;
  }
  displayInfo() {
    console.log(`Name: ${this.#name}\nAge: ${this.#age}\nGrade: ${this.#grade}`);
  }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade"
