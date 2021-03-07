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

  attemptAnswer(answer) {
    if (this.riddles[0].answer === answer)  {
    this.riddles.splice(0);
    }
    else if (this.riddles[1].answer === answer)  {
    this.riddles.splice(1);
    }
    else if (this.riddles[2].answer === answer)  {
    this.riddles.splice(2);
    }
    else if (this.riddles[3].answer === answer)  {
    this.riddles.splice(3);
    }
  }
}

module.exports = Sphinx;
