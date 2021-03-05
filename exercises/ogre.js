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
  }

  encounter(human)  {
    human.encounterCounter++
  }
}

module.exports = Ogre;
