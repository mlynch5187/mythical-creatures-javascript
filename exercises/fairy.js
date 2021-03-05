class Fairy {
  constructor(name) {
    this.name = name
    this.dust = 10;
    this.clothes = {
      dresses: ['Iris']
    }
  }

  receiveBelief() {
    this.dust++
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(dresses) {
    this.clothes.dresses = this.clothes.dresses.concat(dresses);  
  }
}

module.exports = Fairy;
