var Direwolf = require('./direwolf');

class Stark {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    if (obj.area === undefined) {
      this.location = 'Winterfell';
    } else {
      this.location = obj.area;
    }
    this.safe = false;
  }

  sayHouseWords() {
    if (this.safe === false)  {
      return 'Winter is Coming'
    } else {
      return 'The North Remembers';
    }
  }

  callDirewolf(name)  {
    var wolf = new Direwolf(name, this.location);
    wolf.protect(this)

    return wolf
  }
}

module.exports = Stark;
