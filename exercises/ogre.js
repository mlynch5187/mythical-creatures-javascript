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
}

module.exports = Ogre;
