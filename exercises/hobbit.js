class Hobbit{
  constructor(obj)  {
    obj = obj || {};
    this.name = obj.name;
    this.age = 0;
    if (this.age < 32)  {
      this.adult = false;
    } else {
      this.adult = true;
    }
  }

  celebrateBirthday() {
    this.age++
  }
}

module.exports = Hobbit;
