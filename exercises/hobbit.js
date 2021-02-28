class Hobbit  {
  constructor(obj)  {
    obj = obj || {};
    this.name = obj.name;
    this.age = 0;
  }

  celebrateBirthday() {
    this.age++
    if (this.age > 32)  {
      this.adult = true;
    } else {
      this.adult = false;
    }
  }
}

module.exports = Hobbit;
