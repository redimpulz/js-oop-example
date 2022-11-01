class Human {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello, I'm ${this.name}.`);
  }
}

// 継承
class Engineer extends Human {
  writeCode() {
    console.log(`writing code`);
  }
}

const engineer = new Engineer("takaken");
engineer.hello();
engineer.writeCode();
