class Pirate  {
  constructor(name, job) {
    this.name = name;
    if (job === undefined)  {
      this.job = 'scallywag';
    }
  }
}

module.exports = Pirate;
