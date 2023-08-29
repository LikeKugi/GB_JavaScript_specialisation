interface IPerson {
  name: string
  age: number
  gender: 'male' | 'female'
  introduce: () => void
  changeName: (val: string) => void
}

const Person: IPerson = {
  name: '',
  age: 0,
  gender: 'male',
  introduce() {
    console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}`)
  },
  changeName(newName: string) {
    this.name = newName;
  }
}

Person.name = "John";
Person.age = 25;
Person.gender = "male";
Person.introduce(); // Ожидаемый результат: My name is John. I'm 25 years old and I identify as male.
Person.changeName("Mike");
Person.introduce();
