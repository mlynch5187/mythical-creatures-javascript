class Hobbit{
  constructor(obj)  {
    obj = obj || {};
    this.name = obj.name;
    this.age = 0;
  }

  celebrateBirthday() {
    this.age++
  }
}

module.exports = Hobbit;
