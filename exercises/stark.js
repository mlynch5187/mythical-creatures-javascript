class Stark {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    if (obj.area === undefined) {
      this.location = 'Winterfell';
    } else {
      this.location = obj.area;
    }
  }
}

module.exports = Stark;
