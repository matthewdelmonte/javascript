class Car {
  constructor(brand) {
    this.brand = brand
  };

  greeting() {
    console.log("Car brand is " + this.brand)
  };
}

const myCar = new Car("Mazda");

myCar.greeting();