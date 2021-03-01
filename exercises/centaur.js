class Centaur {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.breed = obj.type
    this.cranky = false;
  }

  shootBow()  {
    return 'Twang!!!';
  }

  run() {
    return 'Clop clop clop clop!!!'
  }
}

module.exports = Centaur;
