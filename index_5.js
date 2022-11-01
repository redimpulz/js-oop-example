class Human {
  static japaneseName = "人間";

  constructor(name) {
    this.name = name;
  }

  static thanks() {
    console.log("thanks!");
  }

  hello() {
    console.log(`Hello, I'm ${this.name}.`);
  }
}

Human.thanks();
console.log(Human.japaneseName);
