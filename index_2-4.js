class Human {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello, I'm ${this.name}.`);
  }
}

class Engineer extends Human {
  constructor(name, skill) {
    super(name);
    this.skill = skill;
  }
  writeCode() {
    console.log(`writing code`);
  }
}

const engineer = new Engineer("takaken", "JavaScript");
console.log(engineer.skill);
