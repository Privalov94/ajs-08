import MathCharacter from './mathCharacter';

export default class Magician extends MathCharacter {
  constructor(name, range, attack = 30, stoned = false) {
    super(name, range, attack, stoned);
  }
}
