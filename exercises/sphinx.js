class Sphinx  {
  constructor() {
    this.riddles = []
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle);
  }
}

module.exports = Sphinx;
