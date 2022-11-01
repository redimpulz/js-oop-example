class Human {
  #name;
  constructor(name) {
    this.#name = name;
  }
  hello() {
    console.log(`Hello, I'm ${this.#name}.`);
  }
  getName() {
    return this.#name;
  }
  setName(name) {
    this.#name = name;
  }
}

const human = new Human("takaken");
console.log(human.getName());
human.setName("kikuchi");
console.log(human.getName());
