class Person {
  constructor(private name: string, private age: number) {
  }
  introduce() {
    console.log(`My name is ${this.name} and I'm ${this.age} years old.`)
  }
}

const person = new Person("John", 25);
person.introduce();
