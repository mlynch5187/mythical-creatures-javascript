class Pirate  {
  constructor(name, job) {
    this.name = name;
    if (job === undefined)  {
      this.job = 'scallywag';
    } else {
      this.job = job;
    }
    this.cursed = false;
    this.booty = 0;
    this.cursed = false;
  }

  robShip() {
    if (this.booty >= 500) {
      this.cursed = true;
      return 'ARG! I\'ve been cursed!';
  } else {
      this.booty += 100;
      return 'YAARRR!';
    }
  }
}

module.exports = Pirate;
