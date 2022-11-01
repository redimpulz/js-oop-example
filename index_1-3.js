class Human {
  name;
  constructor(name = "no name") {
    this.name = name;
  }
  hello() {
    console.log(`Hello, I'm ${this.name}.`);
  }
}

const humman = new Human();
humman.hello();
