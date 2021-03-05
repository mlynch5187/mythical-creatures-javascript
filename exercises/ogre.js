var Human = require('./human');

class Ogre  {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    if (obj.abode === undefined)  {
      this.home = 'Swamp'
    } else {
      this.home = obj.abode;
    }
    this.swings = 0;
  }

  encounter(human)  {
    human.encounterCounter++
  }

    swingAt(human)  {
      this.swings++
  }
}

module.exports = Ogre;
