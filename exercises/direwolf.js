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
    this.huntsWhiteWalkers = true;
    if (this.starksToProtect.length > 0)  {
      this.huntsWhiteWalkers = false;
    }
  }

  protect(stark)  {
    if (this.home === stark.location && this.starksToProtect.length < 2 && stark.safe === false) {
      this.starksToProtect.push(stark);
      stark.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }

  leave(stark) {
    this.starksToProtect.shift(stark);
    stark.safe = false;
  }
}

module.exports = Direwolf;
