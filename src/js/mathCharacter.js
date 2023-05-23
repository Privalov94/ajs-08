import Character from './character';

export default class MathCharacter extends Character {
  constructor(name, range, attack, stoned) {
    super(name, attack, stoned);
    this.range = range;
  }

  set attack(value) {
    this.zattack = value;
  }

  get attack() {
    let attack = this.zattack;

    attack -= attack * ((this.range - 1) / 10);

    if (this.stoned) {
      attack -= Math.log(this.range) * 5;
    }
    return (attack > 0) ? Math.floor(attack) : 0;
  }

  set stoned(value) {
    this.sstoned = value;
  }

  get stoned() {
    return this.sstoned;
  }
}
