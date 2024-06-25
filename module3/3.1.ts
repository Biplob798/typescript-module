{
  // oop- class

  class Animal1 {
    // public name:string;
    // public species:string;
    // public sound:string;

    // parameter properties
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      // this.name=name;
      // this.species=species;
      // this.sound=sound;
    }
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog1 = new Animal1("German Shepard Bhi", "dog", "Ghee Ghee");
  const cat1 = new Animal1("German Shepard Bhi", "cat", "meow meow");
  dog1.makeSound();

  // -------------------
//   use by parameter

  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  
  const dog = new Animal("German Shepard Bhi", "dog", "Ghee Ghee");
  const cat = new Animal("German Shepard Bhi", "cat", "meow meow");
  dog.makeSound();

  //
}
