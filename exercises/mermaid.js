var Pearl = require('./pearl')

class Mermaid {
  constructor(name) {
    this.name = name
    this.pearls = [];
  }

  collectPearl(pearl) {
    this.pearls.push(pearl);
  }
}

module.exports = Mermaid;
