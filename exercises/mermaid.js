var Pearl = require('./pearl')

class Mermaid {
  constructor(name) {
    this.name = name
    this.pearls = [];
  }

  collectPearl(pearl) {
    this.pearls.push(pearl);
  }

  turnToGold(pearl) {
    pearl.name = "Gold Pearl"
  }
}

module.exports = Mermaid;
