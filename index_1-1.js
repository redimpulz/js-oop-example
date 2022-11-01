class Human {
  name = "takaken";
  hello() {
    console.log(`Hello, I'm ${this.name}.`);
  }
}

const human = new Human();
// human.hello();
console.log(human.name);
human.name = "kikuchi";
console.log(human.name);
