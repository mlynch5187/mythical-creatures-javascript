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
}

module.exports = Werewolf;
