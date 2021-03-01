class Centaur {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.breed = obj.type
    this.cranky = false;
    this.fatigue = 0;
    this.standing = true;
  }

  shootBow()  {
    this.fatigue++
    if (this.fatigue >= 3)  {
      this.cranky = true;
    }
    return 'Twang!!!';
  }

  run() {
    this.fatigue++
    if (this.fatigue >= 3)  {
      this.cranky = true;
    }
    return 'Clop clop clop clop!!!'
  }
}

module.exports = Centaur;
