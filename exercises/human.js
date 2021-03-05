var Ogre = require('./ogre');

class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0
  }

  noticesOgre() {
    if (this.encounterCounter === 3)  {
      this.encounterCounter = 0
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Human;
