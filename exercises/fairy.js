class Fairy {
  constructor(name) {
    this.name = name
    this.dust = 10;
    this.clothes = {
      dresses: ['Iris']
    }
    this.disposition = 'Good natured';
    this.humanWards = [];
  }

  receiveBelief() {
    this.dust++
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(flowers) {
    this.clothes.dresses = this.clothes.dresses.concat(flowers);
  }

  becomeProvoked()  {
    this.disposition = 'Vengeful'
  }

  replaceInfant(infant) {
    if (this.disposition = 'Vengeful')
      infant.disposition = 'Malicious';
      this.humanWards.push(infant)
      return infant;
  }
}

module.exports = Fairy;
