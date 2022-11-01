class Human {
  #name;
  constructor(name) {
    this.#name = name;
  }
  hello() {
    console.log(`Hello, I'm ${this.#name}.`);
  }
  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }
}

const human = new Human("takaken");
console.log(human.name);
human.name = "kikuchi";
console.log(human.name);
