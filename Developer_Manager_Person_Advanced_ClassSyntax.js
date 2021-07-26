/* --------------------------- Person class --------------------------- */
class Person {
  // your code here ...
  // name = "not applicable";
  age = "unknown";
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  // Person greet method
  // your code here ...

  // greet() {
  //   if (this instanceof Developer) {

  //     console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.\nI know ${this.skillset.join()}.`);

  //   } else if (this instanceof Manager) {

  //     console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.\nI manage ${this.managed.map(el => el.name)}.`);
  //   }
  // }

  //above code works, but wanted to use greet in sub classes with super.greet()
  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

/* --------------------------- Manager class -------------------------- */

class Manager extends Person {
  // reuse Person constructor
  // your code here ...
  constructor(name, age, managed) {
    super(name, age);
    this.managed = managed;
  }
  
  manGreet(){
    super.greet();
    console.log(`I manage ${this.managed.map(el => el.name)}.`);
  }
}

// Manager objects should inherit all methods from Person:

/* -------------------------- Developer class ------------------------- */
class Developer extends Person {
  // reuse Person constructor
  // your code here ...
  constructor(name, age, skillset) {
    super(name, age);
    this.skillset = skillset;
  }

  devGreet(){
    super.greet();
    console.log(`I know ${this.skillset.join()}.`);
  }
}

// Developer objects should inherit all methods from Person:

/* ----------------------------- Create Objects ----------------------------- */
// Developer instances
let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);

// Manager instances
let gates = new Manager('Bill Gates', 43, [maria, pesho]);

/* ----------------------------- Use the objects ---------------------------- */
// maria.greet();
// pesho.greet();
// gates.greet();

maria.devGreet();
pesho.devGreet();
gates.manGreet();