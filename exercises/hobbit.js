class Hobbit{
  constructor(obj)  {
    obj = obj || {};
    this.name = obj.name;
    this.age = 0;
  }
}

module.exports = Hobbit;
