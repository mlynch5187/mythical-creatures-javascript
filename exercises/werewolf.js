var Victim = require('./victim');

class Werewolf  {
  constructor(name) {
    this.name = name;
    this.form = 'human';
    this.hungry = false
  }

  completeTransformation()  {
    if (this.form === 'human'){
      this.form = 'wolf';
      this.hungry = true;
      return 'Aaa-Woooo!';
    }
    if (this.form === 'wolf') {
      this.form = 'human';
      this.hungry = false;
      return 'Where are I?';
    }
  }

  eatVictim(victim) {
    if (this.form === 'wolf') {
      victim.alive = false;
      this.form = 'human';
      return `Yum, ${victim.name} was delicious.`;
    } else {
      return "No way am I eating Baby, I'd like a burger!"
    }
  }
}

module.exports = Werewolf;
