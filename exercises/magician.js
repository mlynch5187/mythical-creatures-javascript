class Magician  {
  constructor(obj) {
    obj = obj || {};
    this.name = `The Great ${obj.name}`;
    this.assistant = obj.assistant;
  }
}

module.exports = Magician;
