import MathCharacter from './mathCharacter';

export default class Daemon extends MathCharacter {
  constructor(name, range, attack = 25, stoned = false) {
    super(name, range, attack, stoned);
  }
}
