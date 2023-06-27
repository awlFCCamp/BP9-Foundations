class Dog {
  constructor(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
  greeting() {
    console.log(
      `My name is ${this.name}, my age is ${this.age} and my breed is ${this.breed}`
    );
  }
}

let muffin = new Dog("Muffin", "poodel", 3);
let Jimmy = new Dog("Jimmy", "poodel", 5);
console.log(muffin.age);
muffin.greeting();
Jimmy.greeting();
console.log(muffin);
console.log(Jimmy);

for (attr in muffin) {
  console.log(muffin[attr]);
}

for (attr in Jimmy) {
  console.log(attr + " " + Jimmy[attr]);
}

class Puppy extends Dog {
  constructor(name, breed, age, trainingLevel) {
    super(name, breed, age);
    this.trainingLevel = trainingLevel;
  }
  piddle() {
    console.log(`${this.name} has peed on the floor`);
  }
  levelUp(num) {
    this.trainingLevel += num;
  }
}

let apple = new Puppy("apple", "poodle", 5, 1);

apple.piddle();
apple.levelUp(100);
console.log(apple);
apple.greeting();
