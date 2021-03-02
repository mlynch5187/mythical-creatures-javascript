class Direwolf  {
  constructor(name, home) {
    this.name = name;
    if (this.home === undefined)  {
      this.home = 'Beyond the Wall';
    } else {
      this.home = home;
    }
  }
}

module.exports = Direwolf;
