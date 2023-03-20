/* eslint-disable no-underscore-dangle */
class Character {
  constructor(distance) {
    this.distance = distance;
    this.stoned = false;
    this.attack = 100;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    this._attack *= (1 - (this.distance - 1) / 10);
    if (this.stoned) {
      this._attack -= Math.log2(this.distance) * 5;
    }
    return Math.round(this._attack);
  }

  set attack(value) {
    if (value >= 100) {
      this._attack = 100;
    } else if (value <= 0) {
      this._attack = 0;
    } else {
      this._attack = value;
    }
  }
}

export default Character;
