class Hobbit  {
  constructor(obj)  {
    obj = obj || {};
    this.name = obj.name;
    this.age = 0;
    this.old = false;
    this.hasRing = false;
  }

  celebrateBirthday() {
    this.age++
    if (this.age >= 33)  {
      this.adult = true;
    } else {
      this.adult = false;
    }
    if (this.age >= 101)  {
      this.old = true;
    }
  }

  getRing() {
    if (this.name == 'Frodo')  {
      this.hasRing = true
      return 'Here is the ring!';
    } else {
      this.hasRing = false;
      return 'You can\'t have it!';
    }
  }
}

module.exports = Hobbit;
