class Dragon  {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.food = 0;
    this.hungry = true;
  }

  greet() {
    return `Hi, ${this.rider}!`;
  }

  eat() {
    this.food++
    if (this.food > 2)  {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
