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
}

module.exports = Stark;
