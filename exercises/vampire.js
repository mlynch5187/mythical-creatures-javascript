class Vampire {
  constructor(name, pet) {
    this.name = name;
    if (pet === undefined)  {
      this.pet = 'bat';
    } else {
      this.pet = pet;
    }
    this.thirsty = true
  }

  drink() {
    this.thirst_level = 0
    this.thirst_level++
    if (this.thirst_level > 0) {
      this.thirsty = false;
    }
  }
}

module.exports = Vampire
