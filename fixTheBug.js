function User(userName) {
    this.userName = userName
}

User.prototype.greet = function () {
    console.log(`Hi, I'm ${this.userName}`);
}

const pesho = new User('Peter');

// Calling greet method immediately: works ok
pesho.greet();
// Hi, I'm Peter

// Calling greet method after 2sec: bug!
// setTimeout(pesho.greet,2000);
// Hi, I'm undefined
  
setTimeout(pesho.greet.bind(pesho),2000);