var Stark = require('./stark');

class Direwolf  {
  constructor(name, home, size) {
    this.name = name;
    if (home === undefined)  {
      this.home = 'Beyond the Wall';
    } else {
      this.home = home;
    }
    if (size === undefined) {
      this.size = 'Massive';
    } else {
      this.size = size;
    }
    this.starksToProtect = [];
  }

  protect(stark)  {
    if (this.home === stark.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark);
    }
  }
}

module.exports = Direwolf;
