class Direwolf  {
  constructor(name, home) {
    this.name = name;
    if (home === undefined)  {
      this.home = 'Beyond the Wall';
    } else {
      this.home = home;
    }
    this.size = 'Massive';
  }
}

module.exports = Direwolf;
