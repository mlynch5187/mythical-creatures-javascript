class Vampire {
  constructor(name, pet) {
    this.name = name;
    if (pet === undefined)  {
      this.pet = 'bat';
    } else {
      this.pet = pet;
    }
    this.thirsty = true
    this.ouncesDrank = 0
  }

  drink() {
    this.ouncesDrank += 10
    if (this.ouncesDrank > 0) {
      this.thirsty = false;
    }
  }
}

module.exports = Vampire
