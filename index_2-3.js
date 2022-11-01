class Human {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello, I'm ${this.name}.`);
  }
}

class Engineer extends Human {
  hello() {
    super.hello();
    console.log("My Job is Engineer");
  }
  writeCode() {
    console.log(`writing code`);
  }
}

const engineer = new Engineer("takaken");
engineer.hello();
