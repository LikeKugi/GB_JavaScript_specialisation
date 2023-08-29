interface IAnimal {
  name: string
  eat: () => void
}
interface IDog extends IAnimal {
  bark: () => void;
}

const Animal: IAnimal = {
  name: 'animal',
  eat() {
    console.log(this.name, 'is eating')
  }
}

const Dog: IDog = {
  name: 'Rex',
  eat: Animal.eat,
  bark() {
    console.log('barking');
  }
}

Animal.eat();
Dog.eat()
