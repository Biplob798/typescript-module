{
  //
  // instanceof guard

  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("I am making sound");
    }
  }
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am barking");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I am meawing");
    }
  }

  // better way we can use function
  const isDog = (animal: Animal):animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal):animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (
      //(animal instanceof Dog)
      isDog(animal)
    ) {
      //   animal.makeBark();
      isCat(animal);
    } else if (animal instanceof Cat) {
      animal.makeMeaw();
    }
  };
  const dog = new Dog("Dog bhi", "dog");
  const cat = new Cat("Cat bhi", "cat");
  getAnimal(cat);

  //
}
