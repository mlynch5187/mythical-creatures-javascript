class Sphinx  {
  constructor() {
    this.riddles = []
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
      this.riddles.shift();
    }
  }
}

module.exports = Sphinx;
