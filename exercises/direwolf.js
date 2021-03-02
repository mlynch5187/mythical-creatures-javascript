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
  }
}

module.exports = Direwolf;
