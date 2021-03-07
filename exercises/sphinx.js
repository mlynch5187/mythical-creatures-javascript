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
    return 'That wasn\'t that hard, I bet you don\'t get the next one';
    }
    else if (this.riddles[1].answer === answer)  {
    this.riddles.splice(1);
    return 'That wasn\'t that hard, I bet you don\'t get the next one';
    }
    else if (this.riddles[2].answer === answer)  {
    this.riddles.splice(2);
    return 'That wasn\'t that hard, I bet you don\'t get the next one';
    }
    else if (this.riddles[3].answer === answer)  {
    this.riddles.splice(3);
    return 'That wasn\'t that hard, I bet you don\'t get the next one';
    }
  }
}

module.exports = Sphinx;
