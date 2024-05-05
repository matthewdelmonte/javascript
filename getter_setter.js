// Name Class
function Name(first, last) {
  this.first = first;
  this.last = last;
}

// getter/setter
Name.prototype = {
  get fullName() {
      return this.first + " " + this.last;
  },

  set fullName(name) {
      let names = name.split(" ");
      this.first = names[0];
      this.last = names[1];
  }
};

let customer = new Name("Matthew", "Del Monte");
console.log(customer.first);