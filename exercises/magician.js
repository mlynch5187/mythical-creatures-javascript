class Magician  {
  constructor(obj) {
    obj = obj || {};
    this.name = `The Great ${obj.name}`;
    this.assistant = obj.assistant;
    if (obj.clothing === undefined) {
      this.favoriteAccessory = 'top hat'
    } else {
      this.favoriteAccessory = obj.clothing;
    }
  }
}

module.exports = Magician;