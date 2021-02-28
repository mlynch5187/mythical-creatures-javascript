class Magician  {
  constructor(obj) {
    obj = obj || {};
    this.name = `The Great ${obj.name}`;
    this.assistant = obj.assistant;
    if (obj.clothing === undefined) {
      this.favoriteAccessory = 'top hat'
    } else {
      this.favoriteAccessory = obj.clothing;
    }
    this.confidencePercentage = 10;
  }

  performIncantation(incantation)  {
    return `${incantation.toUpperCase()}!`
  }

  performTrick()  {
    this.confidencePercentage += 10;
    if (this.favoriteAccessory === 'top hat') {
      return 'PULL RABBIT FROM TOP HAT';
    } else {
      return 'PULL DOVE FROM SLEEVE';
    }
  }

  performShowStopper()  {
    if (this.confidencePercentage >= 100 && this.assistant === true)  {
      return 'WOW! The magician totally just sawed that person in half!';
    } else {
      return 'Oh no, this trick is not ready!';
    }
  }
}

module.exports = Magician;
