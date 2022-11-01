class Human {
  name;
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello, I'm ${this.name}.`);
  }
}

const h1 = new Human("takaken");
const h2 = new Human("kikuchi");

h1.hello();
h2.hello();
