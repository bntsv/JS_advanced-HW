/* --------------------------- Person constructor --------------------------- */
function Person(name, age){
    // your code here ...
    this.name = name;
    this.age = age;
  }
  
  // Person greet method
  // your code here ...
  Person.prototype.greet = function(){
      if (this instanceof Developer){

        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old. I know ${this.skillset}`);
        
      } else if(this instanceof Manager){
        
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old. I manage ${this.managed.map(el => el.name)}`);
      }
  }
  
  /* --------------------------- Manager constructor -------------------------- */
  function Manager(name, age, managed){
    // reuse Person constructor
    // your code here ...
    Person.call(this, name,age);
    this.managed = managed;
    
  }
  // Manager objects should inherit all methods from Person:
  
  
  /* -------------------------- Developer constructor ------------------------- */
  function Developer(name, age, skillset){
    // reuse Person constructor
    // your code here ...
    Person.call(this, name,age);
    this.skillset = skillset;
    
  }
  // Developer objects should inherit all methods from Person:
  Manager.prototype = Object.create(Person.prototype);
  Developer.prototype = Object.create(Person.prototype);

  
  /* ----------------------------- Create Objects ----------------------------- */
  // Developer instances
  let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
  let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);
  
  // Manager instances
  let gates = new Manager('Bill Gates', 43, [maria, pesho]);
  
  /* ----------------------------- Use the objects ---------------------------- */
  maria.greet();
  pesho.greet();
  gates.greet();