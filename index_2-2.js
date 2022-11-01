class Human {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello, I'm ${this.name}.`);
  }
}

class Engineer extends Human {
  writeCode() {
    console.log(`writing code`);
  }
}

class FrontendEngineer extends Engineer {
  writeHtml() {
    console.log(`writing html`);
  }
}

const frontendEngineer = new FrontendEngineer("takaken");
frontendEngineer.hello();
frontendEngineer.writeCode();
frontendEngineer.writeHtml();
