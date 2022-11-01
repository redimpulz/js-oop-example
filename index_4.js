class Human {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello, I'm ${this.name}.`);
  }
}

class Programmer extends Human {
  hello() {
    console.log("My Job is Engineer");
  }
}

const humans = [new Human("taro"), new Human("jiro")];

humans.push(new Programmer("takaken"));

for (const h of humans) {
  h.hello();
}
