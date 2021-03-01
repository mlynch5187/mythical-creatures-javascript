class Centaur {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.breed = obj.type
    this.cranky = false;
    this.standing = true;
  }

  shootBow()  {
    this.cranky = true;
    return 'Twang!!!';
  }

  run() {
    this.cranky = true;
    return 'Clop clop clop clop!!!'
  }
}

module.exports = Centaur;
