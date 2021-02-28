class Magician  {
  constructor(obj) {
    obj = obj || {};
    this.name = `The Great ${obj.name}`;
  }
}

module.exports = Magician;
