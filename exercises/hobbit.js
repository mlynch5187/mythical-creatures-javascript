class Hobbit  {
  constructor(obj)  {
    obj = obj || {};
    this.name = obj.name;
    this.age = 0;
    this.old = false;
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
}

module.exports = Hobbit;
