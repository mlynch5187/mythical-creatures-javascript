class Pirate  {
  constructor(name, job) {
    this.name = name;
    if (job === undefined)  {
      this.job = 'scallywag';
    } else {
      this.job = job;
    }
    this.cursed = false;
  }

  robShip() {
    return 'YAARRR!';
  }
}

module.exports = Pirate;
