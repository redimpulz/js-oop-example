class Human {
  #name;
  constructor(name) {
    this.#name = name;
  }
  hello() {
    console.log(`Hello, I'm ${this.#name}.`);
    this.#bye();
  }
  #bye() {
    console.log(`bye!`);
  }
}

const human = new Human("takaken");
human.hello();
// human.#bye();
