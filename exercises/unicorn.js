class Unicorn {
  constructor(name, color) {
    this.name = name
    if (color === undefined)  {
      this.color = 'white';
    } else {
      this.color = color;
    }
  }
}

module.exports = Unicorn;
