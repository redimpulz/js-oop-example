class Human {
  #name;
  constructor(name) {
    this.#name = name;
  }
  hello() {
    console.log(`Hello, I'm ${this.#name}.`);
  }
}

const human = new Human("takaken");
human.hello();
// console.log(human.#name);
