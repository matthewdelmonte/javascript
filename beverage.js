class Beverage {
  constructor(description, pi) {
    this.description = description;
    this.pi = pi;
  }

  pi = this.pi

  getDescription() {
    return this.description;
  };

  cost(retail) {
    return retail;
  }
};

class CondimentDecorator extends Beverage {

  getDescription() {
    return super.getDescription()
  };
};

const Cups = class {
  constructor(type, size) {
    this.type = type;
    this.size - size;
  }

  const message = `The ${this.type} cup is ${this.size} ounces`;

  console.log({message});
};

const bev =  new CondimentDecorator("Mocha");
console.log(bev.getDescription())
console.log(bev.cost("$3.99"))
console.log(bev.pi)
Cups(paper, 16);
