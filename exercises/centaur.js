class Centaur {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.breed = obj.type
    this.cranky = false;
    this.fatigue = 0;
    this.standing = true;
    this.layingDown = false;
  }

  shootBow()  {
    this.fatigue++
    if (this.fatigue >= 3)  {
      this.cranky = true;
      return 'NO!'
    } else {
      return 'Twang!!!';
    }
  }

  run() {
    this.fatigue++
    if (this.fatigue >= 3)  {
      this.cranky = true;
      return 'NO!';
    } else {
      {
        return 'Clop clop clop clop!!!'
      }
    }
  }

    sleep()  {
      if (this.standing === true) {
        return 'NO!';
    }
  }

  layDown() {
    this.layingDown = true;
    this.standing = false;
  }

  standUp() {
    this.layingDown = false;
    this.standing = true;    
  }
}

module.exports = Centaur;
