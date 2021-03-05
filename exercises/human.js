var Ogre = require('./ogre');

class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0
    this.knockedOut = false;
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
