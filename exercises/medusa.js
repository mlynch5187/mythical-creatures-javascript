var Person = require('./person');
var Statue = require('./statue');

class Medusa  {
  constructor(name) {
    this.name = name
    this.statues = [];
  }

  gazeAtVictim(victim)  {
    var newStatue = new Statue(victim.name);

    if (this.statues.length === 3) {
      var newPerson = new Person(this.statues.shift().name);
      newPerson.mood = 'relieved';
    }
    if (this.statues.length < 3) {
      this.statues.push(newStatue);
    }
    return newPerson;
  }
}

module.exports = Medusa;
